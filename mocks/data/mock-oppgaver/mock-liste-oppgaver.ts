import { components } from "../../../openapi/saksbehandling-typer";
import { arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt } from "./arbeidsinntekt-avslag-gjenopptak-ikke-registrert-opphold-utland-ordinær-reell-arbeidssøker-verneplikt";
import { avslagManuellOrdinærReellArbeidssøkerVerneplikt } from "./avslag-manuell-ordinær-reell-arbeidssøker-verneplikt";
import { avslagMinsteinntektOrdinær } from "./avslag-minsteinntekt-ordinær";
import { innsending } from "./innsending";
import { klage } from "./klage";
import { ordinærAvslagReellArbeidssøker } from "./ordinær-avslag-reell-arbeidssøker";
import { ordinærInnvilgelse } from "./ordinær-innvilgelse";
import { ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt } from "./ordinær-verneplikt-avslag-ikke-registrert-minsteinntekt";
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
  konverterOppgaveTilListeOppgave(ordinærInnvilgelse),
  konverterOppgaveTilListeOppgave(
    arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt,
  ),
  konverterOppgaveTilListeOppgave(ordinærAvslagReellArbeidssøker),
  konverterOppgaveTilListeOppgave(avslagManuellOrdinærReellArbeidssøkerVerneplikt),
  konverterOppgaveTilListeOppgave(klage),
  konverterOppgaveTilListeOppgave(innsending),
  konverterOppgaveTilListeOppgave(avslagMinsteinntektOrdinær),
  konverterOppgaveTilListeOppgave(ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt),
];
