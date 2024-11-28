import { getToken, parseAzureUserToken, validateToken } from "@navikt/oasis";
import { LRUCache } from "lru-cache";

import { getMicrosoftOboToken } from "~/utils/auth.utils.server";
import { getHeaders } from "~/utils/fetch.utils";
import { logger } from "~/utils/logger.utils";

export interface ISaksbehandler {
  onPremisesSamAccountName: string; // Dette er saksbehandlerIdent
  givenName: string;
  displayName: string;
  mail: string;
}

const cache = new LRUCache<string, ISaksbehandler>({
  max: 50,
  ttl: 5 * 60 * 1000,
});

export async function getSaksbehandler(request: Request): Promise<ISaksbehandler> {
  try {
    const navIdent = await getNavIdent(request);

    if (navIdent == null) throw new Response("Unauthorized", { status: 401 });
    if (cache.has(navIdent)) return cache.get(navIdent)!;

    const oboToken = await getMicrosoftOboToken(request);

    const url =
      "https://graph.microsoft.com/v1.0/me/?$select=onPremisesSamAccountName,givenName,displayName,mail";

    const data = await fetch(url, {
      headers: getHeaders(oboToken),
    });

    const json = await data.json();

    cache.set(navIdent, json);

    return json;
  } catch (error: unknown) {
    logger.warn(`Klarte ikke hente saksbehandler status: 401. ${error}`);
    throw new Response("Unauthorized", { status: 401 });
  }
}

async function getNavIdent(request: Request): Promise<string | null> {
  const token = getToken(request);
  if (token == null) return null;

  const validation = await validateToken(token);
  if (!validation.ok) return null;

  const parsed = parseAzureUserToken(token);
  if (!parsed.ok) return null;

  return parsed.NAVident;
}
