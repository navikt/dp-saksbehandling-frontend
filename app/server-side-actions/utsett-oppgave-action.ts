import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { utsettOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringUtsettOppgave } from "~/utils/validering.util";

export async function utsettOppgaveAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringUtsettOppgave());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, utsettTilDato, aktivtOppgaveSok, beholdOppgave, paaVentAarsak } =
    validertSkjema.data;

  const { error } = await utsettOppgave(
    request,
    oppgaveId,
    utsettTilDato,
    beholdOppgave,
    paaVentAarsak,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave utsatt 📆",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/?${aktivtOppgaveSok}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
