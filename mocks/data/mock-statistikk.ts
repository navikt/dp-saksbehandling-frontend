import { components } from "../../openapi/saksbehandling-typer";

export const mockStatistikkOppgaveTypeV2: components["schemas"]["Produksjonsstatistikk"] = {
  grupper: [
    { navn: "Klar til behandling", total: 18, eldsteOppgave: "2026-01-20T09:30:00Z" },
    { navn: "Klar til kontroll", total: 6, eldsteOppgave: "2026-01-28T10:00:00Z" },
    { navn: "Under behandling", total: 12, eldsteOppgave: "2026-01-25T11:45:00Z" },
    { navn: "Under kontroll", total: 4, eldsteOppgave: "2026-01-30T08:15:00Z" },
    { navn: "På vent", total: 8, eldsteOppgave: "2026-01-15T13:30:00Z" },
    { navn: "Avbrutt", total: 15, eldsteOppgave: "2024-06-10T14:20:00Z" },
    { navn: "Ferdig behandlet", total: 437 },
  ],
  serier: [
    { navn: "Søknader", total: 302 },
    { navn: "Innsendinger", total: 61 },
    { navn: "Klager", total: 30 },
    { navn: "Manuell", total: 52 },
    { navn: "Meldekort", total: 55 },
  ],
  resultat: {
    grupper: [
      { navn: "Klar til behandling" },
      { navn: "Klar til kontroll" },
      { navn: "Under behandling" },
      { navn: "Ferdig behandlet" },
    ],
    serier: [
      {
        navn: "Søknader",
        verdier: [
          { gruppe: "Klar til behandling", antall: 11 },
          { gruppe: "Klar til kontroll", antall: 4 },
          { gruppe: "Under behandling", antall: 7 },
          { gruppe: "Ferdig behandlet", antall: 262 },
        ],
      },
      {
        navn: "Innsendinger",
        verdier: [
          { gruppe: "Klar til behandling", antall: 2 },
          { gruppe: "Klar til kontroll", antall: 1 },
          { gruppe: "Under behandling", antall: 2 },
          { gruppe: "Ferdig behandlet", antall: 53 },
        ],
      },
      {
        navn: "Klager",
        verdier: [
          { gruppe: "Klar til behandling", antall: 1 },
          { gruppe: "Klar til kontroll", antall: 0 },
          { gruppe: "Under behandling", antall: 1 },
          { gruppe: "Ferdig behandlet", antall: 26 },
        ],
      },
      {
        navn: "Manuell",
        verdier: [
          { gruppe: "Klar til behandling", antall: 2 },
          { gruppe: "Klar til kontroll", antall: 1 },
          { gruppe: "Under behandling", antall: 1 },
          { gruppe: "Ferdig behandlet", antall: 44 },
        ],
      },
      {
        navn: "Meldekort",
        verdier: [
          { gruppe: "Klar til behandling", antall: 2 },
          { gruppe: "Klar til kontroll", antall: 0 },
          { gruppe: "Under behandling", antall: 1 },
          { gruppe: "Ferdig behandlet", antall: 52 },
        ],
      },
    ],
  },
};

export const mockStatistikkRettighetV2: components["schemas"]["Produksjonsstatistikk"] = {
  grupper: [
    { navn: "Klar til behandling", total: 18, eldsteOppgave: "2026-01-20T09:30:00Z" },
    { navn: "Klar til kontroll", total: 6, eldsteOppgave: "2026-01-28T10:00:00Z" },
    { navn: "Under behandling", total: 12, eldsteOppgave: "2026-01-25T11:45:00Z" },
    { navn: "Under kontroll", total: 4, eldsteOppgave: "2026-01-30T08:15:00Z" },
    { navn: "På vent", total: 8, eldsteOppgave: "2026-01-15T13:30:00Z" },
    { navn: "Avbrutt", total: 15, eldsteOppgave: "2024-06-10T14:20:00Z" },
    { navn: "Ferdig behandlet", total: 437 },
  ],
  serier: [
    { navn: "Ordinære", total: 302 },
    { navn: "Permitering", total: 61 },
    { navn: "Verneplikt", total: 30 },
    { navn: "Fiske-permitering", total: 50 },
    { navn: "Konkurs", total: 57 },
    { navn: "Utdanning", total: 33 },
    { navn: "Etablering", total: 27 },
    { navn: "Eøs", total: 17 },
  ],
  resultat: {
    grupper: [
      { navn: "Klar til behandling" },
      { navn: "Klar til kontroll" },
      { navn: "Under behandling" },
      { navn: "Ferdig behandlet" },
    ],
    serier: [
      {
        navn: "Ordinære",
        verdier: [
          { gruppe: "Klar til behandling", antall: 11 },
          { gruppe: "Klar til kontroll", antall: 4 },
          { gruppe: "Under behandling", antall: 7 },
          { gruppe: "Ferdig behandlet", antall: 262 },
        ],
      },
      {
        navn: "Permitering",
        verdier: [
          { gruppe: "Klar til behandling", antall: 2 },
          { gruppe: "Klar til kontroll", antall: 1 },
          { gruppe: "Under behandling", antall: 2 },
          { gruppe: "Ferdig behandlet", antall: 53 },
        ],
      },
      {
        navn: "Verneplikt",
        verdier: [
          { gruppe: "Klar til behandling", antall: 1 },
          { gruppe: "Klar til kontroll", antall: 0 },
          { gruppe: "Under behandling", antall: 1 },
          { gruppe: "Ferdig behandlet", antall: 26 },
        ],
      },
      {
        navn: "Fiske-permitering",
        verdier: [
          { gruppe: "Klar til behandling", antall: 2 },
          { gruppe: "Klar til kontroll", antall: 1 },
          { gruppe: "Under behandling", antall: 1 },
          { gruppe: "Ferdig behandlet", antall: 44 },
        ],
      },
      {
        navn: "Konkurs",
        verdier: [
          { gruppe: "Klar til behandling", antall: 2 },
          { gruppe: "Klar til kontroll", antall: 0 },
          { gruppe: "Under behandling", antall: 1 },
          { gruppe: "Ferdig behandlet", antall: 52 },
        ],
      },
      {
        navn: "Utdanning",
        verdier: [
          { gruppe: "Klar til behandling", antall: 1 },
          { gruppe: "Klar til kontroll", antall: 0 },
          { gruppe: "Under behandling", antall: 1 },
          { gruppe: "Ferdig behandlet", antall: 30 },
        ],
      },
      {
        navn: "Etablering",
        verdier: [
          { gruppe: "Klar til behandling", antall: 1 },
          { gruppe: "Klar til kontroll", antall: 0 },
          { gruppe: "Under behandling", antall: 0 },
          { gruppe: "Ferdig behandlet", antall: 25 },
        ],
      },
      {
        navn: "Eøs",
        verdier: [
          { gruppe: "Klar til behandling", antall: 0 },
          { gruppe: "Klar til kontroll", antall: 1 },
          { gruppe: "Under behandling", antall: 0 },
          { gruppe: "Ferdig behandlet", antall: 15 },
        ],
      },
    ],
  },
};
