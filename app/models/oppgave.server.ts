import type { ISaksbehandler } from "./saksbehandler.server";
import type { IPerson } from "./person.server";
import { mockOppgaver } from "../../mock-data/mock-oppgave";
import type { IHendelse } from "./hendelse.server";

export interface IOppgave {
  id: string;
  person: IPerson;
  saksbehandler?: ISaksbehandler;
  opprettet: string;
  hendelse: IHendelse;
}

export function mockHentOppgaver(): Promise<IOppgave[]> {
  const oppgaver: IOppgave[] = [];

  for (let i = 0; i < mockOppgaver.length; i++) {
    oppgaver.push(mockOppgaver[i]);
  }

  return Promise.resolve(oppgaver);
}
