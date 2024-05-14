import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import type { INetworkResponse } from "~/utils/types";
import { handleErrorResponse } from "~/utils/error-response.server";

export interface IOppgave {
  oppgaveId: string;
  behandlingId: string;
  personIdent: string;
  saksbehandlerIdent?: string;
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

export type IOppgaveTilstand =
  | IOppgaveTilstandKlarTilBehandling
  | IOppgaveTilstandPaaVent
  | IOppgaveTilstandUnderBehandling
  | IOppgaveTilstandFerdigBehandlet;

interface IOppgaveTilstandKlarTilBehandling {
  type: "KLAR_TIL_BEHANDLING";
}

interface IOppgaveTilstandUnderBehandling {
  type: "UNDER_BEHANDLING";
}

interface IOppgaveTilstandPaaVent {
  type: "PAA_VENT";
  utsattTil: string;
}

interface IOppgaveTilstandFerdigBehandlet {
  type: "FERDIG_BEHANDLET";
}

export type IOppgaveTilstandType =
  | "PAA_VENT"
  | "KLAR_TIL_BEHANDLING"
  | "UNDER_BEHANDLING"
  | "FERDIG_BEHANDLET";

export async function hentOppgaver(request: Request, urlParams?: string): Promise<IOppgave[]> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

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
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function hentOppgave(request: Request, oppgaveId: string): Promise<IOppgave> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function hentNesteOppgave(request: Request): Promise<IOppgave> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const requestUrl = new URL(request.url);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/neste`;
  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ queryParams: requestUrl.search }),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function tildelOppgave(request: Request, oppgaveId: string): Promise<IOppgave> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/tildel`;
  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function leggTilbakeOppgave(
  request: Request,
  oppgaveId: string,
): Promise<INetworkResponse> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/legg-tilbake`;
  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return { status: "success" };
}

export async function utsettOppgave(
  request: Request,
  oppgaveId: string,
  utsettTilDato: string,
): Promise<INetworkResponse> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/utsett`;
  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ utsettTil: utsettTilDato }),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return { status: "success" };
}
