import createClient from "openapi-fetch";

import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse, handleHttpProblem } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";
import { parseSearchParamsToOpenApiQuery } from "~/utils/type-guards";

import { components, paths } from "../../openapi/saksbehandling-typer";

export interface IPerson {
  ident: string;
  fornavn: string;
  etternavn: string;
  mellomnavn?: string;
  kjonn: "MANN" | "KVINNE" | "UKJENT";
  fodselsdato: string;
  alder: number;
  statsborgerskap: string;
  sikkerhetstiltak?: ISikkerhetstiltak[];
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
  historikk: IOppgaveHistorikk[];
  notat?: IOppgaveNotat;
  utsattTilDato?: string;
  skjermesSomEgneAnsatte: boolean;
  adressebeskyttelseGradering: IOppgaveAdressebeskyttelseGradering;
  emneknagger: string[];
  lovligeEndringer: ILovligeEndringer;
}

export interface ISikkerhetstiltak {
  beskrivelse: string;
  gyldigTom: string;
}

export interface ILovligeEndringer {
  paaVentAarsaker: string[];
}

export interface IOppgaveNotat {
  tekst: string;
  sistEndretTidspunkt?: string;
}

export interface IOppgaveHistorikk {
  type: "statusendring" | "notat" | "endre-opplysning" | "melding";
  tittel: string;
  body?: string;
  tidspunkt: string;
  behandler: IBehandler;
}

export interface IOppgaveListeResponse {
  oppgaver: IListeOppgave[];
  totaltAntallOppgaver: number;
}

interface IBehandler {
  navn: string;
  rolle?: "system" | "saksbehandler" | "beslutter";
}

export interface ILagreNotatResponse {
  sistEndretTidspunkt: string;
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
  | "FERDIG_BEHANDLET"
  | "BEHANDLES_I_ARENA";

const saksbehandlerClient = createClient<paths>({ baseUrl: getEnv("DP_SAKSBEHANDLING_URL") });

export async function hentOppgaver(
  request: Request,
  urlSearchParams: URLSearchParams,
): Promise<paths["/oppgave"]["get"]["responses"]["200"]["content"]["application/json"]> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const queryParams =
    parseSearchParamsToOpenApiQuery<paths["/oppgave"]["get"]["parameters"]["query"]>(
      urlSearchParams,
    );

  const { response, data } = await saksbehandlerClient.GET("/oppgave", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      query: queryParams,
    },
  });

  if (data) {
    return data;
  }

  if (!response.ok) {
    handleErrorResponse(response);
  }

  throw new Error("Uhåndtert feil i hentOppgaver()");
}

export async function hentOppgave(
  request: Request,
  oppgaveId: string,
): Promise<components["schemas"]["Oppgave"]> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const { response, data, error } = await saksbehandlerClient.GET("/oppgave/{oppgaveId}", {
    headers: getHeaders(onBehalfOfToken),
    params: {
      path: { oppgaveId },
    },
  });

  if (data) {
    return data;
  }

  if (error) {
    handleHttpProblem(error);
  }

  if (!response.ok || error) {
    handleErrorResponse(response);
  }

  throw new Error("Uhåndtert feil i hentOppgave()");
}

export async function hentNesteOppgave(request: Request, aktivtOppgaveSok: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  return await saksbehandlerClient.PUT("/oppgave/neste", {
    headers: getHeaders(onBehalfOfToken),
    body: { queryParams: JSON.stringify(aktivtOppgaveSok) },
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
  paaVentAarsak: string,
): Promise<Response> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/utsett`;
  return await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ utsettTilDato, beholdOppgave, aarsak: paaVentAarsak }),
  });
}

export async function ferdigstillOppgave(request: Request, oppgaveId: string) {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/ferdigstill/melding-om-vedtak`;

  return await fetch(url, {
    method: "PUT",
    headers: { ...getHeaders(onBehalfOfToken) },
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

export async function lagreNotat(
  request: Request,
  oppgaveId: string,
  notat: string,
): Promise<ILagreNotatResponse> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/${oppgaveId}/notat`;
  const trimmetNotat = notat.trim();

  const response = await fetch(url, {
    method: trimmetNotat ? "PUT" : "DELETE",
    headers: { ...getHeaders(onBehalfOfToken), "Content-Type": "text/plain" },
    body: trimmetNotat,
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}
