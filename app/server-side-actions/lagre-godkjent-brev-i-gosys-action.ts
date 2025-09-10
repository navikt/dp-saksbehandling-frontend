import { parseFormData, validationError } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";

import { IAlert } from "~/context/alert-context";
import { lagreGodkjentBrevIGosys } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForGodkjentBrevSkjema } from "~/utils/validering.util";

export async function lagreGodkjentBrevIGosysAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForGodkjentBrevSkjema());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { oppgaveId, godkjentBrev } = validertSkjema.data;

  const kontrollert: components["schemas"]["KontrollertBrev"] =
    godkjentBrev === "on" ? "JA" : "NEI";

  const { response, error } = await lagreGodkjentBrevIGosys(request, oppgaveId, kontrollert);

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (response.status == 204) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Godkjent brev lagret",
    };
    return successAlert;
  }

  throw new Error(`Uhåndtert feil i lagreGodkjentBrevIGosysAction(): ${response.status}`);
}
