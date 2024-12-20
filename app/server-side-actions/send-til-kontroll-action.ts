import { ActionFunctionArgs, redirect } from "react-router";
import invariant from "tiny-invariant";

import { sendOppgaveTilKontroll } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function sendTilKontrollAction(
  request: Request,
  params: ActionFunctionArgs["params"],
) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const response = await sendOppgaveTilKontroll(request, params.oppgaveId);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = getAlertMessage({ name: "send-til-kontroll", httpCode: response.status });

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return alert;
  }

  session.flash("alert", alert);
  return redirect(`/oppgave/${params.oppgaveId}/se/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
