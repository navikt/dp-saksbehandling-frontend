import { mockOppgaver } from "../mocks/data/mock-oppgaver/mock-oppgaver";
import { genererMockDagpengerRettBehandling, genererMockOppgave } from "./generer-mock-data";

async function main() {
  try {
    const dagpengerRettMockOppgaver = mockOppgaver.filter(
      (oppgave) => oppgave.behandlingType === "RETT_TIL_DAGPENGER",
    );

    for (const mockOppgave of dagpengerRettMockOppgaver) {
      const oppgave = await genererMockOppgave(mockOppgave.oppgaveId);
      switch (oppgave.behandlingType) {
        case "RETT_TIL_DAGPENGER":
          await genererMockDagpengerRettBehandling(oppgave.behandlingId);
          break;
        case "KLAGE":
          break;
        case "INNSENDING":
          break;
      }
    }

    console.info("\n✅ Ferdig! Oppgaver og behandlinger oppdatert");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
