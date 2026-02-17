import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { rekjorBehandling } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForRekjørBehandling } from "~/utils/validering.util";

export async function rekjorBehandlingAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForRekjørBehandling());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, ident } = validertSkjema.data;

  const { error } = await rekjorBehandling(request, behandlingId, ident, []);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Behandling er kjørt på nytt",
  };

  return successAlert;
}
