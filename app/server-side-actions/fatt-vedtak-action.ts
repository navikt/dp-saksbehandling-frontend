import { parseFormData, validationError } from "@rvf/react-router";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { ferdigstillOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForFattVedtak } from "~/utils/validering.util";

export async function fattVedtakAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForFattVedtak());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId } = validertSkjema.data;
  const { error } = await ferdigstillOppgave(request, oppgaveId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const session = await getSession(request.headers.get("Cookie"));
  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgaven er ferdig behandlet",
  };

  session.flash("alert", successAlert);
  return redirect(`/oppgave/${params.oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
