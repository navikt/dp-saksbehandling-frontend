import { ActionFunctionArgs, redirect } from "react-router";

import { avbrytBehandling } from "~/models/behandling.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function sendTilArenaAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const behandlingId = formData.get("behandlingId") as string;
  const personIdent = formData.get("personIdent") as string;

  const response = await avbrytBehandling(request, behandlingId, personIdent);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = getAlertMessage({ name: "send-til-arena", httpCode: response.status });
  session.flash("alert", alert);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return alert;
  }

  return redirect(`/oppgave/${params.oppgaveId}/se/neste-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
