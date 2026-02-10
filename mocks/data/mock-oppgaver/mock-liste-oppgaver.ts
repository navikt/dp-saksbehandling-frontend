import { components } from "../../../openapi/saksbehandling-typer";
import { innsending } from "./innsending";
import { klage } from "./klage";
import { oppgave019b2cbfa883718c8ad3eecfc980ffd7 } from "./oppgave019b2cbfa883718c8ad3eecfc980ffd7";
import { oppgave019b2ccd885d71eb8977f453029fd5b4 } from "./oppgave019b2ccd885d71eb8977f453029fd5b4";
import { oppgave019b2cdfd913763aa82340c42f9d5461 } from "./oppgave019b2cdfd913763aa82340c42f9d5461";
import { oppgave019b2ce1aecd715eb6043ba49ebe3abc } from "./oppgave019b2ce1aecd715eb6043ba49ebe3abc";
import { oppgave019b9cf5580377b3b9db2195d8101a55 } from "./oppgave019b9cf5580377b3b9db2195d8101a55";
import { oppgave019c28e8fbdb7466b5e6f6466f89d054 } from "./oppgave019c28e8fbdb7466b5e6f6466f89d054";

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
  konverterOppgaveTilListeOppgave(oppgave019c28e8fbdb7466b5e6f6466f89d054),
  konverterOppgaveTilListeOppgave(oppgave019b9cf5580377b3b9db2195d8101a55),
  konverterOppgaveTilListeOppgave(oppgave019b2ce1aecd715eb6043ba49ebe3abc),
  konverterOppgaveTilListeOppgave(oppgave019b2cdfd913763aa82340c42f9d5461),
  konverterOppgaveTilListeOppgave(oppgave019b2ccd885d71eb8977f453029fd5b4),
  konverterOppgaveTilListeOppgave(oppgave019b2cbfa883718c8ad3eecfc980ffd7),
];
