import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { tildelOppgave } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForTildelOppgave } from "~/utils/validering.util";

export async function tildelOppgaveAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForTildelOppgave());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, behandlingId } = validertSkjema.data;
  const { data, error } = await tildelOppgave(request, oppgaveId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  switch (data.behandlingType) {
    case "RETT_TIL_DAGPENGER":
      if (data.nyTilstand === "UNDER_BEHANDLING") {
        return redirect(`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle`);
      }

      if (data.nyTilstand === "UNDER_KONTROLL") {
        return redirect(`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/vedtak`);
      }
      break;

    case "KLAGE":
      return redirect(`/oppgave/${oppgaveId}/klage/${behandlingId}`);
  }

  throw new Error(`Uhåndtert feil i v2TildelOppgaveAction()`);
}
