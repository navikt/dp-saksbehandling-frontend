import type { SessionWithOboProvider } from "@navikt/oasis";
import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";

export interface IOppgave {
  oppgaveId: string;
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
export type IDataType = "INT" | "DOUBLE" | "BOOLEAN" | "LOCALDATE" | "STRING";

export async function hentOppgaver(
  session: SessionWithOboProvider,
  urlParams?: string,
): Promise<IOppgave[]> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(session);
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
  const onBehalfOfToken = await getSaksbehandlingOboToken(session);

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
