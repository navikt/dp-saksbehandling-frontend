import type { IHendelse } from "~/models/hendelse.server";
import { getEnv } from "~/utils/env.utils";
import { z } from "zod";

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
  svartype: BehandlingStegSvartype;
  svar: IBehandlingStegSvar | null;
}

export interface IBehandling {
  uuid: string;
  person: string;
  saksbehandler: string;
  opprettet: string;
  hendelse: IHendelse;
  steg: IBehandlingSteg[];
}

export interface IFerdigstill {
  innvilget: string;
  begrunnelse: string;
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

export async function hentBehandlinger(): Promise<IBehandling[]> {
  const url = `${getEnv("DP_BEHANDLING_URL")}/behandlinger`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }

  return await response.json();
}

export async function hentBehandling(behandlingId: string): Promise<IBehandling> {
  const response = await fetch(`${getEnv("DP_BEHANDLING_URL")}/behandlinger/${behandlingId}`);

  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }

  return await response.json();
}

export async function svarFerdigstill(behandlingId: string, body: IFerdigstill) {
  const url = `${getEnv("DP_BEHANDLING_URL")}/behandlinger/${behandlingId}/ferdigstill`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return response;
}

export async function svarBehandlingSteg(
  behandlingId: string,
  svar: IBehandlingStegSvar,
  stegId: string
) {
  const url = `${getEnv("DP_BEHANDLING_URL")}/behandlinger/${behandlingId}/steg/${stegId}`;
  const body = JSON.stringify(svar);

  return await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
}
