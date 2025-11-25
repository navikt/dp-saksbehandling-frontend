import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { components } from "@/openapi/saksbehandling-typer";
import { IAlert } from "~/context/alert-context";
import { ferdigstillInnsending } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForFerdigstillInnsending } from "~/utils/validering.util";

export async function ferdigstillInnsendingAction(
  request: Request,
  formData: FormData,
) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForFerdigstillInnsending(),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const body: components["schemas"]["FerdigstillInnsendingRequest"] = {
    sakId: validertSkjema.data.sakId,
    behandlingType: validertSkjema.data.behandlingType === "INGEN"
      ? undefined
      : validertSkjema.data.behandlingType,
    vurdering: validertSkjema.data.vurdering,
  };

  // TODO: vi burde vel få tilbake et eller annet fra backend, eller?
  const { error } = await ferdigstillInnsending(
    request,
    body,
    validertSkjema.data.behandlingId,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  // TODO: hva gjør vi her egentlig? skal vi redirecte til den opprettede behandlingen, eller hjem til start, eller hva?
  const successAlert: IAlert = {
    variant: "success",
    title: "innsending ferdigstilt ✅",
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", successAlert);

  return redirect(`/?${validertSkjema.submittedData.aktivtOppgaveSok}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
