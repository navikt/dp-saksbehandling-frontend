import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { leggTilbakeOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import { getAlertMessage } from "~/utils/alert-message.utils";

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }
  console.time("legg-tilbake-oppgave");
  const response = await leggTilbakeOppgave(request, oppgaveId);
  console.timeEnd("legg-tilbake-oppgave");

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  }

  const alert = getAlertMessage({ name: "legg-tilbake-oppgave", httpCode: response.status });
  return json(alert);
}
