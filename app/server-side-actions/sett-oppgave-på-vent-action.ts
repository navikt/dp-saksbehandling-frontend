import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { utsettOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringSettOppgavePåVent } from "~/utils/validering.util";

export async function settOppgavePåVentAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringSettOppgavePåVent());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, utsettTilDato, beholdOppgave, paaVentAarsak } = validertSkjema.data;

  const { error } = await utsettOppgave(
    request,
    oppgaveId,
    formaterTilBackendDato(utsettTilDato),
    beholdOppgave,
    paaVentAarsak,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: `Oppgave satt på vent til ${utsettTilDato} 📆`,
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
