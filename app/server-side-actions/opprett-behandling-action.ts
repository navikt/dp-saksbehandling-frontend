import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { opprettBehandling } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForOpprettBehandling } from "~/utils/validering.util";

export async function opprettBehandlingAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForOpprettBehandling());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { personIdent, behandlingstype } = validertSkjema.data;
  const { data, error } = await opprettBehandling(request, personIdent, behandlingstype);

  if (data) {
    const successAlert: IAlert = {
      variant: "success",
      title: `Behandling med id ${data.behandlingId} opprettet`,
    };

    return successAlert;
  }

  if (error) {
    return getHttpProblemAlert(error);
  }

  throw new Error(`Uhåndtert feil i opprettBehandlingAction()`);
}
