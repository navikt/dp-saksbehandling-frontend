import { json, redirect } from "@remix-run/node";

import { leggTilbakeOppgave } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function leggTilbakeOppgaveAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await leggTilbakeOppgave(request, oppgaveId);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = getAlertMessage({ name: "legg-tilbake-oppgave", httpCode: response.status });
  session.flash("alert", alert);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return json(alert);
  }

  return redirect(`/`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
