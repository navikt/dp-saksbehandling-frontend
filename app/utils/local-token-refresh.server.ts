import { logger } from "~/utils/logger.utils";

import tokenGeneratorConfig from "../../token-generator.config.json";

interface CachedToken {
  token: string;
  exp: number; // sekunder siden epoch
}

const tokenCache = new Map<string, CachedToken>();
let pågåendeRefreshAlle: Promise<void> | null = null;
const EXPIRY_MARGIN_SECONDS = 60;

function decodeJwtExp(token: string): number | null {
  try {
    const payload = token.split(".")[1];
    const json = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return typeof json.exp === "number" ? json.exp : null;
  } catch {
    return null;
  }
}

function erUtløptSnart(exp: number): boolean {
  return Date.now() / 1000 > exp - EXPIRY_MARGIN_SECONDS;
}

async function hentTokenMedInnloggingscookie(audienceUrl: string): Promise<string> {
  const cookie = process.env.WONDERWALL_SESSION_COOKIE;

  if (!cookie) {
    throw new Error(
      "Mangler WONDERWALL_SESSION_COOKIE i .env. Kjør `pnpm generate-token` for å logge inn på nytt.",
    );
  }

  const response = await fetch(audienceUrl, {
    headers: { Cookie: `io.nais.wonderwall.session=${cookie}` },
  });

  if (!response.ok) {
    throw new Error(
      `Klarte ikke fornye lokalt token (status ${response.status}). Innloggingen din har sannsynligvis utløpt, kjør \`pnpm generate-token\` på nytt.`,
    );
  }

  const json = await response.json();

  if (typeof json.access_token !== "string") {
    throw new Error("Fikk ikke access_token tilbake fra azure-token-generator");
  }

  return json.access_token;
}

// Fornyer automatisk utløpte lokale tokens ved hjelp av innloggingscookien fra `pnpm generate-token`
export async function getLocalToken(envVar: string): Promise<string> {
  const cached = tokenCache.get(envVar);
  if (cached && !erUtløptSnart(cached.exp)) {
    return cached.token;
  }

  const forrigeToken = process.env[envVar];
  const forrigeExp = forrigeToken ? decodeJwtExp(forrigeToken) : null;

  if (forrigeToken && forrigeExp && !erUtløptSnart(forrigeExp)) {
    tokenCache.set(envVar, { token: forrigeToken, exp: forrigeExp });
    return forrigeToken;
  }

  // Tokenene er utstedt sammen og utløper stort sett samtidig, så vi fornyer alle i ett steg
  // i stedet for å la hvert token trigge sin egen refresh-request etter hvert som det utløper.
  await fornyAlleTokens();

  const oppdatert = tokenCache.get(envVar);
  if (!oppdatert) {
    throw new Error(`Fikk ikke fornyet ${envVar}`);
  }

  return oppdatert.token;
}

function fornyAlleTokens(): Promise<void> {
  if (pågåendeRefreshAlle) {
    return pågåendeRefreshAlle;
  }

  logger.info("Lokale tokens er utløpt, fornyer alle med lagret innloggingscookie");

  pågåendeRefreshAlle = (async () => {
    await Promise.all(
      tokenGeneratorConfig.map(async ({ env, url }) => {
        const token = await hentTokenMedInnloggingscookie(url);
        const exp = decodeJwtExp(token) ?? Date.now() / 1000 + 3600;

        tokenCache.set(env, { token, exp });
      }),
    );
  })();

  try {
    return pågåendeRefreshAlle;
  } finally {
    pågåendeRefreshAlle.finally(() => {
      pågåendeRefreshAlle = null;
    });
  }
}
