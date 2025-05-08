import { ActionFunctionArgs, redirect } from "react-router";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { ferdigstillOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function fattVedtakAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const behandlingId = formData.get("behandlingId") as string;
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(behandlingId, "behandlingId er påkrevd");
  const session = await getSession(request.headers.get("Cookie"));

  const { error } = await ferdigstillOppgave(request, params.oppgaveId);
  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgaven er ferdig behandlet og utsending av melding om vedtak har startet",
  };

  session.flash("alert", successAlert);
  return redirect(
    `/oppgave/${params.oppgaveId}/dagpenger-rett/${behandlingId}/se/fullfort-oppgave`,
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}
