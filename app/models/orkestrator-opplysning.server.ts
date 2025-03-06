import { IOrkestratorLand } from "mocks/data/mock-orkestrator-land-lister";

import { getSoknadOrkestratorOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

import { IOrkestratorBarnOpplysning } from "../../mocks/data/mock-orkestrator-barn-opplysninger";

export async function hentOrkestratorBarnOpplysninger(
  request: Request,
  oppgaveId: string,
): Promise<IOrkestratorBarnOpplysning[]> {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);
  const url = `${getEnv("DP_SOKNAD_ORKESTRATOR_URL")}/opplysninger/${oppgaveId}/barn`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function oppdaterOrkestratorBarnOpplysning(
  request: Request,
  barnOpplysning: IOrkestratorBarnOpplysning,
): Promise<IOrkestratorLand[]> {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);
  const url = `${getEnv("DP_SOKNAD_ORKESTRATOR_URL")}/land`;

  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ barnOpplysning }),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function hentOrkestratorLandListe(request: Request): Promise<IOrkestratorLand[]> {
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
