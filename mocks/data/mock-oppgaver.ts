import type { IOppgave, IPerson } from "~/models/oppgave.server";

import { mockBehandling } from "./mock-behandling";

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

export const masterMenyMock: IOppgave = {
  oppgaveId: "msw-ny-mastermeny",
  behandlingId: "msw-behandling-id-1",
  personIdent: "msw-personmock-statoil",
  person: mockPerson,
  tidspunktOpprettet: "2024-01-01",
  tilstand: "KLAR_TIL_BEHANDLING",
  emneknagger: ["Konkurs Statoil"],
  journalpostIder: ["123456789"],
};

export const minsteinntektAvslagOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7ee4-94a6-317fada10999",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  personIdent: "12837798289",
  person: mockPerson,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling"],
  tilstand: "KLAR_TIL_BEHANDLING",
  journalpostIder: ["123"],
  behandling: mockBehandling,
};

export const mockOppgaver: IOppgave[] = [masterMenyMock, minsteinntektAvslagOppgave];
