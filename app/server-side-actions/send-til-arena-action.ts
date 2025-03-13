import { ActionFunctionArgs, json, redirect } from "@remix-run/node";

import { IAlert } from "~/context/alert-context";
import { avbrytBehandling } from "~/models/behandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.server";

export async function sendTilArenaAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const behandlingId = formData.get("behandlingId") as string;
  const personIdent = formData.get("personIdent") as string;

  const { error } = await avbrytBehandling(request, behandlingId, personIdent);

  if (error) {
    return json(getHttpProblemAlert(error));
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Behandling sendt til arena for videre behandling",
  };
  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/se/neste-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
