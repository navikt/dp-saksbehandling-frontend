import type { IOppgave, IPerson } from "~/models/oppgave.server";

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

export const klarTilBehandlingOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7ee4-94a6-317fada10789",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  personIdent: "12837798289",
  person: mockPerson,
  tidspunktOpprettet: "2024-01-01",
  tilstand: { type: "KLAR_TIL_BEHANDLING" },
  emneknagger: ["Konkurs Statoil"],
  journalpostIder: ["123456789"],
};

export const underBehandlingAnnenSaksbehandlerOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7ee4-94a6-317fada10987",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  personIdent: "12837798289",
  person: mockPerson,
  saksbehandlerIdent: "ident456",
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling", "EØS"],
  tilstand: { type: "UNDER_BEHANDLING" },
  journalpostIder: ["123"],
};
export const underBehandlingMinOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7ee4-94a6-317fada10456",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  personIdent: "12837798289",
  person: mockPerson,
  saksbehandlerIdent: "ident123",
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling", "EØS"],
  tilstand: { type: "UNDER_BEHANDLING" },
  journalpostIder: ["123"],
};

export const paaVentMinOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7ee4-94a6-317fada10147",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  personIdent: "12837798289",
  person: mockPerson,
  saksbehandlerIdent: "ident123",
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling", "EØS"],
  tilstand: { type: "PAA_VENT", utsattTil: "2014-05-16" },
  journalpostIder: ["123"],
};
export const ferdigBehandletOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7ee4-94a6-317fada10999",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  personIdent: "12837798289",
  person: mockPerson,
  saksbehandlerIdent: "ident123",
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling", "EØS"],
  tilstand: { type: "FERDIG_BEHANDLET" },
  journalpostIder: ["123"],
};

export const mockOppgaver: IOppgave[] = [
  klarTilBehandlingOppgave,
  underBehandlingMinOppgave,
  underBehandlingAnnenSaksbehandlerOppgave,
  ferdigBehandletOppgave,
  paaVentMinOppgave,
];
