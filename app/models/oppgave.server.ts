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
}

export interface ISteg {
  beskrivendeId: string;
  tilstand: IStegTilstand;
  opplysninger: IOpplysning[];
}

interface IBehandlingOpplysning {
  id: string;
  opplysningstype: string;
  verdi: string;
  status: "Hypotese" | "Faktum";
  gyldigFraOgMed: string;
  gyldigTilOgMed: string;
  datatype: string;
  redigerbar: boolean;
  kilde: {
    id: string;
  };
  utledetAv: {
    opplysningstype: string;
    regel: {
      navn: string;
    };
    opplysninger: IBehandlingOpplysning[];
  };
}

interface IBehandling {
  behandlingId: string;
  opplysning: IBehandlingOpplysning[];
}

export interface IOppgave {
  oppgaveId: string;
  behandlingId: string;
  personIdent: string;
  tidspunktOpprettet: string;
  tilstand: IOppgaveTilstand;
  emneknagger: string[];
  journalpostIder: string[];
  steg: ISteg[];
  opplysninger: IOpplysning[];
  behandling?: IBehandling;
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
