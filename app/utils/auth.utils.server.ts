import { getToken, requestOboToken, validateToken } from "@navikt/oasis";

import { logger } from "~/utils/logger.utils";

export async function getSaksbehandlingOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_SAKSBEHANDLING_TOKEN as string;
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-saksbehandling/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getBehandlingOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_BEHANDLING_TOKEN as string;
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-behandling/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getMeldingOmVedtakOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_MELDING_OM_VEDTAK_TOKEN as string;
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-melding-om-vedtak/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getSoknadOrkestratorOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_SOKNAD_ORKESTRATOR_TOKEN as string;
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-soknad-orkestrator/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getMicrosoftOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.MICROSOFT_TOKEN as string;
  }

  const audience = `https://graph.microsoft.com/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getSAFOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.SAF_TOKEN as string;
  }

  const audience = `${process.env.SAF_AUDIENCE}`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getOnBehalfOfToken(request: Request, audience: string) {
  const token = getToken(request);

  if (!token) {
    logger.error("Missing token");
    throw new Response("Missing token", { status: 401 });
  }

  const validation = await validateToken(token);
  if (!validation.ok) {
    logger.error(`Failed to validate token: ${validation.error}`);
    throw new Response("Token validation failed", { status: 401 });
  }

  const obo = await requestOboToken(token, audience);
  if (!obo.ok) {
    logger.error(`Failed to get OBO token: ${obo.error}`);
    throw new Response("Unauthorized", { status: 401 });
  }

  return obo.token;
}
