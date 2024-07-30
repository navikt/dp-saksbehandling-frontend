import type { IAlert } from "~/context/alert-context";

export const leggTilbakeSuccessAlert: IAlert = {
  variant: "success",
  title: "Oppgave lagt tilbake i køen 📥",
};

export function getLeggTilbakeErrorAlert(httpCode: number): IAlert {
  return {
    variant: "error",
    title: "Kunne ikke legge oppgaven tilbake i køen",
    body: `Ukjent feil: ${httpCode} `,
  };
}

export const alleredeTildeltAlert: IAlert = {
  variant: "warning",
  title: "Kunne ikke tildele oppgaven 🙅",
  body: "Oppgaven er allerede tildelt noen andre",
};

export const ikkeTilgangEgneAnsatteAlert: IAlert = {
  variant: "warning",
  title: "Kunne ikke tildele oppgaven 🙅",
  body: "Du har ikke tilgang til å behandle egne ansatte.",
};

export const tomtForOppgaverAlert: IAlert = {
  variant: "success",
  title: "Ingen flere oppgaver 🎉",
  body: "Alle oppgaver med dette søket er ferdig behandlet",
};

export const brevMottattAlert: IAlert = {
  variant: "success",
  title: "Brev mottatt 📬",
  body: "Brevet er mottatt og lagret",
};

export const behandlingGodkjentAlert: IAlert = {
  variant: "success",
  title: "Behandling sendt til automatisk avslag",
};

export const behandlingAvbruttAlert: IAlert = {
  variant: "success",
  title: "Behandling sendt til arena for videre behandling",
};

export function getNesteOppgaveError(httpCode: number): IAlert {
  return {
    variant: "error",
    title: "Kunne ikke hente neste oppgave ",
    body: `Ukjent feil: ${httpCode}`,
  };
}
