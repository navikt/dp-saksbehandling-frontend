import { json, redirect } from "@remix-run/node";
import { validationError } from "@rvf/remix";

import { utsettOppgave } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";
import { hentValideringUtsettOppgave } from "~/utils/validering.util";

export async function utsettOppgaveAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgaveId") as string;
  const utsettTilDato = formData.get("utsettTilDato") as string;
  const paaVentAarsak = formData.get("paaVentAarsak") as string;
  const beholdOppgave = formData.has("beholdOppgave");

  const result = await hentValideringUtsettOppgave().validate(formData);

  if (result.error) {
    return validationError(result.error, result.submittedData);
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await utsettOppgave(
    request,
    oppgaveId,
    utsettTilDato,
    beholdOppgave,
    paaVentAarsak,
  );

  const session = await getSession(request.headers.get("Cookie"));
  const alert = getAlertMessage({ name: "utsett-oppgave", httpCode: response.status });
  session.flash("alert", alert);

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
    return json(alert);
  }

  return redirect(`/`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
