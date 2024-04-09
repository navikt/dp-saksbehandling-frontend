import type { SessionWithOboProvider } from "@navikt/oasis";
import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import type { INetworkResponse } from "~/utils/types";

export interface IOpplysningSvar {
  verdi: string;
}

export interface IOpplysning {
  opplysningNavn: string;
  status: "FAKTUM" | "HYPOTESE";
  dataType: IDataType;
  redigerbar: boolean;
  svar: IOpplysningSvar | null;
  kilde: IKilde | null;
}

export interface IKilde {
  type: string;
  registrert: string;
  ident: string;
  meldingId: string;
}

export interface IBehandlingOpplysning {
  id: string;
  navn: string;
  verdi: string;
  status: "Hypotese" | "Faktum";
  gyldigFraOgMed: string | null;
  gyldigTilOgMed: string | null;
  datatype: string;
  redigerbar?: boolean;
  utledetAv?: {
    regel: {
      navn: string;
    };
    opplysninger: IBehandlingOpplysning[];
  };
}

export interface IBehandling {
  behandlingId: string;
  opplysning: IBehandlingOpplysning[];
}

export interface IOppgave {
  oppgaveId: string;
  behandling?: IBehandling; // Rådata fra dp-behandling
  behandlingId: string;
  personIdent: string;
  person: IPerson;
  tidspunktOpprettet: string;
  journalpostIder: string[];
  tilstand: IOppgaveTilstand;
  emneknagger: string[];
}

export interface IPerson {
  ident: string;
  fornavn: string;
  etternavn: string;
  mellomnavn?: string;
  kjonn: "MANN" | "KVINNE" | "UKJENT";
  fodselsdato: string;
  alder: number;
  statsborgerskap: string;
}

export type IOppgaveTilstand = "KLAR_TIL_BEHANDLING";
export type IStegTilstand = "OPPFYLT" | "IKKE_OPPFYLT" | "MANUELL_BEHANDLING";
export type IDataType = "INT" | "DOUBLE" | "BOOLEAN" | "LOCALDATE" | "STRING";

export async function hentOppgaver(
  session: SessionWithOboProvider,
  urlParams?: string,
): Promise<IOppgave[]> {
  const onBehalfOfToken = await getBehandlingOboToken(session);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave${urlParams || ""}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return await response.json();
}

export async function hentOppgave(
  oppgaveId: string,
  session: SessionWithOboProvider,
): Promise<IOppgave> {
  const onBehalfOfToken = await getBehandlingOboToken(session);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return await response.json();
}

export async function lukkOppgave(
  oppgaveId: string,
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const onBehalfOfToken = await getBehandlingOboToken(session);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/lukk`;
  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return { status: "success" };
}

export async function avslagOppgave(
  oppgaveId: string,
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const onBehalfOfToken = await getBehandlingOboToken(session);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/avslag`;
  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return { status: "success" };
}

export async function svarOppgaveOpplysning(
  oppgaveId: string,
  opplysninger: IOpplysning[],
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}`;
  const onBehalfOfToken = await getBehandlingOboToken(session);
  const body = JSON.stringify(opplysninger);

  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: body,
  });

  if (!response.ok) {
    return {
      status: "error",
      error: { statusCode: response.status, statusText: response.statusText },
    };
  }

  return { status: "success" };
}
