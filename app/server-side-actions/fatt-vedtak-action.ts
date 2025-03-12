import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { ferdigstillOppgave, ferdigstillOppgaveMedArenaBrev } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.server";

export async function fattVedtakAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const brevIArena = (formData.get("send-brev-i-arena") as string) === "true";
  const session = await getSession(request.headers.get("Cookie"));

  if (brevIArena) {
    const { error } = await ferdigstillOppgaveMedArenaBrev(request, params.oppgaveId);
    if (error) {
      return json(getHttpProblemAlert(error));
    }
  } else {
    const { error } = await ferdigstillOppgave(request, params.oppgaveId);
    if (error) {
      return json(getHttpProblemAlert(error));
    }
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgaven er ferdig behandlet og utsending av melding om vedtak har startet",
  };

  session.flash("alert", successAlert);
  return redirect(`/oppgave/${params.oppgaveId}/se/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
