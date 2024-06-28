import type { IAlert } from "~/context/alert-context";
import {
  alleredeTildeltAlert,
  brevMottattAlert,
  getLeggTilbakeErrorAlert,
  getNesteOppgaveError,
  leggTilbakeSuccessAlert,
  tomtForOppgaverAlert,
} from "~/tekst/alert-tekster";

interface IAlertType {
  name:
    | "hent-neste-oppgave"
    | "legg-tilbake-oppgave"
    | "utsett-oppgave"
    | "tildel-oppgave"
    | "ukjent-feil"
    | "send-brev";
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

export function handleTildelOppgaveMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 423:
      return alleredeTildeltAlert;

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
