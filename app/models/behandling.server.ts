import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

export interface IBehandling {
  behandlingId: string;
  tilstand: string;
  kreverTotrinnskontroll: boolean;
  avklaringer: IAvklaring[];
  opplysning: IOpplysning[];
}

export interface IOpplysning {
  id: string;
  navn: string;
  verdi: string;
  status: "Hypotese" | "Faktum";
  tekstId: string | null;
  gyldigFraOgMed: string | null;
  gyldigTilOgMed: string | null;
  datatype: string;
  redigerbar?: boolean;
  kilde: IKilde | null;
  utledetAv: {
    regel: {
      navn: string;
    };
    opplysninger: string[];
  } | null;
}

export interface IKilde {
  type: string;
  registrert: string;
  ident: string | null;
  meldingId: string | null;
}

export interface IAvklaring {
  id: string;
  kode: string;
  tittel: string;
  beskrivelse: string;
  kanKvitteres?: boolean;
  status: "Åpen" | "Løst" | "Kvittert";
  kvittertAv?: { ident: string };
  begrunnelse?: string;
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
): Promise<Response> {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/avbryt`;
  return await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ ident: personIdent }),
  });
}

export async function godkjennBehandling(
  request: Request,
  behandlingId: string,
  personIdent: string,
): Promise<Response> {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/godkjenn`;
  return await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ ident: personIdent }),
  });
}

export async function endreOpplysning(
  request: Request,
  behandlingId: string,
  opplysningId: string,
  verdi: string,
): Promise<IBehandling> {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/opplysning/${opplysningId}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ verdi, begrunnelse: "" }),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function kvitterAvklaring(
  request: Request,
  behandlingId: string,
  avklaringId: string,
) {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/avklaring/${avklaringId}`;
  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ begrunnelse: "" }),
  });
}
