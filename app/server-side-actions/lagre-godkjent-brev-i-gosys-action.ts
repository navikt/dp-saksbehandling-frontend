import { components } from "openapi/saksbehandling-typer";

import { IAlert } from "~/context/alert-context";
import { lagreGodkjentBrevIGosys } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function lagreGodkjentBrevIGosysAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgave-id") as string;
  const godkjentBrev = (formData.get("godkjent-brev") as string) == "on";
  console.log("godkjentBrev", godkjentBrev);

  if (godkjentBrev == null) {
    throw new Error("Mangler godkjentbrev");
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const kontrollert: components["schemas"]["KontrollertBrev"] = godkjentBrev ? "JA" : "NEI";

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
