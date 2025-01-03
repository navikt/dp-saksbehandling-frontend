import { json, redirect } from "@remix-run/node";

import { type IOppgave, tildelOppgave } from "~/models/oppgave.server";
import { handleTildelOppgaveMessages } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";
import type { IHttpProblem } from "~/utils/types";

export async function tildelOppgaveAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await tildelOppgave(request, oppgaveId);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

    const httpProblem: IHttpProblem = await response.json();
    if (httpProblem.status === 403) {
      const ikkeTilgangVariant = httpProblem.type.split(":")[3];
      const alert = handleTildelOppgaveMessages(httpProblem.status, ikkeTilgangVariant);
      return json(alert);
    }

    const alert = handleTildelOppgaveMessages(httpProblem.status);
    return json(alert);
  }

  const nyOppgaveTilstand = (await response.text()) as IOppgave["tilstand"];

  if (nyOppgaveTilstand === "UNDER_BEHANDLING") {
    return redirect(`/oppgave/${oppgaveId}/behandle`);
  }

  if (nyOppgaveTilstand === "UNDER_KONTROLL") {
    return redirect(`/oppgave/${oppgaveId}/kontroll`);
  }

  throw new Error(
    `Oppgave med id ${oppgaveId} har uventet tilstand. Forventet tilstand er UNDER_BEHANDLING eller UNDER_KONTROLL, fikk ${nyOppgaveTilstand}`,
  );
}
