import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { utsettOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import { getAlertMessage } from "~/utils/alert-message.utils";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;
  const utsettTilDato = formData.get("utsettTilDato") as string;
  const beholdOppgave = formData.has("beholdOppgave");

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await utsettOppgave(request, oppgaveId, utsettTilDato, beholdOppgave);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  }

  const alert = getAlertMessage({ name: "utsett-oppgave", httpCode: response.status });
  return json(alert);
}
