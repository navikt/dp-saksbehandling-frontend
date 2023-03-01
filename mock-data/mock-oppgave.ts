import type { IOppgave } from "~/models/oppgave.server";
import { mockSaksbehandler } from "./mock-saksbehandler";
import { mockPerson } from "./mock-person";

const getDateMinusDays = (days: number) => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - days);
};

export const mockOppgaver: IOppgave[] = [
  {
    saksbehandler: mockSaksbehandler,
    person: mockPerson,
    datoOpprettet: getDateMinusDays(1).toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: null,
    person: mockPerson,
    datoOpprettet: getDateMinusDays(2).toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: null,
    person: mockPerson,
    datoOpprettet: getDateMinusDays(3).toISOString(),
    hendelse: "Klage",
  },
  {
    saksbehandler: mockSaksbehandler,
    person: mockPerson,
    datoOpprettet: getDateMinusDays(4).toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: mockSaksbehandler,
    person: mockPerson,
    datoOpprettet: getDateMinusDays(5).toISOString(),
    hendelse: "Klage",
  },
  {
    saksbehandler: mockSaksbehandler,
    person: mockPerson,
    datoOpprettet: getDateMinusDays(6).toISOString(),
    hendelse: "Endring",
  },
];
