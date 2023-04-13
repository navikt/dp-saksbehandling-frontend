import type { IPerson } from "~/models/person.server";
import type { IOppgave } from "~/models/oppgave.server";

export interface IDagpengerPeriode {
  id: string;
  person: IPerson;
  periode: {
    fra: string;
    til: string;
  };
  oppgaver: IOppgave[];
}
