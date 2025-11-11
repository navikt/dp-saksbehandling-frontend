import { parseFormData, validationError } from "@rvf/react-router";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { leggTilbakeOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForLeggTilbakeOppgave } from "~/utils/validering.util";

export async function leggTilbakeOppgaveAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForLeggTilbakeOppgave());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, aktivtOppgaveSok } = validertSkjema.data;
  const { error } = await leggTilbakeOppgave(request, oppgaveId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave lagt tilbake i køen 📥",
  };

  const session = await getSession(request.headers.get("Cookie"));

  // Redirect til oppgavelisten hvis oppgaven som ble lagt tilbake er den samme som vises for saksbehandler
  if (params?.oppgaveId === oppgaveId) {
    session.flash("alert", successAlert);
    return redirect(`/?${aktivtOppgaveSok}`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return successAlert;
}
