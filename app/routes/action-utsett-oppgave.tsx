import type { ActionFunctionArgs } from "@remix-run/node";
import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import type { IAlert } from "~/context/alert-context";
import { utsettOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import { getAlertMessage } from "~/utils/alert-message.utils";

export async function action({
  request,
}: ActionFunctionArgs): Promise<
  { type: "error"; error: IFormValidationError } | { type: "alert"; alert: IAlert }
> {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;
  const utsettTilDato = formData.get("utsettTilDato") as string;
  const beholdOppgave = formData.has("beholdOppgave");

  if (!utsettTilDato) {
    const error: IFormValidationError = {
      field: "utsettTilDato",
      message: "Du må oppgi en dato",
    };

    return { type: "error", error };
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await utsettOppgave(request, oppgaveId, utsettTilDato, beholdOppgave);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  }

  const alert = getAlertMessage({ name: "utsett-oppgave", httpCode: response.status });
  return { type: "alert", alert };
}
