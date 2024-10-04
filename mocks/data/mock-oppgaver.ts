import type {
  IListeOppgave,
  IOppgave,
  IOppgaveSaksbehandler,
  IPerson,
} from "~/models/oppgave.server";

export const mockPerson: IPerson = {
  alder: 74,
  fodselsdato: "12.01.1954",
  kjonn: "MANN",
  statsborgerskap: "Norsk",
  fornavn: "Donald",
  mellomnavn: "Dægg",
  etternavn: "Duck",
  ident: "12345678910",
};

export const mockOppgaveSaksbehandler: IOppgaveSaksbehandler = {
  fornavn: "F_Z993298",
  etternavn: "E_Z993298",
  ident: "Z993298",
  enhet: {
    enhetNr: "2970",
    navn: "IT-avdelingen",
    postadresse: "",
  },
};

export const klarTilBehandlingOppgave: IOppgave = {
  oppgaveId: "018e8237-9df8-7ee4-94a6-317fada10789",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  person: mockPerson,
  tidspunktOpprettet: "2024-01-01",
  tilstand: "KLAR_TIL_BEHANDLING",
  emneknagger: ["Konkurs Statoil"],
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  adressebeskyttelseGradering: "UGRADERT",
};

export const underBehandlingAnnenSaksbehandlerOppgave: IOppgave = {
  oppgaveId: "518e3737-9df8-7ee4-91a6-317fada10987",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  person: mockPerson,
  saksbehandler: { ...mockOppgaveSaksbehandler, ident: "ident456" },
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: [
    "HattLukkedeSakerSiste8Uker",
    "InntektNesteKalendermåned",
    "JobbetUtenforNorge",
    "Søknadsbehandling",
  ],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  adressebeskyttelseGradering: "FORTROLIG",
};
export const underBehandlingMinOppgave: IOppgave = {
  oppgaveId: "015e3737-9df8-7ee4-94a6-317fgsa10456",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  person: mockPerson,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling", "EØS"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  adressebeskyttelseGradering: "STRENGT_FORTROLIG",
};
export const ferdigBehandletOppgave: IOppgave = {
  oppgaveId: "018e3755-9df8-7aa4-94a6-317fada10999",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  person: mockPerson,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling", "EØS"],
  tilstand: "FERDIG_BEHANDLET",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: true,
  adressebeskyttelseGradering: "UGRADERT",
};

export const paaVentOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7bb4-94a6-317fada10741",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  person: mockPerson,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  utsattTilDato: "2024-05-18",
  emneknagger: ["Søknadsbehandling", "EØS"],
  tilstand: "PAA_VENT",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  adressebeskyttelseGradering: "STRENGT_FORTROLIG_UTLAND",
};

export const mockOppgaver: IOppgave[] = [
  klarTilBehandlingOppgave,
  underBehandlingMinOppgave,
  underBehandlingAnnenSaksbehandlerOppgave,
  ferdigBehandletOppgave,
  paaVentOppgave,
];

export const mockListeOppgaver: IListeOppgave[] = [
  konverterOppgaveTilListeOppgave(klarTilBehandlingOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingMinOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingAnnenSaksbehandlerOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandletOppgave),
  konverterOppgaveTilListeOppgave(paaVentOppgave),
];

export function konverterOppgaveTilListeOppgave(oppgave: IOppgave): IListeOppgave {
  return {
    adressebeskyttelseGradering: oppgave.adressebeskyttelseGradering,
    behandlingId: oppgave.behandlingId,
    emneknagger: oppgave.emneknagger,
    oppgaveId: oppgave.oppgaveId,
    personIdent: oppgave.person.ident,
    saksbehandlerIdent: oppgave.saksbehandler?.ident,
    skjermesSomEgneAnsatte: oppgave.skjermesSomEgneAnsatte,
    tidspunktOpprettet: oppgave.tidspunktOpprettet,
    tilstand: oppgave.tilstand,
  };
}
