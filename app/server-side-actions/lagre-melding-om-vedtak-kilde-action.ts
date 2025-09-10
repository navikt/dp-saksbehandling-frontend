import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { lagreMeldingOmVedtak } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForMeldingOmVedtakKildeSkjema } from "~/utils/validering.util";

export async function lagreMeldingOmVedtakKildeAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(
    formData,
    hentValideringForMeldingOmVedtakKildeSkjema(),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, meldingOmVedtakKilde } = validertSkjema.data;

  const { response, error } = await lagreMeldingOmVedtak(request, oppgaveId, meldingOmVedtakKilde);

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (response.status == 204) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Kilde for melding om vedtak lagret",
    };
    return successAlert;
  }

  throw new Error(`Uhåndtert feil i lagreMeldingOmVedtakKildeAction(): ${response.status}`);
}
