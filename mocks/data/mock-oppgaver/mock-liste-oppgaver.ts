import { components } from "../../../openapi/saksbehandling-typer";
import { arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt } from "./arbeidsinntekt-avslag-gjenopptak-ikke-registrert-opphold-utland-ordinær-reell-arbeidssøker-verneplikt";
import { avslagIkkeRegistrertMinsteinntektOrdinærVerneplikt } from "./avslag-ikke-registrert-minsteinntekt-ordinær-verneplikt";
import { avslagManuellOrdinærReellArbeidssøkerVerneplikt } from "./avslag-manuell-ordinær-reell-arbeidssøker-verneplikt";
import { avslagMinsteinntektOrdinær } from "./avslag-minsteinntekt-ordinær";
import { avslagOrdinærReellArbeidssøker } from "./avslag-ordinær-reell-arbeidssøker";
import { innsending } from "./innsending";
import { innvilgelseOrdinærTidligereKontrollert } from "./innvilgelse-ordinær-tidligere-kontrollert";
import { klage } from "./klage";

export function konverterOppgaveTilListeOppgave(
  oppgave: components["schemas"]["Oppgave"],
): components["schemas"]["OppgaveOversikt"] {
  return {
    behandlingType: oppgave.behandlingType,
    behandlingId: oppgave.behandlingId,
    emneknagger: oppgave.emneknagger,
    oppgaveId: oppgave.oppgaveId,
    utlostAv: oppgave.utlostAv,
    personIdent: oppgave.person.ident,
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

export const mockListeOppgaver = [
  konverterOppgaveTilListeOppgave(klage),
  konverterOppgaveTilListeOppgave(innsending),
  konverterOppgaveTilListeOppgave(
    arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt,
  ),
  konverterOppgaveTilListeOppgave(avslagManuellOrdinærReellArbeidssøkerVerneplikt),
  konverterOppgaveTilListeOppgave(avslagMinsteinntektOrdinær),
  konverterOppgaveTilListeOppgave(innvilgelseOrdinærTidligereKontrollert),
  konverterOppgaveTilListeOppgave(avslagOrdinærReellArbeidssøker),
  konverterOppgaveTilListeOppgave(avslagIkkeRegistrertMinsteinntektOrdinærVerneplikt),
];
