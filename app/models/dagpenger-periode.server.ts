import type { IPerson } from "./person.server";
import type { IOppgave } from "./oppgave.server";

export interface IDagpengerPeriode {
  id: string;
  person: IPerson;
  periode: {
    fra: string;
    til: string;
  };
  oppgaver: IOppgave[];
}
