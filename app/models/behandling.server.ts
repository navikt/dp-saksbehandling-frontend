import type { IHendelse } from "~/models/hendelse.server";
import { getEnv } from "~/root";

export interface IBehandlingStegSvar {
  type: string;
  svar: string | boolean | number;
  begrunnelse: {
    tekst: string;
    kilde: string;
  };
}

export interface IBehandlingSteg {
  uuid: string;
  id: BehandlingStegId;
  type: "Fastsetting" | "Vilkår";
  tilstand: "Utført" | "IkkeUtført";
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

type BehandlingStegSvarType = "Int" | "Boolean" | "Localdate" | "tekst";

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
  const response = await fetch(`${getEnv("DP_BEHANDLING_URL")}/behandlinger`);

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
    return await response.json();
  }
  return undefined;
}
