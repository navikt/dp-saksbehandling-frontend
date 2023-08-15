import { getAzureSession, getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";

export interface IVedtak {
  type: string;
}

export async function hentVedtak(ident: string, request: Request) {
  const session = await getAzureSession(request);

  if (!session) {
    throw new Response(null, { status: 500, statusText: "Feil ved henting av sesjon" });
  }

  const onBehalfOfToken = await getBehandlingOboToken(session);

  const url = `${getEnv("DP_VEDTAK_URL")}/vedtak`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: JSON.stringify({ ident }),
  });

  return response;
}
