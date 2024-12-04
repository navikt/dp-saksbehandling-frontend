import type { IAlert } from "~/context/alert-context";
import {
  alleredeTildeltAlert,
  behandlingGodkjentAlert,
  brevMottattAlert,
  getLeggTilbakeErrorAlert,
  getNesteOppgaveError,
  ikkeTilgangAlert,
  ikkeTilgangEgneAnsatteAlert,
  ikkeTilgangFortroligAlert,
  ikkeTilgangStrengtFortroligAlert,
  ikkeTilgangStrengtFortroligUtlandAlert,
  leggTilbakeSuccessAlert,
  sendtTilArenaAlert,
  tomtForOppgaverAlert,
} from "~/tekst/alert-tekster";

interface IAlertType {
  name:
    | "hent-neste-oppgave"
    | "legg-tilbake-oppgave"
    | "utsett-oppgave"
    | "tildel-oppgave"
    | "ukjent-feil"
    | "send-brev"
    | "godkjenn-behandling"
    | "returner-til-saksbehandler"
    | "send-til-arena"
    | "send-til-kontroll"
    | "ferdigstill-oppgave"
    | "ferdigstill-oppgave-brev-i-arena"
    | "kvitter-avklaring";
  httpCode: number;
}

export function getAlertMessage(alertResponse: IAlertType): IAlert {
  switch (alertResponse.name) {
    case "hent-neste-oppgave":
      return handleNesteOppgaveMessages(alertResponse.httpCode);

    case "legg-tilbake-oppgave":
      return handleLeggTilbakeOppgaveMessages(alertResponse.httpCode);

    case "utsett-oppgave":
      return handleUtsettOppgaveMessages(alertResponse.httpCode);

    case "tildel-oppgave":
      return handleTildelOppgaveMessages(alertResponse.httpCode);

    case "send-brev":
      return handleSendBrevMessages(alertResponse.httpCode);

    case "godkjenn-behandling":
      return handleGodkjennBehandlingMessages(alertResponse.httpCode);

    case "send-til-arena":
      return handleSendTilArenaMessages(alertResponse.httpCode);

    case "send-til-kontroll":
      return handleSendTilKontrollMessages(alertResponse.httpCode);

    case "returner-til-saksbehandler":
      return handleReturnerTilSaksbehandler(alertResponse.httpCode);

    case "ferdigstill-oppgave":
      return handleFerdigstillOppgaveMessages(alertResponse.httpCode);

    case "ferdigstill-oppgave-brev-i-arena":
      return handleFerdigstillOppgaveBrevIArenaMessages(alertResponse.httpCode);

    case "kvitter-avklaring":
      return handleKvitterAvklaringMessages(alertResponse.httpCode);

    case "ukjent-feil":
      return {
        variant: "info",
        title: "todo",
        body: "todo",
      };

    default:
      return {
        variant: "info",
        title: "todo",
        body: "todo",
      };
  }
}

export function handleLeggTilbakeOppgaveMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 204:
      return leggTilbakeSuccessAlert;

    default:
      return getLeggTilbakeErrorAlert(httpCode);
  }
}

export function handleUtsettOppgaveMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 204:
      return {
        variant: "success",
        title: "Oppgave utsatt",
      };

    default:
      return {
        variant: "error",
        title: "Kunne ikke utsette oppgave ",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}

export function handleNesteOppgaveMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 404:
      return tomtForOppgaverAlert;

    default:
      return getNesteOppgaveError(httpCode);
  }
}

export function handleTildelOppgaveMessages(httpCode: number, ikkeTilgangVariant?: string): IAlert {
  switch (httpCode) {
    case 423:
      return alleredeTildeltAlert;

    case 403:
      if (ikkeTilgangVariant === "egne-ansatte") {
        return ikkeTilgangEgneAnsatteAlert;
      }

      if (ikkeTilgangVariant === "fortrolig") {
        return ikkeTilgangFortroligAlert;
      }

      if (ikkeTilgangVariant === "strengt-fortrolig") {
        return ikkeTilgangStrengtFortroligAlert;
      }

      if (ikkeTilgangVariant === "strengt-fortrolig-utland") {
        return ikkeTilgangStrengtFortroligUtlandAlert;
      }

      return ikkeTilgangAlert;

    default:
      return {
        variant: "warning",
        title: "Kunne ikke tildele oppgaven 🙅",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}

export function handleSendBrevMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 202:
      return brevMottattAlert;

    default:
      return {
        variant: "warning",
        title: "Klarte ikke generere brev",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}

export function handleGodkjennBehandlingMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 201:
      return behandlingGodkjentAlert;

    default:
      return {
        variant: "error",
        title: "Kunne ikke godkjenn behandling",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}

export function handleSendTilArenaMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 201:
      return sendtTilArenaAlert;

    default:
      return {
        variant: "error",
        title: "Fikk ikke sendt behandling til Arena",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}

export function handleSendTilKontrollMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 204:
      return {
        variant: "success",
        title: "Oppgave sendt til kontroll",
      };

    case 404:
      return {
        variant: "error",
        title: "Kunne ikke sende til kontroll",
        body: "Fant ikke oppgaven",
      };

    case 409:
      return {
        variant: "error",
        title: "Kunne ikke sende til kontroll",
        body: "Oppgave er allerede sendt til kontroll",
      };

    default:
      return {
        variant: "error",
        title: "Fikk ikke sendt oppgave til kontroll",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}

export function handleReturnerTilSaksbehandler(httpCode: number): IAlert {
  switch (httpCode) {
    case 204:
      return {
        variant: "success",
        title: "Oppgave sendt tilbake til saksbehandler",
      };

    default:
      return {
        variant: "error",
        title: "Fikk ikke sendt oppgave tilbake til saksbehandler",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}

export function handleFerdigstillOppgaveMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 204:
      return {
        variant: "success",
        title: "Oppgaven er ferdig behandlet og utsending av melding om vedtak har startet",
      };

    default:
      return {
        variant: "error",
        title: "Kunne ikke ferdigstille oppgave",
        body: `Feilkode: ${httpCode}`,
      };
  }
}

export function handleFerdigstillOppgaveBrevIArenaMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 204:
      return {
        variant: "success",
        title: "Oppgaven er ferdig behandlet og utsending av melding om vedtak håndteres i Arena",
      };

    default:
      return {
        variant: "error",
        title: "Kunne ikke ferdigstille oppgave",
        body: `Feilkode: ${httpCode}`,
      };
  }
}

export function handleKvitterAvklaringMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 201:
      return {
        variant: "success",
        title: "Avklaring kvittert",
      };

    case 400:
      return {
        variant: "error",
        title: "Avklaringen kan ikke kvitteres ut",
      };

    case 403:
      return {
        variant: "error",
        title: "Du har ikke tilgang til å kvittere ut denne avklaringen",
      };

    default:
      return {
        variant: "error",
        title: "Kunne ikke kvittere ut avklaring",
        body: `Feilkode: ${httpCode}`,
      };
  }
}
