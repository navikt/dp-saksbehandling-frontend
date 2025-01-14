import type { IListeOppgave, IOppgave, IOppgaveBehandler, IPerson } from "~/models/oppgave.server";

import { mockHistorikk } from "./mock-hisotrikk";

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

export const klarTilBehandlingOppgave: IOppgave = {
  oppgaveId: "018e8237-9df8-7ee4-94a6-317fada10789",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,

  tidspunktOpprettet: "2024-01-01",
  tilstand: "KLAR_TIL_BEHANDLING",
  emneknagger: ["Innvilgelse"],
  journalpostIder: ["598116232", "639664665"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "UGRADERT",
};

export const underBehandlingAnnenSaksbehandlerOppgave: IOppgave = {
  oppgaveId: "518e3737-9df8-7ee4-91a6-317fada10987",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,

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

  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "STRENGT_FORTROLIG",
};

export const underBehandlingAvslagMinsteinntektMinOppgave: IOppgave = {
  oppgaveId: "0192c2aa-9fd5-776d-8c8f-819853b43c7e",
  behandlingId: "0192c2aa-9fd5-776d-8c8f-819853b43c7e",
  person: mockPerson,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Avslag minsteinntekt"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "UGRADERT",
};

export const underBehandlingInnvilgelseMinOppgave: IOppgave = {
  oppgaveId: "018f05a0-667a-7597-a835-fab53189d051",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,
  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_BEHANDLING",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "UGRADERT",
};

export const klarTilKontrollMinOppgave: IOppgave = {
  oppgaveId: "015e3737-9df8-7ee4-94a6-317fgsa1753",
  behandlingId: "018f05a0-667a-7597-a835-fab53189d051",
  person: mockPerson,

  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Totrinnskontroll"],
  tilstand: "KLAR_TIL_KONTROLL",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "STRENGT_FORTROLIG",
};

export const underKontrollMinOppgave: IOppgave = {
  oppgaveId: "015e3737-9df8-7ee4-94a6-317fgsa104951",
  behandlingId: "018f05a0-667a-7597-a835-fab53189d051",
  person: mockPerson,

  saksbehandler: mockOppgaveSaksbehandler,
  beslutter: mockOppgaveBeslutter,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Innvilgelse"],
  tilstand: "UNDER_KONTROLL",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "STRENGT_FORTROLIG",
};

export const ferdigBehandletOppgave: IOppgave = {
  oppgaveId: "018e3755-9df8-7aa4-94a6-317fada10999",
  behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
  person: mockPerson,

  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: [],
  tilstand: "FERDIG_BEHANDLET",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: true,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "UGRADERT",
};

export const paaVentOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7bb4-94a6-317fada10741",
  behandlingId: "018f05a0-667a-7597-a835-fab53189d051",
  person: mockPerson,

  saksbehandler: mockOppgaveSaksbehandler,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  utsattTilDato: "2024-05-18",
  emneknagger: [],
  tilstand: "PAA_VENT",
  journalpostIder: ["598116231", "639664664"],
  skjermesSomEgneAnsatte: false,
  historikk: mockHistorikk,
  adressebeskyttelseGradering: "STRENGT_FORTROLIG_UTLAND",
};

export const mockOppgaver: IOppgave[] = [
  klarTilBehandlingOppgave,
  underBehandlingInnvilgelseMinOppgave,
  underBehandlingAvslagMinsteinntektMinOppgave,
  underBehandlingMinOppgaveKreverKontroll,
  underBehandlingAnnenSaksbehandlerOppgave,
  klarTilKontrollMinOppgave,
  underKontrollMinOppgave,
  ferdigBehandletOppgave,
  paaVentOppgave,
];

export const mockListeOppgaver: IListeOppgave[] = [
  konverterOppgaveTilListeOppgave(klarTilBehandlingOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingInnvilgelseMinOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingAvslagMinsteinntektMinOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingMinOppgaveKreverKontroll),
  konverterOppgaveTilListeOppgave(underBehandlingAnnenSaksbehandlerOppgave),
  konverterOppgaveTilListeOppgave(klarTilKontrollMinOppgave),
  konverterOppgaveTilListeOppgave(underKontrollMinOppgave),
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
    behandlerIdent: oppgave.saksbehandler?.ident,
    skjermesSomEgneAnsatte: oppgave.skjermesSomEgneAnsatte,
    tidspunktOpprettet: oppgave.tidspunktOpprettet,
    tilstand: oppgave.tilstand,
  };
}
