import { components } from "../../openapi/saksbehandling-typer";
import {
  ferdigBehandlerKlageOppgave,
  ferdigBehandletAutomatiskOppgave,
  ferdigBehandletOppgave,
  klageOppgave,
  underBehandlingAnnenSaksbehandlerOppgave,
  underBehandlingAvslagOppgaveMineOppgave,
  underBehandlingInnvilgelseMinOppgave,
  underBehandlingMeldekortOppgaveMineOppgave,
  underBehandlingPeriodisertMinOppgave,
  underKontrollAnnenSaksbehandler,
  underKontrollMinOppgave,
} from "./mock-oppgaver";

export function konverterOppgaveTilListeOppgave(
  oppgave: components["schemas"]["Oppgave"],
): components["schemas"]["OppgaveOversikt"] {
  return {
    behandlingType: oppgave.behandlingType,
    behandlingId: oppgave.behandlingId,
    emneknagger: oppgave.emneknagger,
    oppgaveId: oppgave.oppgaveId,
    utlostAv: oppgave.utlostAv,
    personIdent: oppgave.person?.ident || "12345678910",
    behandlerIdent:
      oppgave.tilstand === "UNDER_BEHANDLING"
        ? oppgave.saksbehandler?.ident
        : oppgave.tilstand === "UNDER_KONTROLL"
          ? oppgave.beslutter?.ident
          : "",
    skjermesSomEgneAnsatte: oppgave.person.skjermesSomEgneAnsatte,
    adressebeskyttelseGradering: oppgave.person.adressebeskyttelseGradering,
    tidspunktOpprettet: oppgave.tidspunktOpprettet,
    tilstand: oppgave.tilstand,
    utsattTilDato: oppgave.utsattTilDato,
  };
}

export const mockListeOppgaver: components["schemas"]["OppgaveOversikt"][] = [
  konverterOppgaveTilListeOppgave(underBehandlingInnvilgelseMinOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingPeriodisertMinOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingAvslagOppgaveMineOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingMeldekortOppgaveMineOppgave),
  konverterOppgaveTilListeOppgave(underKontrollMinOppgave),
  konverterOppgaveTilListeOppgave(underKontrollAnnenSaksbehandler),
  konverterOppgaveTilListeOppgave(underBehandlingAnnenSaksbehandlerOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandletOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandletAutomatiskOppgave),
  konverterOppgaveTilListeOppgave(klageOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandlerKlageOppgave),
];
