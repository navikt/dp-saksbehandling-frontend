import type { IHendelse } from "~/models/hendelse.server";
import { getEnv } from "~/root";

export interface IBehandlingStegSvar {
  type: string;
  svar?: IBehandlingStegSvartype;
  begrunnelse: {
    tekst: string;
    kilde: string;
  };
}

export type IBehandlingStegSvartype = string | boolean | number | Date;

export interface IBehandlingSteg {
  uuid: string;
  id: BehandlingStegId;
  type: "Fastsetting" | "Vilkår";
  tilstand: "Utført" | "IkkeUtført" | "MåGodkjennes";
  svartype: BehandlingStegSvarType;
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
  innvilget: true;
}

type BehandlingStegSvarType = "Int" | "Boolean" | "LocalDate" | "String";

type BehandlingStegId =
  | "Fødselsdato"
  | "Alder"
  | "Vilkår67"
  | "Virkningstidspunkt"
  | "Verneplikt"
  | "KravTilMinsteinntekt"
  | "FastsattVanligArbeidstid"
  | "OppfyllerKravTilTaptArbeidstid";

export async function hentBehandlinger(): Promise<IBehandling[] | undefined> {
  const url = `${getEnv("DP_BEHANDLING_URL")}/behandlinger`;
  const response = await fetch(url);

  if (response.ok) {
    return await response.json();
  }
  return undefined;
}

export async function hentBehandling(behandlingId: string): Promise<IBehandling | undefined> {
  const response = await fetch(`${getEnv("DP_BEHANDLING_URL")}/behandlinger/${behandlingId}`);

  if (response.ok) {
    return await response.json();
  }
}

export async function svarFerdigstill(behandlingId: string, innvilget: boolean) {
  const url = `${getEnv("DP_BEHANDLING_URL")}/behandlinger/${behandlingId}/ferdigstill`;
  const body = JSON.stringify(innvilget);

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
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

  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  if (response.ok) {
    return response;
  }

  return undefined;
}
