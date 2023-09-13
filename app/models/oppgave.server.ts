import type { IHendelse } from "~/models/hendelse.server";
import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import type { SessionWithOboProvider } from "@navikt/dp-auth";

export interface IBehandlingStegSvar {
  type: TBehandlingStegSvartype;
  svar?: string;
  begrunnelse?: IBehandlingStegSvarBegrunnelse;
}

export interface IBehandlingStegSvarBegrunnelse {
  tekst: string;
  utført?: string; //dato
  utførtAv?: {
    ident: string;
  };
  kilde?: string;
}

export interface IBehandlingSteg {
  uuid: string;
  id: TBehandlingStegId;
  type: "Fastsetting" | "Vilkår";
  tilstand: "Utført" | "IkkeUtført" | "MåGodkjennes";
  svartype: TBehandlingStegSvartype;
  svar: IBehandlingStegSvar | null;
}

export interface IOppgave {
  uuid: string;
  person: string;
  opprettet: string;
  tilstand: TOppgaveTilstand;
  journalposter: string[];
  muligeTilstander: TOppgaveTilstand[];
  hendelse: IHendelse[];
  steg: IBehandlingSteg[];
}

export type TOppgaveTilstand = "TilBehandling" | "VentPåMangelbrev" | "Vedtak" | "Innstilt";

export type TBehandlingStegSvartype = "Int" | "Double" | "Boolean" | "LocalDate" | "String";

type TBehandlingStegId =
  | "Virkningsdato"
  | "Rettighetstype"
  | "Fastsatt vanlig arbeidstid"
  | "Grunnlag"
  | "Dagsats"
  | "Periode"
  | "Oppfyller kravene til dagpenger";

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

export async function svarOppgaveSteg(
  oppgaveId: string,
  svar: IBehandlingStegSvar,
  stegId: string,
  session: SessionWithOboProvider,
) {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${oppgaveId}/steg/${stegId}`;
  const onBehalfOfToken = await getBehandlingOboToken(session);
  const body = JSON.stringify(svar);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
    body: body,
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response;
}

export async function endreStatus(
  oppgaveId: string,
  nyTilstand: TOppgaveTilstand,
  session: SessionWithOboProvider,
) {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${oppgaveId}/tilstand`;
  const onBehalfOfToken = await getBehandlingOboToken(session);

  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${onBehalfOfToken}` },
    body: JSON.stringify({ nyTilstand }),
  });
}
