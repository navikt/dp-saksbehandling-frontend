import type { IHendelse } from "~/models/hendelse.server";
import { getEnv } from "~/root";

export interface IBehandlingStegSvar {
  uuid: string;
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

type BehandlingStegSvarType = "Int" | "Boolean" | "Localdate";

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
  const response = await fetch(`${getEnv("DP_BEHANDLING_URL")}/oppgaver`);

  if (response.ok) {
    return await response.json();
  }
}

export async function hentBehandling(hendelseId: string): Promise<IBehandling | undefined> {
  const response = await fetch(`${getEnv("DP_BEHANDLING_URL")}/oppgaver/${hendelseId}`);

  if (response.ok) {
    return await response.json();
  }
}

export async function svarBehandlingSteg(behandlingId: string, svar: IBehandlingStegSvar) {
  const response = await fetch(
    `${getEnv("DP_BEHANDLING_URL")}/oppgaver/${behandlingId}/steg/${svar.uuid}`,
    { method: "POST", body: JSON.stringify(svar) }
  );

  console.log(response.status);

  if (response.ok) {
    return await response.json();
  }
  return undefined;
}
