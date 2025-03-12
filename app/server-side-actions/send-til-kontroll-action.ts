import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { sendOppgaveTilKontroll } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.server";

export async function sendTilKontrollAction(
  request: Request,
  params: ActionFunctionArgs["params"],
) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const { error } = await sendOppgaveTilKontroll(request, params.oppgaveId);
  if (error) {
    return json(getHttpProblemAlert(error));
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave sendt til kontroll 👮",
  };
  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/se/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
