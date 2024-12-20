import { ActionFunctionArgs, redirect } from "react-router";

import { leggTilbakeOppgave } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function leggTilbakeOppgaveAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await leggTilbakeOppgave(request, oppgaveId);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = getAlertMessage({ name: "legg-tilbake-oppgave", httpCode: response.status });

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return alert;
  }

  // Redirect til oppgavelisten hvis oppgaven som ble lagt tilbake er den samme som vises for saksbehandler
  if (params?.oppgaveId === oppgaveId) {
    session.flash("alert", alert);
    return redirect(`/`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return alert;
}
