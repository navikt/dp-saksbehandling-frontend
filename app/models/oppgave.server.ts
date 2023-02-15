import { ISaksbehandler } from "~/models/saksbehandler.server";
import { IBruker } from "~/models/bruker.server";
import { mockOppgave } from "../../mock-data/mock-oppgave";

export interface IOppgave {
  saksbehandler: ISaksbehandler;
  oppgaveType: string;
  bruker: IBruker;
}

export function mockHentOppgaver(): Promise<IOppgave[]> {
  const oppgaver: IOppgave[] = [];

  for (let i = 1; i <= 10; i++) {
    oppgaver.push(mockOppgave);
  }

  return Promise.resolve(oppgaver);
}
