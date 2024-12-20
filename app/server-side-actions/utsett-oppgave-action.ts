import { redirect } from "react-router";

import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { utsettOppgave } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function utsettOppgaveAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgaveId") as string;
  const utsettTilDato = formData.get("utsettTilDato") as string;
  const beholdOppgave = formData.has("beholdOppgave");

  if (!utsettTilDato) {
    const error: IFormValidationError = {
      field: "utsettTilDato",
      message: "Du må oppgi en dato",
    };

    return error;
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await utsettOppgave(request, oppgaveId, utsettTilDato, beholdOppgave);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = getAlertMessage({ name: "utsett-oppgave", httpCode: response.status });
  session.flash("alert", alert);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return alert;
  }

  return redirect(`/`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
