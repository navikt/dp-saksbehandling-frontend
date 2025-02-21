import type {
  IListeOppgave,
  ILovligeEndringer,
  IOppgave,
  IOppgaveBehandler,
  IPerson,
  ISikkerhetstiltak,
} from "~/models/oppgave.server";

import { mockHistorikk } from "./mock-historikk";

export const mockSikkerhetstiltak: ISikkerhetstiltak[] = [
  { beskrivelse: "To i samtale", gyldigTom: "2025-12-01" },
  { beskrivelse: "Ikke fysisk", gyldigTom: "2025-12-01" },
];

export const mockPerson: IPerson = {
  alder: 74,
  fodselsdato: "12.01.1954",
  kjonn: "MANN",
  statsborgerskap: "Norsk",
  fornavn: "Donald",
  mellomnavn: "Dægg",
  etternavn: "Duck",
  ident: "12345678910",
  sikkerhetstiltak: mockSikkerhetstiltak,
};

export const mockOppgaveSaksbehandler: IOppgaveBehandler = {
  fornavn: "Saksbehandler",
  etternavn: "Behandlersen",
  ident: "Z993298",
  enhet: {
    enhetNr: "2970",
    navn: "IT-avdelingen",
    postadresse: "",
  },
};

export const mockOppgaveBeslutter: IOppgaveBehandler = {
  fornavn: "Saksbehandler",
  etternavn: "Besluttersen",
  ident: "Z993298",
  enhet: {
    enhetNr: "2970",
    navn: "IT-avdelingen",
    postadresse: "",
  },
};

const mockLovligeEndringer: ILovligeEndringer = {
  paaVentAarsaker: [
    "AVVENT_DOKUMENTASJON",
    "AVVENT_SVAR",
    "AVVENT_SVAR_PÅ_FORESPØRSEL",
    "AVVENT_MELDEKORT",
    "AVVENT_RAPPORTERINGSFRIST",
    "ANNET",
  ],
};

export const underBehandlingAnnenSaksbehandlerOppgave: IOppgave = {
  oppgaveId: "518e3737-9df8-7ee4-91a6-317fada10987",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: { ...mockOppgaveSaksbehandler, ident: "ident456" },
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "FORTROLIG",
};

export const underBehandlingMinOppgaveKreverKontroll: IOppgave = {
  oppgaveId: "015e3737-9df8-7ee4-94a6-317fgsa10147",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_KONTROLL",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "STRENGT_FORTROLIG",
};

export const underBehandlingInnvilgelseMinOppgave: IOppgave = {
  oppgaveId: "018f05a0-667a-7597-a835-fab53189d051",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "UGRADERT",
};

export const ferdigBehandletOppgave: IOppgave = {
  oppgaveId: "018e3755-9df8-7aa4-94a6-317fada10999",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  lovligeEndringer: mockLovligeEndringer,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: [],
  tilstand: "FERDIG_BEHANDLET",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: true,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "UGRADERT",
};

export const mockOppgaver: IOppgave[] = [
  underBehandlingInnvilgelseMinOppgave,
  underBehandlingMinOppgaveKreverKontroll,
  underBehandlingAnnenSaksbehandlerOppgave,
  ferdigBehandletOppgave,
];

export const mockListeOppgaver: IListeOppgave[] = [
  konverterOppgaveTilListeOppgave(underBehandlingInnvilgelseMinOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingMinOppgaveKreverKontroll),
  konverterOppgaveTilListeOppgave(underBehandlingAnnenSaksbehandlerOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandletOppgave),
];

export function konverterOppgaveTilListeOppgave(oppgave: IOppgave): IListeOppgave {
  return {
    adressebeskyttelseGradering: oppgave.adressebeskyttelseGradering,
    behandlingId: oppgave.behandlingId,
    emneknagger: oppgave.emneknagger,
    oppgaveId: oppgave.oppgaveId,
    personIdent: oppgave.person.ident,
    behandlerIdent: oppgave.saksbehandler?.ident,
    skjermesSomEgneAnsatte: oppgave.skjermesSomEgneAnsatte,
    tidspunktOpprettet: oppgave.tidspunktOpprettet,
    tilstand: oppgave.tilstand,
  };
}
