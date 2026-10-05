import { components } from "../../openapi/saksbehandling-typer";

type UtlostAvType = components["schemas"]["UtlostAvType"];

export function filtrerOppgaverTilBehandling<
  T extends { tilstand: components["schemas"]["OppgaveOversikt"]["tilstand"] },
>(oppgaver: readonly T[]): T[] {
  return oppgaver.filter((oppgave) =>
    [
      "KLAR_TIL_BEHANDLING",
      "UNDER_BEHANDLING",
      "KLAR_TIL_KONTROLL",
      "UNDER_KONTROLL",
      "PAA_VENT",
    ].includes(oppgave.tilstand),
  );
}

/**
 * Filtrerer bort oppgaver som er utløst av meldekort, med mindre `skjulMeldekortOppgaver` er false.
 */
export function filtrerMeldekortOppgaver<T extends { utlostAv: UtlostAvType }>(
  oppgaver: readonly T[],
  skjulMeldekortOppgaver: boolean,
): T[] {
  return oppgaver.filter((oppgave) => !skjulMeldekortOppgaver || oppgave.utlostAv !== "MELDEKORT");
}
