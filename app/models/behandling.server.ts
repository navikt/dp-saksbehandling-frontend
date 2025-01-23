import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

export interface IRegelsett {
  navn: string;
  hjemmel: IHjemmel;
  relevantForVedtak: boolean;
  status: "Oppfylt" | "HarAvklaring" | "IkkeOppfylt" | "Info" | null;
  avklaringer: IAvklaring[];
  opplysningIder: string[];
}

export interface IHjemmel {
  kilde: {
    navn: string;
    kortnavn: string;
  };
  kapittel: string;
  paragraf: string;
  tittel: string;
}

export interface IBehandling {
  behandlingId: string;
  tilstand:
    | "UnderOpprettelse"
    | "UnderBehandling"
    | "Redigert"
    | "ForslagTilVedtak"
    | "Låst"
    | "Avbrutt"
    | "Ferdig"
    | "TilGodkjenning"
    | "TilBeslutning";
  kreverTotrinnskontroll: boolean;
  vilkår: IRegelsett[];
  fastsettelser: IRegelsett[];
  avklaringer: IAvklaring[];
  opplysninger: IOpplysning[];
}

export interface IBehandlingGammel {
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
  gyldigFraOgMed: string | null;
  gyldigTilOgMed: string | null;
  datatype: string;
  redigerbar?: boolean;
  kilde: IKilde | null;
  synlig: boolean;
  formål: "Legacy" | "Mellomsteg" | "Bruker" | "Register" | "Regel";
  utledetAv: {
    regel: {
      navn: string;
    };
    opplysninger: string[];
  } | null;
}

export interface IKilde {
  type: "Saksbehandler" | "System";
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
  maskinelt: boolean;
  status: "Åpen" | "Avbrutt" | "Avklart";
  avklartAv: { ident: string } | null;
  sistEndret: string;
  begrunnelse: string | null;
}

export async function hentOpplysninger(
  request: Request,
  behandlingId: string,
): Promise<IBehandlingGammel> {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/opplysning`;
  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
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
): Promise<IBehandlingGammel> {
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
  begrunnelse?: string,
) {
  const onBehalfOfToken = await getBehandlingOboToken(request);

  const url = `${getEnv("DP_BEHANDLING_URL")}/behandling/${behandlingId}/avklaring/${avklaringId}`;
  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ begrunnelse: begrunnelse ?? "" }),
  });
}
