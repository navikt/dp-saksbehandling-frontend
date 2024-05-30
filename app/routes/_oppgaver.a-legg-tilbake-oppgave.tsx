import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { leggTilbakeOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import type { IAlertResponse } from "~/context/alert-context";

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await leggTilbakeOppgave(request, oppgaveId);
  if (response.ok) {
    return json<IAlertResponse>({
      alert: true,
      httpCode: response.status,
      message: "Oppgave lagt tilbake i køen",
    });
  }

  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

  return json<IAlertResponse>({
    alert: true,
    httpCode: response.status,
    message: response.statusText,
  });
}
