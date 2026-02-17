import { parseFormData, validationError } from "@rvf/react-router";

import { lagreNotat } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForBeslutterNotat } from "~/utils/validering.util";

export async function lagreNotatAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForBeslutterNotat());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, notat } = validertSkjema.data;
  const { data, error } = await lagreNotat(request, oppgaveId, notat);

  if (error) {
    return getHttpProblemAlert(error);
  }

  return data;
}
