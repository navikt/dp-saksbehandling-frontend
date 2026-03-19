import { components } from "openapi/saksbehandling-typer";

export const mockGenerellOppgaveData: components["schemas"]["GenerellOppgaveData"] = {
  oppgaveType: "MeldekortKorrigering",
  tittel: "Meldekort trenger korrigering",
  beskrivelse:
    "Meldekortet for perioden 01.03-14.03 har feil rapporterte timer. Bruker har meldt inn 40 timer, men arbeidsgiver rapporterer 20 timer. Må gjennomgås og korrigeres.",
};
