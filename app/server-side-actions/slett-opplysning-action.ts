import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { slettOpplysning } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForSlettOpplysningSkjema } from "~/utils/validering.util";

export async function slettOpplysningAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForSlettOpplysningSkjema());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, opplysningId } = validertSkjema.data;
  const { data, error } = await slettOpplysning(request, behandlingId, opplysningId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (data) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Opplysning slettet",
    };

    return successAlert;
  }

  throw new Error(`Uhåndtert feil i slettOpplysningAction()`);
}
