import { parseFormData, validationError } from "@rvf/react-router";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { returnerOppgaveTilSaksbehandler } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForReturnerTilSaksbehandler } from "~/utils/validering.util";

export async function returnerOppgaveTilSaksbehandlerAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForReturnerTilSaksbehandler());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId } = validertSkjema.data;
  const { error } = await returnerOppgaveTilSaksbehandler(request, oppgaveId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave sendt tilbake til saksbehandler ↩️",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
