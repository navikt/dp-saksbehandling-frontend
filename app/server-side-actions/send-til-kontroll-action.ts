import { ActionFunctionArgs, redirect } from "react-router";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { sendOppgaveTilKontroll } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function sendTilKontrollAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const behandlingId = formData.get("behandlingId") as string;
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(behandlingId, "behandlingId er påkrevd");

  const { error } = await sendOppgaveTilKontroll(request, params.oppgaveId);
  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave sendt til kontroll 👮",
  };

  const session = await getSession(request.headers.get("Cookie"));
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
