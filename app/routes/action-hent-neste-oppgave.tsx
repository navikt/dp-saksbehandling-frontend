import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import type { IOppgave } from "~/models/oppgave.server";
import { hentNesteOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import { getAlertMessage } from "~/utils/alert-message.utils";

export async function action({ request }: ActionFunctionArgs) {
  const response = await hentNesteOppgave(request);

  if (response.ok) {
    const oppgave = (await response.json()) as IOppgave;
    return redirect(`/oppgave/${oppgave.oppgaveId}/oversikt`);
  }

  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  const alert = getAlertMessage({ name: "hent-neste-oppgave", httpCode: response.status });

  return json(alert);
}
