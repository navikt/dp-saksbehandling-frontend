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

export const mockStatistikkOppgaveTypeV2: components["schemas"]["StatistikkV2"] = {
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
    { navn: "Søknader", verdier: [11, 4, 7, 4, 5, 9, 262] },
    { navn: "Innsendinger", verdier: [2, 1, 2, 0, 1, 2, 53] },
    { navn: "Klager", verdier: [1, 0, 1, 0, 1, 1, 26] },
    { navn: "Manuell", verdier: [2, 1, 1, 0, 0, 2, 44] },
    { navn: "Meldekort", verdier: [2, 0, 1, 0, 1, 1, 52] },
  ],
};

export const mockStatistikkRettighetV2: components["schemas"]["StatistikkV2"] = {
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
    { navn: "Ordinære", verdier: [11, 4, 7, 4, 5, 9, 262] },
    { navn: "Permitering", verdier: [2, 1, 2, 0, 1, 2, 53] },
    { navn: "Verneplikt", verdier: [1, 0, 1, 0, 1, 1, 26] },
    { navn: "Fiske-permitering", verdier: [2, 1, 1, 0, 0, 2, 44] },
    { navn: "Konkurs", verdier: [2, 0, 1, 0, 1, 1, 52] },
    { navn: "Utdanning", verdier: [1, 0, 1, 0, 0, 1, 30] },
    { navn: "Etablering", verdier: [1, 0, 0, 0, 1, 0, 25] },
    { navn: "Eøs", verdier: [0, 1, 0, 0, 0, 1, 15] },
  ],
};
