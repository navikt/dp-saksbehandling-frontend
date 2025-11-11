import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { slettPeriode } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForSlettPeriode } from "~/utils/validering.util";

export async function slettPeriodeAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForSlettPeriode());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, periodeId } = validertSkjema.data;
  const { data, error } = await slettPeriode(request, behandlingId, periodeId);

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
