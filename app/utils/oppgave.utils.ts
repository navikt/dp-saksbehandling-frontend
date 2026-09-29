import { components } from "../../openapi/saksbehandling-typer";

type UtlostAvType = components["schemas"]["UtlostAvType"];

/**
 * Filtrerer bort oppgaver som er utløst av meldekort, med mindre `skjulMeldekortOppgaver` er false.
 */
export function filtrerMeldekortOppgaver<T extends { utlostAv: UtlostAvType }>(
  oppgaver: readonly T[],
  skjulMeldekortOppgaver: boolean,
): T[] {
  return oppgaver.filter((oppgave) => !skjulMeldekortOppgaver || oppgave.utlostAv !== "MELDEKORT");
}
