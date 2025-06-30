import { components } from "../../openapi/saksbehandling-typer";
import {
  ferdigBehandlerKlageOppgave,
  ferdigBehandletAutomatiskOppgave,
  ferdigBehandletOppgave,
  klageOppgave,
  underBehandlingAnnenSaksbehandlerOppgave,
  underBehandlingArvOppgaveMineOppgave,
  underBehandlingAvslagOppgaveMineOppgave,
  underBehandlingInnvilgelseMinOppgave,
  underBehandlingMinOppgaveKreverKontroll,
} from "./mock-oppgaver";

export function konverterOppgaveTilListeOppgave(
  oppgave: components["schemas"]["Oppgave"],
): components["schemas"]["OppgaveOversikt"] {
  return {
    behandlingType: oppgave.behandlingType,
    behandlingId: oppgave.behandlingId,
    emneknagger: oppgave.emneknagger,
    oppgaveId: oppgave.oppgaveId,
    personIdent: oppgave.person?.ident || "12345678910",
    behandlerIdent: oppgave.saksbehandler?.ident,
    skjermesSomEgneAnsatte: oppgave.person.skjermesSomEgneAnsatte,
    adressebeskyttelseGradering: oppgave.person.adressebeskyttelseGradering,
    tidspunktOpprettet: oppgave.tidspunktOpprettet,
    tilstand: oppgave.tilstand,
    utsattTilDato: oppgave.utsattTilDato,
  };
}

export const mockListeOppgaver: components["schemas"]["OppgaveOversikt"][] = [
  konverterOppgaveTilListeOppgave(underBehandlingInnvilgelseMinOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingAvslagOppgaveMineOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingArvOppgaveMineOppgave),
  konverterOppgaveTilListeOppgave(underBehandlingMinOppgaveKreverKontroll),
  konverterOppgaveTilListeOppgave(underBehandlingAnnenSaksbehandlerOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandletOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandletAutomatiskOppgave),
  konverterOppgaveTilListeOppgave(klageOppgave),
  konverterOppgaveTilListeOppgave(ferdigBehandlerKlageOppgave),
];
