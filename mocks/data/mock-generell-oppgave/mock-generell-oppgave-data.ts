import { components } from "openapi/saksbehandling-typer";

export const mockGenerellOppgave: components["schemas"]["GenerellOppgave"] = {
  tittel: "Meldekort trenger korrigering",
  beskrivelse:
    "Meldekortet for perioden 01.03-14.03 har feil rapporterte timer. Bruker har meldt inn 40 timer, men arbeidsgiver rapporterer 20 timer. Må gjennomgås og korrigeres.",
  strukturertData: {
    meldekortId: "MK-2026-0312",
    periode: "01.03.2026 - 14.03.2026",
    rapporterteTimer: 40,
    arbeidsgiverRapporterteTimer: 20,
    arbeidsgiver: "Kiwi Minipris AS",
  },
  lovligeSaker: [
    { sakId: "019a0001-aaaa-7001-b001-000000000001", opprettetDato: "2025-06-15T10:00:00" },
    { sakId: "019a0001-aaaa-7001-b001-000000000002", opprettetDato: "2024-01-20T08:30:00" },
  ],
};
