import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { lagreMeldingOmVedtakBrevVariant } from "~/models/saksbehandling.server";
import { getErrorAlert } from "~/utils/error-response.utils";
import { hentValideringForMeldingOmVedtakBrevVariantSkjema } from "~/utils/validering.util";

export async function lagreBrevVariantAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForMeldingOmVedtakBrevVariantSkjema(),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, brevVariant } = validertSkjema.data;

  const { response, error } = await lagreMeldingOmVedtakBrevVariant(
    request,
    oppgaveId,
    brevVariant,
  );

  if (error) {
    return getErrorAlert(error, response);
  }

  if (response.status == 204) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Brevvariant lagret",
    };
    return successAlert;
  }

  throw new Error(`Uhåndtert feil i lagreBrevVariantAction(): ${response.status}`);
}
