import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/server-runtime/dist/routeModules";
import invariant from "tiny-invariant";

import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { IAlert } from "~/context/alert-context";
import { returnerOppgaveTilSaksbehandler } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.server";

export async function returnerOppgaveTilSaksbehandlerAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const notat = formData.get("notat") as string;

  if (!notat) {
    const error: IFormValidationError = {
      field: "notat",
      message: "Du må skrive en begrunnelse for å returnere oppgaven til saksbehandler.",
    };

    return json(error);
  }

  const { error } = await returnerOppgaveTilSaksbehandler(request, params.oppgaveId);

  if (error) {
    return json(getHttpProblemAlert(error));
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave sendt tilbake til saksbehandler ↩️",
  };
  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/se/neste-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
