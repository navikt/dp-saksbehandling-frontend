import type { ISaksbehandler } from "~/models/saksbehandler.server";
import type { IPerson } from "~/models/person.server";
import type { IDagpengerPeriode } from "~/models/dagpenger-periode.server";
import { mockOppgaver } from "../../mock-data/mock-oppgave";

export interface IOppgave {
  id: string;
  person: IPerson;
  dagpengerPeriode: IDagpengerPeriode;
  saksbehandler?: ISaksbehandler;
  opprettet: string;
}

export function mockHentOppgaver(): Promise<IOppgave[]> {
  const oppgaver: IOppgave[] = [];

  for (let i = 0; i < mockOppgaver.length; i++) {
    oppgaver.push(mockOppgaver[i]);
  }

  return Promise.resolve(oppgaver);
}
