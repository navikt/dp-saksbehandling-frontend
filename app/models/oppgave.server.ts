import type { IHendelse } from "~/models/hendelse.server";
import { getEnv } from "~/utils/env.utils";

export interface IBehandlingStegSvar {
  type: BehandlingStegSvartype;
  svar?: string;
  begrunnelse?: IBehandlingStegSvarBegrunnelse;
}

export interface IBehandlingStegSvarBegrunnelse {
  tekst: string;
  kilde: string;
}

export interface IBehandlingSteg {
  uuid: string;
  id: BehandlingStegId;
  type: "Fastsetting" | "Vilkår";
  tilstand: "Utført" | "IkkeUtført" | "MåGodkjennes";
  journalposter: string[];
  svartype: BehandlingStegSvartype;
  svar: IBehandlingStegSvar | null;
}

export interface IOppgave {
  uuid: string;
  person: string;
  opprettet: string;
  tilstand: OppgaveTilstand;
  muligeTilstander: OppgaveTilstand[];
  hendelse: IHendelse;
  steg: IBehandlingSteg[];
}

type OppgaveTilstand = "TilBehandling" | "VentPåMangelbrev";

export interface INyTilstand {
  nyTilstand: string;
}

export type BehandlingStegSvartype = "Int" | "Boolean" | "LocalDate" | "String";

type BehandlingStegId =
  | "Fødselsdato"
  | "Alder"
  | "Vilkår67"
  | "Virkningstidspunkt"
  | "Verneplikt"
  | "KravTilMinsteinntekt"
  | "FastsattVanligArbeidstid"
  | "OppfyllerKravTilTaptArbeidstid";

export async function hentOppgaver(): Promise<IOppgave[]> {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return await response.json();
}

export async function hentOppgave(behandlingId: string): Promise<IOppgave> {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${behandlingId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return await response.json();
}

export async function endreStatus(behandlingId: string, body: INyTilstand) {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${behandlingId}/tilstand`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return response;
}

export async function svarOppgaveSteg(
  oppgaveId: string,
  svar: IBehandlingStegSvar,
  stegId: string
) {
  const url = `${getEnv("DP_BEHANDLING_URL")}/oppgave/${oppgaveId}/steg/${stegId}`;
  const body = JSON.stringify(svar);

  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
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
