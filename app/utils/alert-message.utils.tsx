import type { IAlert } from "~/context/alert-context";

interface IAlertType {
  name:
    | "hent-neste-oppgave"
    | "legg-tilbake-oppgave"
    | "utsett-oppgave"
    | "tildel-oppgave"
    | "ukjent-feil";
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
      return {
        variant: "success",
        title: "Oppgave lagt tilbake i køen 📥",
      };

    default:
      return {
        variant: "error",
        title: "Kunne ikke legge oppgaven tilbake i køen ",
        body: `Ukjent feil: ${httpCode} `,
      };
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
      return {
        variant: "success",
        title: "Ingen flere oppgaver 🎉",
        body: "Alle oppgaver med dette søket er ferdig behandlet",
      };

    default:
      return {
        variant: "error",
        title: "Kunne ikke hente neste oppgave ",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}

export function handleTildelOppgaveMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 423:
      return {
        variant: "warning",
        title: "Kunne ikke tildele oppgaven 🙅",
        body: "Oppgaven er allerede tildelt noen andre",
      };

    default:
      return {
        variant: "warning",
        title: "Kunne ikke tildele oppgaven 🙅",
        body: `Ukjent feil: ${httpCode}`,
      };
  }
}
