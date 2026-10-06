import { parseFormData, validationError } from "@rvf/react-router";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { sendOppgaveTilKontroll } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getErrorAlert } from "~/utils/error-response.utils";
import { hentValideringForSendTilKontroll } from "~/utils/validering.util";

export async function sendTilKontrollAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForSendTilKontroll());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, årsak } = validertSkjema.data;
  const { error, response } = await sendOppgaveTilKontroll(request, oppgaveId, årsak);

  if (error) {
    return getErrorAlert(error, response);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave sendt til kontroll 👮",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
