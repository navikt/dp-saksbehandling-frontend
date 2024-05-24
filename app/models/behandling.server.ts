import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import type { INetworkResponse } from "~/utils/types";
import { handleErrorResponse } from "~/utils/error-response.server";

export interface IBehandling {
  behandlingId: string;
  tilstand: string;
  opplysning: IOpplysning[];
}

export interface IOpplysning {
  id: string;
  navn: string;
  verdi: string;
  status: "Hypotese" | "Faktum";
  gyldigFraOgMed: string | null;
  gyldigTilOgMed: string | null;
  datatype: string;
  redigerbar?: boolean;
  kilde: IKilde | null;
  utledetAv: {
    regel: {
      navn: string;
    };
    opplysninger: IOpplysning[];
  } | null;
}

export interface IKilde {
  type: string;
  registrert: string;
  ident: string | null;
  meldingId: string;
}

export async function hentBehandling(request: Request, behandlingId: string): Promise<IBehandling> {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function avbrytBehandling(
  request: Request,
  behandlingId: string,
  personIdent: string,
): Promise<INetworkResponse> {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/avbryt`;
  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ ident: personIdent }),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return { status: "success" };
}

export async function godkjennBehandling(
  request: Request,
  behandlingId: string,
  personIdent: string,
): Promise<INetworkResponse> {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/godkjenn`;
  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ ident: personIdent }),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return { status: "success" };
}
