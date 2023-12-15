import type { SessionWithOboProvider } from "@navikt/dp-auth";
import { getBehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import type { INetworkResponse } from "~/utils/types";

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
  tilstand: TBehandlingTilstand;
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

export interface IHendelse {
  kontekstmap: IKontekstmap;
  konteksttype: "SøknadInnsendtHendelse";
}
export interface IKontekstmap {
  meldingsreferanseId: string;
  referanseId: string;
  søknadId: string;
}

export type TOppgaveTilstand = "TilBehandling" | "FerdigBehandlet";
export type TBehandlingTilstand = "Utført" | "IkkeUtført" | "MåGodkjennes";
export type TBehandlingStegSvartype = "Int" | "Double" | "Boolean" | "LocalDate" | "String";
export type TBehandlingStegId =
  | "Virkningsdato"
  | "Rettighetstype"
  | "Fastsatt vanlig arbeidstid"
  | "Grunnlag"
  | "Dagsats"
  | "Periode"
  | "Forslag til vedtak"
  | "Fatt vedtak"
  | "Oppfyller kravene til dagpenger"
  | "Oppfyller krav til minsteinntekt";

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
  svar: IBehandlingStegSvar,
  stegId: string,
  session: SessionWithOboProvider,
): Promise<INetworkResponse> {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${oppgaveId}/steg/${stegId}`;
  const onBehalfOfToken = await getBehandlingOboToken(session);
  const body = JSON.stringify(svar);

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

export async function endreStatus(
  oppgaveId: string,
  nyTilstand: TOppgaveTilstand,
  session: SessionWithOboProvider,
) {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${oppgaveId}/tilstand`;
  const onBehalfOfToken = await getBehandlingOboToken(session);

  return await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ nyTilstand }),
  });
}
