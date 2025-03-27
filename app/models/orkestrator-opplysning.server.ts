import { getSoknadOrkestratorOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.utils";
import { getHeaders } from "~/utils/fetch.utils";

export async function hentOrkestratorBarn(request: Request, soknadId: string) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);
  const url = `${getEnv("DP_SOKNAD_ORKESTRATOR_URL")}/opplysninger/${soknadId}/barn`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function oppdaterOrkestratorBarn(
  request: Request,
  soknadId: string,
  opplysning: string,
) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);
  const url = `${getEnv("DP_SOKNAD_ORKESTRATOR_URL")}/opplysninger/${soknadId}/barn/oppdater`;

  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ opplysning }),
  });
}

export async function hentOrkestratorLandListe(request: Request) {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);
  const url = `${getEnv("DP_SOKNAD_ORKESTRATOR_URL")}/land`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}
