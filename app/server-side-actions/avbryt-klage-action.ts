import { parseFormData, validationError } from "@rvf/react-router";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { avbrytKlage } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringAvbrytKlage } from "~/utils/validering.util";

export async function avbrytKlageAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringAvbrytKlage());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, årsak } = validertSkjema.data;
  const { error } = await avbrytKlage(request, behandlingId, årsak);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Klage avbrutt",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
