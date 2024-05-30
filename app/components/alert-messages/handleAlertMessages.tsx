import type { IAlert } from "~/context/alert-context";
import { Link } from "@remix-run/react";

export function handleLeggTilbakeOppgaveMessages(
  httpCode: number,
  message: string,
  addAlert: (alert: IAlert) => void,
) {
  switch (httpCode) {
    case 204:
      addAlert({
        variant: "success",
        title: "Oppgave lagt tilbake i køen 📥",
      });
      break;
    default:
      addAlert({
        variant: "error",
        title: "Kunne ikke legge oppgaven tilbake i køen ",
        body: `Ukjent feil: ${httpCode} - ${message}`,
      });
  }
}

export function handleUtsettOppgaveMessages(
  httpCode: number,
  message: string,
  addAlert: (alert: IAlert) => void,
) {
  switch (httpCode) {
    case 204:
      addAlert({
        variant: "success",
        title: message, // Message kommer fra bff for å kunne gi dato for når oppgaven er utsatt til
      });
      break;
    default:
      addAlert({
        variant: "error",
        title: "Kunne ikke utsette oppgave ",
        body: `Ukjent feil: ${httpCode} - ${message}`,
      });
  }
}

export function handleNesteOppgaveMessages(
  httpCode: number,
  message: string,
  addAlert: (alert: IAlert) => void,
) {
  switch (httpCode) {
    case 404:
      addAlert({
        variant: "success",
        title: "Ingen flere oppgaver 🎉",
        body: "Alle oppgaver med dette søket er ferdig behandlet",
      });
      break;
    default:
      addAlert({
        variant: "error",
        title: "Kunne ikke hente neste oppgave ",
        body: `Ukjent feil: ${httpCode} - ${message}`,
      });
  }
}

export function handleTildelOppgaveMessages(
  httpCode: number,
  message: string,
  addAlert: (alert: IAlert) => void,
) {
  switch (httpCode) {
    case 423:
      addAlert({
        variant: "warning",
        title: "Kunne ikke tildele oppgaven 🙅",
        body: (
          <>
            Oppgaven er allerede tildelt noen andre
            <div>
              <Link to="/">Gå tilbakke til oppgavelista</Link>
            </div>
          </>
        ),
      });
      break;
    default:
      addAlert({
        variant: "warning",
        title: "Kunne ikke tildele oppgaven 🙅",
        body: `Ukjent feil: ${httpCode} - ${message}`,
      });
  }
}
