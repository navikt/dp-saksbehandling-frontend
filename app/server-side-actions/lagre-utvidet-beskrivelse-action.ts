import { parseFormData, validationError } from "@rvf/react-router";

import { lagreUtvidetBeskrivelse } from "~/models/melding-om-vedtak.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForUtvidetBeskrivelse } from "~/utils/validering.util";

export async function lagreUtvidetBeskrivelseAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForUtvidetBeskrivelse());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, brevBlokkId, utvidetBeskrivelse } = validertSkjema.data;

  const { data, error } = await lagreUtvidetBeskrivelse(
    request,
    behandlingId,
    brevBlokkId,
    utvidetBeskrivelse,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (data) {
    return data;
  }

  throw new Error(`Uhåndtert feil i lagreUtvidetBeskrivelseAction()`);
}
