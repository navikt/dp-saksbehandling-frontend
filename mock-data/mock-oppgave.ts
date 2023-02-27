import type { IOppgave } from "~/models/oppgave.server";
import { mockSaksbehandler } from "./mock-saksbehandler";
import { mockBruker } from "./mock-bruker";

const getDateMinusDays = (days: number) => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - days);
};
export const mockOppgaver: IOppgave[] = [
  {
    saksbehandler: mockSaksbehandler,
    bruker: mockBruker,
    datoOpprettet: getDateMinusDays(1).toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: null,
    bruker: mockBruker,
    datoOpprettet: getDateMinusDays(2).toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: null,
    bruker: mockBruker,
    datoOpprettet: getDateMinusDays(3).toISOString(),
    hendelse: "Klage",
  },
  {
    saksbehandler: mockSaksbehandler,
    bruker: mockBruker,
    datoOpprettet: getDateMinusDays(4).toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: mockSaksbehandler,
    bruker: mockBruker,
    datoOpprettet: getDateMinusDays(5).toISOString(),
    hendelse: "Klage",
  },
  {
    saksbehandler: mockSaksbehandler,
    bruker: mockBruker,
    datoOpprettet: getDateMinusDays(6).toISOString(),
    hendelse: "Endring",
  },
];
