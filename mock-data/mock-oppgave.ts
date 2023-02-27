import type { IOppgave } from "~/models/oppgave.server";
import { mockSaksbehandler } from "./mock-saksbehandler";
import { mockBruker } from "./mock-bruker";

export const mockOppgaver: IOppgave[] = [
  {
    saksbehandler: mockSaksbehandler,
    bruker: mockBruker,
    datoOpprettet: new Date().toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: null,
    bruker: mockBruker,
    datoOpprettet: new Date().toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: null,
    bruker: mockBruker,
    datoOpprettet: new Date().toISOString(),
    hendelse: "Klage",
  },
  {
    saksbehandler: mockSaksbehandler,
    bruker: mockBruker,
    datoOpprettet: new Date().toISOString(),
    hendelse: "Ordinær",
  },
  {
    saksbehandler: mockSaksbehandler,
    bruker: mockBruker,
    datoOpprettet: new Date().toISOString(),
    hendelse: "Klage",
  },
  {
    saksbehandler: mockSaksbehandler,
    bruker: mockBruker,
    datoOpprettet: new Date().toISOString(),
    hendelse: "Endring",
  },
];
