import { json, redirect } from "@remix-run/node";
import { validationError } from "@rvf/remix";

import { IAlert } from "~/context/alert-context";
import { utsettOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.server";
import { hentValideringUtsettOppgave } from "~/utils/validering.util";

import { components } from "../../openapi/saksbehandling-typer";

export async function utsettOppgaveAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgaveId") as string;
  const utsettTilDato = formData.get("utsettTilDato") as string;
  const beholdOppgave = formData.has("beholdOppgave");
  const paaVentAarsak = formData.get(
    "paaVentAarsak",
  ) as components["schemas"]["UtsettOppgaveAarsak"];

  const result = await hentValideringUtsettOppgave().validate(formData);

  if (result.error) {
    return validationError(result.error, result.submittedData);
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const { error } = await utsettOppgave(
    request,
    oppgaveId,
    utsettTilDato,
    beholdOppgave,
    paaVentAarsak,
  );

  if (error) {
    return json(getHttpProblemAlert(error));
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgave utsatt 📆",
  };
  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
