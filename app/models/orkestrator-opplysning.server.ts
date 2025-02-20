import { IOpplysning, IRegelsett } from "~/models/behandling.server";
import { getSoknadOrkestratorOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

export interface IPerson {
  ident: string;
  fornavn: string;
  etternavn: string;
  mellomnavn?: string;
  kjonn: "MANN" | "KVINNE" | "UKJENT";
  fodselsdato: string;
  alder: number;
  statsborgerskap: string;
  sikkerhetstiltak?: ISikkerhetstiltak[];
}

export interface IOppgaveBehandler {
  ident: string;
  fornavn: string;
  etternavn: string;
  enhet: {
    navn: string;
    enhetNr: string;
    postadresse: string;
  };
}

export interface IListeOppgave {
  adressebeskyttelseGradering: IOppgaveAdressebeskyttelseGradering;
  behandlingId: string;
  emneknagger: string[];
  oppgaveId: string;
  personIdent: string;
  behandlerIdent?: string;
  skjermesSomEgneAnsatte: boolean;
  tidspunktOpprettet: string;
  tilstand: IOppgaveTilstand;
  utsattTilDato?: string;
}

export interface IOppgave {
  oppgaveId: string;
  behandlingId: string;
  saksbehandler?: IOppgaveBehandler;
  beslutter?: IOppgaveBehandler;
  person: IPerson;
  tidspunktOpprettet: string;
  journalpostIder: string[];
  tilstand: IOppgaveTilstand;
  historikk: IOppgaveHistorikk[];
  notat?: IOppgaveNotat;
  utsattTilDato?: string;
  skjermesSomEgneAnsatte: boolean;
  adressebeskyttelseGradering: IOppgaveAdressebeskyttelseGradering;
  emneknagger: string[];
  lovligeEndringer: ILovligeEndringer;
}

export interface ISikkerhetstiltak {
  beskrivelse: string;
  gyldigTom: string;
}

export interface ILovligeEndringer {
  paaVentAarsaker: string[];
}

export interface IOppgaveNotat {
  tekst: string;
  sistEndretTidspunkt?: string;
}

export interface IOppgaveHistorikk {
  type: "statusendring" | "notat" | "endre-opplysning" | "melding";
  tittel: string;
  body?: string;
  tidspunkt: string;
  behandler: IBehandler;
}

export interface IOppgaveListeResponse {
  oppgaver: IListeOppgave[];
  totaltAntallOppgaver: number;
}

interface IBehandler {
  navn: string;
  rolle?: "system" | "saksbehandler" | "beslutter";
}

export interface ILagreNotatResponse {
  sistEndretTidspunkt: string;
}

export type IOppgaveAdressebeskyttelseGradering =
  | "UGRADERT"
  | "FORTROLIG"
  | "STRENGT_FORTROLIG"
  | "STRENGT_FORTROLIG_UTLAND";

export type IOppgaveTilstand =
  | "PAA_VENT"
  | "KLAR_TIL_BEHANDLING"
  | "UNDER_BEHANDLING"
  | "KLAR_TIL_KONTROLL"
  | "UNDER_KONTROLL"
  | "FERDIG_BEHANDLET"
  | "BEHANDLES_I_ARENA";

export interface IOrkestratorOpplysning {
  regelsett: IRegelsett;
  opplysninger: IOpplysning[][];
}

export async function hentOrkestratorOpplysning(request: Request): Promise<IOrkestratorOpplysning> {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);
  const url = `${getEnv("DP_SOKNAD_ORKESTRATOR_URL")}/`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}
