import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { tildelOppgave } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForTildelOppgave } from "~/utils/validering.util";

export async function v2TildelOppgaveAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForTildelOppgave());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId } = validertSkjema.data;
  const { data, error } = await tildelOppgave(request, oppgaveId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (data) {
    const successAlert: IAlert = {
      variant: "success",
      title: `Oppgave tildel, ny tilstand: ${data.nyTilstand}`,
    };

    return successAlert;
  }

  throw new Error(`Uhåndtert feil i v2TildelOppgaveAction()`);
}
