import { redirect } from "react-router";

import { tildelOppgave } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function tildelOppgaveAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgaveId") as string;
  const behandlingId = formData.get("behandlingId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  if (!behandlingId) {
    throw new Error("Mangler behandlingId");
  }

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
        return redirect(`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/kontroll`);
      }
      break;

    case "KLAGE":
      return redirect(`/oppgave/${oppgaveId}/klage/${behandlingId}`);
  }

  throw new Error(
    `Oppgave med id ${oppgaveId} har uventet tilstand. Forventet tilstand er UNDER_BEHANDLING eller UNDER_KONTROLL, fikk ${data}`,
  );
}
