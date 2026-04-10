import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { ferdigstillGenerellOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import {
  hentValideringForFerdigstillGenerellOppgave,
  NyBehandlingType,
} from "~/utils/validering.util";

export async function ferdigstillGenerellOppgaveAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForFerdigstillGenerellOppgave(false),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const body: components["schemas"]["FerdigstillGenerellOppgaveRequest"] = {
    sakId: validertSkjema.data.sakId || undefined,
    behandlingsvariant:
      validertSkjema.data.behandlingsvariant === "INGEN"
        ? undefined
        : validertSkjema.data.behandlingsvariant,
    vurdering: validertSkjema.data.vurdering,
  };

  const { error } = await ferdigstillGenerellOppgave(
    request,
    validertSkjema.data.oppgaveId,
    body,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: hentTekstForFerdigstilling(validertSkjema.data.behandlingsvariant),
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/oppgave/${params.oppgaveId}/fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

function hentTekstForFerdigstilling(nyBehandlingType: NyBehandlingType) {
  switch (nyBehandlingType) {
    case "RETT_TIL_DAGPENGER_MANUELL":
      return "Oppgave ferdigstilt, ny behandling opprettet ✅";
    case "RETT_TIL_DAGPENGER_REVURDERING":
      return "Oppgave ferdigstilt, ny revurdering opprettet ✅";
    case "KLAGE":
      return "Oppgave ferdigstilt, ny klage opprettet ✅";
    case "INGEN":
      return "Oppgave ferdigstilt ✅";
  }
}
