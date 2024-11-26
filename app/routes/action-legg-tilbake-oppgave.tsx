import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { leggTilbakeOppgave } from "~/models/oppgave.server";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await leggTilbakeOppgave(request, oppgaveId);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  }

  const alert = getAlertMessage({ name: "legg-tilbake-oppgave", httpCode: response.status });
  return json(alert);
}
