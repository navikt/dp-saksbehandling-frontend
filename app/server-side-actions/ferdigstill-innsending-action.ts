import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { ActionFunctionArgs, redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { ferdigstillInnsending } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForFerdigstillInnsending, NyBehandlingType } from "~/utils/validering.util";

export async function ferdigstillInnsendingAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForFerdigstillInnsending(false),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const body: components["schemas"]["FerdigstillInnsendingRequest"] = {
    sakId: validertSkjema.data.sakId,
    behandlingType:
      validertSkjema.data.behandlingType === "INGEN"
        ? undefined
        : validertSkjema.data.behandlingType,
    vurdering: validertSkjema.data.vurdering,
  };

  const { error } = await ferdigstillInnsending(request, body, validertSkjema.data.behandlingId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: hentTekstForFerdigstilling(validertSkjema.data.behandlingType),
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
    case "RETT_TIL_DAGPENGER":
      return "Innsending ferdigstilt, ny behandling opprettet ✅";
    case "KLAGE":
      return "Innsending ferdigstilt, ny klage opprettet ✅";
    case "INGEN":
      return "Innsending ferdigstilt ✅";
  }
}
