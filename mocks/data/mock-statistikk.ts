import { components, paths } from "../../openapi/saksbehandling-typer";

export const mockStatistikk: paths["/statistikk"]["get"]["responses"]["200"]["content"]["application/json"] =
  {
    individuellStatistikk: { dag: 4, uke: 12, totalt: 623 },
    generellStatistikk: { dag: 400, uke: 1200, totalt: 6230 },
    beholdningsinfo: {
      antallOppgaverKlarTilBehandling: 1401,
      antallOppgaverKlarTilKontroll: 7,
      datoEldsteUbehandledeOppgave: "2025-02-12T13:26:19.548108",
    },
  };

export const mockStatistikkV2: components["schemas"]["StatistikkV2"] = {
  grupper: [
    { navn: "Klar til behandling", total: 18, eldsteOppgave: "2026-01-20T09:30:00Z" },
    { navn: "Klar til kontroll", total: 6, eldsteOppgave: "2026-01-28T10:00:00Z" },
    { navn: "Under behandling", total: 12, eldsteOppgave: "2026-01-25T11:45:00Z" },
    { navn: "Under kontroll", total: 4, eldsteOppgave: "2026-01-30T08:15:00Z" },
    { navn: "På vent", total: 8, eldsteOppgave: "2026-01-15T13:30:00Z" },
    { navn: "Avbrutt", total: 15, eldsteOppgave: "2024-06-10T14:20:00Z" },
    { navn: "Ferdig behandlet", total: 437, eldsteOppgave: "" },
  ],
  serier: [
    { navn: "Søknader", verdier: [11, 4, 7, 4, 5, 9, 262] }, // ~302 totalt (60%)
    { navn: "Innsendinger", verdier: [2, 1, 2, 0, 1, 2, 53] }, // ~61 totalt (12%)
    { navn: "Klager", verdier: [1, 0, 1, 0, 1, 1, 26] }, // ~30 totalt (6%)
    { navn: "Manuell", verdier: [2, 1, 1, 0, 0, 2, 44] }, // ~50 totalt (10%)
    { navn: "Meldekort", verdier: [2, 0, 1, 0, 1, 1, 52] }, // ~57 totalt (11%)
  ],
};
