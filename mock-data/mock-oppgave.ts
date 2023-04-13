import { mockSaksbehandler } from "./mock-saksbehandler";
import { personListeMock } from "./mock-person";
import type { IOppgave } from "~/models/oppgave.server";

const getDateMinusDays = (days: number) => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - days);
};

export const mockOppgaver: IOppgave[] = [
  {
    id: "string",
    person: personListeMock[0],
    opprettet: getDateMinusDays(1).toISOString(),
    hendelse: { type: "Ordinær", id: "1", dato: "01.01.2023" },
  },

  {
    id: "string",
    person: personListeMock[1],
    saksbehandler: mockSaksbehandler,
    opprettet: getDateMinusDays(3).toISOString(),
    hendelse: { type: "Klage", id: "1", dato: "01.01.2023" },
  },
  {
    id: "string",
    saksbehandler: mockSaksbehandler,
    person: personListeMock[2],
    opprettet: getDateMinusDays(4).toISOString(),
    hendelse: { type: "Ordinær", id: "1", dato: "01.01.2023" },
  },
  {
    id: "string",
    saksbehandler: mockSaksbehandler,
    person: personListeMock[3],
    opprettet: getDateMinusDays(5).toISOString(),
    hendelse: { type: "Klage", id: "1", dato: "01.01.2023" },
  },
  {
    id: "string",
    saksbehandler: mockSaksbehandler,
    person: personListeMock[4],
    opprettet: getDateMinusDays(6).toISOString(),
    hendelse: { type: "Endring", id: "1", dato: "01.01.2023" },
  },
];
