import type { SessionWithOboProvider } from "@navikt/dp-auth";
import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import type { INetworkResponse } from "~/utils/types";

export interface IOpplysningSvar {
  verdi: string;
}
export interface IOpplysning {
  opplysningNavn: string;
  opplysningType: IOpplysningType;
  svar: IOpplysningSvar | null;
}

export interface IOppgaveSteg {
  uuid: string;
  stegNavn: string;
  tilstand: IOppgaveStegTilstand;
  opplysninger: IOpplysning[];
}

export interface IOppgave {
  uuid: string;
  personIdent: string;
  datoOpprettet: string;
  tilstand: IOppgaveTilstand;
  journalpostIder: string[];
  emneknagger: string[];
  steg: IOppgaveSteg[];
  opplysninger: IOpplysning[];
}

export type IOppgaveTilstand = "TilBehandling" | "FerdigBehandlet";
export type IOppgaveStegTilstand = "Groenn" | "Gul" | "Roed";
export type IOpplysningType = "Int" | "Double" | "Boolean" | "LocalDate" | "String";

export async function hentOppgaver(session: SessionWithOboProvider): Promise<IOppgave[]> {
  const onBehalfOfToken = await getBehandlingOboToken(session);
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave`;
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

  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${oppgaveId}`;
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

export async function svarOppgaveSteg(
  oppgaveId: string,
  stegId: string,
  opplysninger: IOpplysning[],
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${oppgaveId}/steg/${stegId}`;
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
