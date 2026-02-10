import { components } from "../../../openapi/saksbehandling-typer";
import { arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt } from "./arbeidsinntekt-avslag-gjenopptak-ikke-registrert-opphold-utland-ordinær-reell-arbeidssøker-verneplikt";
import { avslagManuellOrdinærReellArbeidssøkerVerneplikt } from "./avslag-manuell-ordinær-reell-arbeidssøker-verneplikt";
import { avslagMinsteinntektOrdinær } from "./avslag-minsteinntekt-ordinær";
import { innsending } from "./innsending";
import { innvilgelseOrdinærTidligereKontrollert } from "./innvilgelse-ordinær-tidligere-kontrollert";
import { klage } from "./klage";
import { ordinær } from "./ordinær";
import { ordinærAvslagReellArbeidssøker } from "./ordinær-avslag-reell-arbeidssøker";
import { ordinærInnvilgelse } from "./ordinær-innvilgelse";
import { ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt } from "./ordinær-verneplikt-avslag-ikke-registrert-minsteinntekt";
import { vernepliktOrdinærInnvilgelseGjenopptak } from "./verneplikt-ordinær-innvilgelse-gjenopptak";
import { oppgave019c28e8fbdb7466b5e6f6466f89d054 } from "./oppgave019c28e8fbdb7466b5e6f6466f89d054";
import { oppgave019b9cf5580377b3b9db2195d8101a55 } from "./oppgave019b9cf5580377b3b9db2195d8101a55";
import { oppgave019b2ce1aecd715eb6043ba49ebe3abc } from "./oppgave019b2ce1aecd715eb6043ba49ebe3abc";
import { oppgave019b2cdfd913763aa82340c42f9d5461 } from "./oppgave019b2cdfd913763aa82340c42f9d5461";
import { oppgave019b2ccd885d71eb8977f453029fd5b4 } from "./oppgave019b2ccd885d71eb8977f453029fd5b4";
import { oppgave019b2cbfa883718c8ad3eecfc980ffd7 } from "./oppgave019b2cbfa883718c8ad3eecfc980ffd7";
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
    lovligeEndringer: oppgave.lovligeEndringer,
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
  konverterOppgaveTilListeOppgave(ordinær),
  konverterOppgaveTilListeOppgave(ordinærInnvilgelse),
  konverterOppgaveTilListeOppgave(ordinærAvslagReellArbeidssøker),
  konverterOppgaveTilListeOppgave(ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt),
  konverterOppgaveTilListeOppgave(vernepliktOrdinærInnvilgelseGjenopptak),
  konverterOppgaveTilListeOppgave(oppgave019c28e8fbdb7466b5e6f6466f89d054),
  konverterOppgaveTilListeOppgave(oppgave019b9cf5580377b3b9db2195d8101a55),
  konverterOppgaveTilListeOppgave(oppgave019b2ce1aecd715eb6043ba49ebe3abc),
  konverterOppgaveTilListeOppgave(oppgave019b2cdfd913763aa82340c42f9d5461),
  konverterOppgaveTilListeOppgave(oppgave019b2ccd885d71eb8977f453029fd5b4),
  konverterOppgaveTilListeOppgave(oppgave019b2cbfa883718c8ad3eecfc980ffd7),
];
