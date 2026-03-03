import { parseFormData, validationError } from "@rvf/react-router";

import { lagreMeldingOmVedtakUtvidetBeskrivelse } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForUtvidetBeskrivelse } from "~/utils/validering.util";

export async function lagreUtvidetBeskrivelseAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForUtvidetBeskrivelse());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, brevBlokkId, utvidetBeskrivelse } = validertSkjema.data;

  const { data, error } = await lagreMeldingOmVedtakUtvidetBeskrivelse(
    request,
    oppgaveId,
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
