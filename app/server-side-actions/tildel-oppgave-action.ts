import { redirect } from "react-router";

import { tildelOppgave } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.server";

export async function tildelOppgaveAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const { data, error } = await tildelOppgave(request, oppgaveId);

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (data.nyTilstand === "UNDER_BEHANDLING") {
    return redirect(`/oppgave/${oppgaveId}/behandle`);
  }

  if (data.nyTilstand === "UNDER_KONTROLL") {
    return redirect(`/oppgave/${oppgaveId}/kontroll`);
  }

  throw new Error(
    `Oppgave med id ${oppgaveId} har uventet tilstand. Forventet tilstand er UNDER_BEHANDLING eller UNDER_KONTROLL, fikk ${data}`,
  );
}
