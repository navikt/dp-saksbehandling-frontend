import { json, redirect } from "@remix-run/node";

import { hentNesteOppgave, type IOppgave } from "~/models/oppgave.server";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function hentNesteOppgaveAction(request: Request) {
  const response = await hentNesteOppgave(request);

  if (response.ok) {
    const oppgave = (await response.json()) as IOppgave;
    return redirect(`/oppgave/${oppgave.oppgaveId}/behandle`);
  }

  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  const alert = getAlertMessage({ name: "hent-neste-oppgave", httpCode: response.status });

  return json(alert);
}
