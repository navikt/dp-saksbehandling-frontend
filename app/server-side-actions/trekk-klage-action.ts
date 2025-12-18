import { ActionFunctionArgs, redirect } from "react-router";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { trekkKlage } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function trekkKlageAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const behandlingId = formData.get("behandlingId") as string;
  invariant(behandlingId, "behandlingId er påkrevd");

  const { error } = await trekkKlage(request, behandlingId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "klage trukket ✅",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
