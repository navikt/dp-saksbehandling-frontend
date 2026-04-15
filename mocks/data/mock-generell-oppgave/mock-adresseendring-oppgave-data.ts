import { components } from "openapi/saksbehandling-typer";

export const mockAdresseendringOppgave: components["schemas"]["GenerellOppgave"] = {
  behandlingId: "019a0002-0002-7002-a002-000000000001",
  tittel: "Bruker har meldt adresseendring",
  beskrivelse:
    "Bruker har flyttet fra Oslo til Bergen. Folkeregisteret viser ny adresse fra 01.03.2026. Kontroller at ytelsesberegning og utbetalinger er korrekte etter flytting.",
  strukturertData: {
    gammelAdresse: "Storgata 1, 0182 Oslo",
    nyAdresse: "Nygårdsgaten 5, 5015 Bergen",
    flyttedato: "2026-03-01",
  },
  lovligeSaker: [
    { sakId: "019a0002-bbbb-7002-b002-000000000001", opprettetDato: "2025-11-03T12:00:00" },
  ],
};
