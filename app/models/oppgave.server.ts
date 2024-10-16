import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import { handleErrorResponse } from "~/utils/error-response.server";

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

export interface IOppgaveBehandler {
  ident: string;
  fornavn: string;
  etternavn: string;
  enhet: {
    navn: string;
    enhetNr: string;
    postadresse: string;
  };
}

export interface IListeOppgave {
  adressebeskyttelseGradering: IOppgaveAdressebeskyttelseGradering;
  behandlingId: string;
  emneknagger: string[];
  oppgaveId: string;
  personIdent: string;
  behandlerIdent?: string;
  skjermesSomEgneAnsatte: boolean;
  tidspunktOpprettet: string;
  tilstand: IOppgaveTilstand;
  utsattTilDato?: string;
}

export interface IOppgave {
  oppgaveId: string;
  behandlingId: string;
  saksbehandler?: IOppgaveBehandler;
  beslutter?: IOppgaveBehandler;
  person: IPerson;
  tidspunktOpprettet: string;
  journalpostIder: string[];
  tilstand: IOppgaveTilstand;
  utsattTilDato?: string;
  skjermesSomEgneAnsatte: boolean;
  adressebeskyttelseGradering: IOppgaveAdressebeskyttelseGradering;
  emneknagger: string[];
}

export type IOppgaveAdressebeskyttelseGradering =
  | "UGRADERT"
  | "FORTROLIG"
  | "STRENGT_FORTROLIG"
  | "STRENGT_FORTROLIG_UTLAND";

export type IOppgaveTilstand =
  | "PAA_VENT"
  | "KLAR_TIL_BEHANDLING"
  | "UNDER_BEHANDLING"
  | "KLAR_TIL_KONTROLL"
  | "UNDER_KONTROLL"
  | "FERDIG_BEHANDLET";

export async function hentOppgaver(request: Request, urlParams?: string): Promise<IListeOppgave[]> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave${urlParams || ""}`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
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

export async function hentNesteOppgave(request: Request): Promise<Response> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const requestUrl = new URL(request.url);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/neste`;
  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ queryParams: requestUrl.search }),
  });
}

export async function tildelOppgave(request: Request, oppgaveId: string): Promise<Response> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/tildel`;
  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });
}

export async function leggTilbakeOppgave(request: Request, oppgaveId: string): Promise<Response> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/legg-tilbake`;
  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });
}

export async function utsettOppgave(
  request: Request,
  oppgaveId: string,
  utsettTilDato: string,
  beholdOppgave: boolean,
): Promise<Response> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/utsett`;
  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ utsettTilDato, beholdOppgave }),
  });
}

export async function ferdigstillOppgave(request: Request, oppgaveId: string, brevHtml: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/ferdigstill/melding-om-vedtak`;

  return await fetch(url, {
    method: "PUT",
    headers: { ...getHeaders(onBehalfOfToken), "Content-Type": "text/html" },
    body: brevHtml,
  });
}

export async function ferdigstillOppgaveMedArenaBrev(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/ferdigstill/melding-om-vedtak-arena`;

  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });
}

export async function sendOppgaveTilKontroll(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/send-til-kontroll`;

  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });
}

export async function sendBrev(
  request: Request,
  oppgaveId: string,
  brevHtml: string,
): Promise<Response> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/utsending/${oppgaveId}/send-brev`;
  return await fetch(url, {
    method: "POST",
    headers: { ...getHeaders(onBehalfOfToken), "Content-Type": "text/html" },
    body: brevHtml,
  });
}

export async function returnerOppgaveTilSaksbehandler(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/returner-til-saksbehandler`;

  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });
}
