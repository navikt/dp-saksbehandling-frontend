import type { IHendelse } from "~/models/hendelse.server";
import { getEnv } from "~/root";

interface IBehandlingStegSvar {
  begrunnelse: {
    tekst: string;
    kilde: string;
  };
  svar: string | boolean | number;
  type: string;
}

interface IBehandlingSteg {
  uuid: string;
  id: BehandlingStegId;
  type: "Fastsetting" | "Vilkår";
  tilstand: "Utført" | "IkkeUtført";
  svartype: BehandlingStegSvarType;
  svar: IBehandlingStegSvar | null;
}

export interface IBehandling {
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
