import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { leggTilbakeOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.server";

export async function leggTilbakeOppgaveAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

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
    return redirect(`/`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return successAlert;
}
