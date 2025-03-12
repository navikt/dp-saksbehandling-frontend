import { IOrkestratorLand } from "mocks/data/mock-orkestrator-land-lister";

import { getSoknadOrkestratorOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";
import { IGrunnOpplysning } from "./behandling.server";

export type IOrkestratorKilde = "register" | "søknad";

export interface IOrkestratorBarnOpplysning extends IGrunnOpplysning {
  kilde?: IOrkestratorKilde;
}

export interface IOrkestratorBarn {
  barnId: string;
  opplysninger: IOrkestratorBarnOpplysning[];
}

export async function hentOrkestratorBarn(
  request: Request,
  soknadId: string,
): Promise<IOrkestratorBarn[]> {
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
): Promise<Response> {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);
  const url = `${getEnv("DP_SOKNAD_ORKESTRATOR_URL")}/opplysninger/${soknadId}/barn/oppdater`;

  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ opplysning }),
  });

  console.log(opplysning);

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
