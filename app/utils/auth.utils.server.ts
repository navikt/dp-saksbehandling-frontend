import { getToken, requestOboToken, validateToken } from "@navikt/oasis";

import { getLocalToken } from "~/utils/local-token-refresh.server";
import { logger } from "~/utils/logger.utils";

export async function getSaksbehandlingOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return await getLocalToken("DP_SAKSBEHANDLING_TOKEN");
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-saksbehandling/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getRapporteringPersonregisterOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return await getLocalToken("DP_RAPPORTERING_PERSONREGISTER_TOKEN");
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-rapportering-personregister/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getBehandlingOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return await getLocalToken("DP_BEHANDLING_TOKEN");
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-behandling/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getSoknadOrkestratorOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return await getLocalToken("DP_SOKNAD_ORKESTRATOR_TOKEN");
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-soknad-orkestrator/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getMicrosoftOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return await getLocalToken("MICROSOFT_TOKEN");
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

async function getOnBehalfOfToken(request: Request, audience: string) {
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
