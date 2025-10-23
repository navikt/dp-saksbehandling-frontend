import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { kvitterAvklaring } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForAvklaringSkjema } from "~/utils/validering.util";

export async function kvitterAvklaringAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForAvklaringSkjema());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, avklaringId, begrunnelse } = validertSkjema.data;
  const { error } = await kvitterAvklaring(request, behandlingId, avklaringId, begrunnelse);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Avklaring kvittert",
  };

  return successAlert;
}
