import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { sendBrev } from "~/models/oppgave.server";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;
  const brevHtml = formData.get("brevHtml") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await sendBrev(request, oppgaveId, brevHtml);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  }

  const alert = getAlertMessage({ name: "send-brev", httpCode: response.status });
  return json(alert);
}
