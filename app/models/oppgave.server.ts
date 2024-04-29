import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import type { INetworkResponse } from "~/utils/types";
import { logger2 } from "~/utils/logger2.utils";

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
  | "OPPRETTET"
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
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
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
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return await response.json();
}

export async function hentNesteOppgave(request: Request): Promise<IOppgave> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/oppgave/neste`;
  const response = await fetch(url, {
    method: "PUT",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    logger2.warn(`pino logget: ${response.status} - ${response.statusText}`);
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
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
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
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
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return { status: "success" };
}
