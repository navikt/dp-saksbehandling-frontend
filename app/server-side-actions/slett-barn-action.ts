import { parseFormData, validationError } from "@rvf/react-router";

import { components } from "@/openapi/soknad-orkestrator-typer";
import { IAlert } from "~/context/alert-context";
import { slettBarn } from "~/models/orkestrator-opplysning.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForSlettBarn } from "~/utils/validering.util";

export async function slettBarnAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForSlettBarn());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { soknadbarnId, barnId, behandlingId, begrunnelse } = validertSkjema.data;

  const requestBody: components["schemas"]["SlettBarnRequest"] = {
    behandlingId,
    begrunnelse,
  };

  const { error } = await slettBarn(request, soknadbarnId, barnId, requestBody);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Barnet er slettet",
  };

  return successAlert;
}
