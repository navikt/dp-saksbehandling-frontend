import { mockSaksbehandler } from "./mock-saksbehandler";
import { mockPerson } from "./mock-person";
import type { IOppgave } from "~/models/oppgave.server";

const getDateMinusDays = (days: number) => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - days);
};

export const mockOppgaver: IOppgave[] = [
  {
    id: "string",
    saksbehandler: mockSaksbehandler,
    person: mockPerson,
    opprettet: getDateMinusDays(1).toISOString(),
    hendelse: { type: "Ordinær", id: "1", dato: "01.01.1992" },
  },
  {
    id: "string",
    person: mockPerson,
    opprettet: getDateMinusDays(2).toISOString(),
    hendelse: { type: "Ordinær", id: "1", dato: "01.01.1992" },
  },
  {
    id: "string",
    person: mockPerson,
    opprettet: getDateMinusDays(3).toISOString(),
    hendelse: { type: "Klage", id: "1", dato: "01.01.1992" },
  },
  {
    id: "string",
    saksbehandler: mockSaksbehandler,
    person: mockPerson,
    opprettet: getDateMinusDays(4).toISOString(),
    hendelse: { type: "Ordinær", id: "1", dato: "01.01.1992" },
  },
  {
    id: "string",
    saksbehandler: mockSaksbehandler,
    person: mockPerson,
    opprettet: getDateMinusDays(5).toISOString(),
    hendelse: { type: "Klage", id: "1", dato: "01.01.1992" },
  },
  {
    id: "string",
    saksbehandler: mockSaksbehandler,
    person: mockPerson,
    opprettet: getDateMinusDays(6).toISOString(),
    hendelse: { type: "Endring", id: "1", dato: "01.01.1992" },
  },
];
