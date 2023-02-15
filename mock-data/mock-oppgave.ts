import { IOppgave } from "~/models/oppgave.server";
import { mockSaksbehandler } from "./mock-saksbehandler";
import { mockBruker } from "./mock-bruker";

export const mockOppgave: IOppgave = {
  oppgaveType: "Søknad",
  saksbehandler: mockSaksbehandler,
  bruker: mockBruker,
};
