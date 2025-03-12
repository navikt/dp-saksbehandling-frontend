import type { IAlert } from "~/context/alert-context";
import { sendtTilArenaAlert } from "~/tekst/alert-tekster";

interface IAlertType {
  name: "ukjent-feil" | "send-til-arena" | "kvitter-avklaring" | "rekjor-behandling";
  httpCode: number;
}

export function getAlertMessage(alertResponse: IAlertType): IAlert {
  switch (alertResponse.name) {
    case "send-til-arena":
      return handleSendTilArenaMessages(alertResponse.httpCode);

    case "kvitter-avklaring":
      return handleKvitterAvklaringMessages(alertResponse.httpCode);

    case "rekjor-behandling":
      return rekjorBehandlingMessages(alertResponse.httpCode);

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

export function handleKvitterAvklaringMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 204:
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

export function rekjorBehandlingMessages(httpCode: number): IAlert {
  switch (httpCode) {
    case 201:
      return {
        variant: "success",
        title: "Behandling er kjørt på nytt",
      };

    default:
      return {
        variant: "error",
        title: "Kunne ikke kjøre behandling på nytt",
        body: `Feilkode: ${httpCode}`,
      };
  }
}
