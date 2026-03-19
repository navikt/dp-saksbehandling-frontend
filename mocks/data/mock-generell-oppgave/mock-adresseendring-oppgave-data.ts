import { components } from "openapi/saksbehandling-typer";

export const mockAdresseendringOppgaveData: components["schemas"]["GenerellOppgaveData"] = {
  oppgaveType: "Adresseendring",
  tittel: "Bruker har meldt adresseendring",
  beskrivelse:
    "Bruker har flyttet fra Oslo til Bergen. Folkeregisteret viser ny adresse fra 01.03.2026. Kontroller at ytelsesberegning og utbetalinger er korrekte etter flytting.",
  lovligeSaker: [
    { sakId: "019a0002-bbbb-7002-b002-000000000001", opprettetDato: "2025-11-03T12:00:00" },
  ],
};
