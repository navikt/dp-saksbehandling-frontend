import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { lagreBrevVariant } from "~/models/melding-om-vedtak.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForMeldingOmVedtakBrevVariantSkjema } from "~/utils/validering.util";

export async function lagreBrevVariantAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForMeldingOmVedtakBrevVariantSkjema(),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, brevVariant } = validertSkjema.data;

  const { response, error } = await lagreBrevVariant(request, behandlingId, brevVariant);

  if (error) {
    return getHttpProblemAlert(error);
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
