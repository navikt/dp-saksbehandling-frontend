import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { avbrytOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringAvbrytOppgave } from "~/utils/validering.util";

export async function avbrytOppgaveAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringAvbrytOppgave());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, avbrytAarsak } = validertSkjema.data;
  const { error } = await avbrytOppgave(request, oppgaveId, avbrytAarsak);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave avbrutt",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${oppgaveId}/dagpenger-rett/neste-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
