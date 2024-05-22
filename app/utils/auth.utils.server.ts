import { getToken, requestOboToken, validateToken } from "@navikt/oasis";

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

export async function getMicrosoftOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.MICROSOFT_TOKEN as string;
  }

  const audience = `https://graph.microsoft.com/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getPDLOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.PDL_TOKEN as string;
  }

  const audience = `${process.env.SAF_AUDIENCE}`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getSAFOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.SAF_TOKEN as string;
  }

  const audience = `${process.env.SAF_AUDIENCE}`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getVeilarbregistreringOboToken(request: Request) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.VEILARBPROXY_TOKEN as string;
  }

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.paw.veilarbregistrering/.default`;
  return await getOnBehalfOfToken(request, audience);
}

export async function getOnBehalfOfToken(request: Request, audience: string) {
  const token = getToken(request);

  if (!token) {
    throw new Response("Missing token", { status: 401 });
  }

  const validation = await validateToken(token);
  if (!validation.ok) {
    throw new Response("Token validation failed", { status: 401 });
  }

  const obo = await requestOboToken(token, audience);
  if (!obo.ok) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return obo.token;
}
