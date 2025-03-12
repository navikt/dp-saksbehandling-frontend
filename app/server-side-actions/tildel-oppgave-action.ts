import { json, redirect } from "@remix-run/node";

import { tildelOppgave } from "~/models/oppgave.server";
import { getHttpProblemAlert } from "~/utils/error-response.server";

export async function tildelOppgaveAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const { data, error } = await tildelOppgave(request, oppgaveId);

  if (error) {
    return json(getHttpProblemAlert(error));
  }

  // @ts-expect-error TODO: Type skal endres i DP-saksbehandling
  if (data.nyTilstand === "UNDER_BEHANDLING") {
    return redirect(`/oppgave/${oppgaveId}/behandle`);
  }

  // @ts-expect-error TODO: Type skal endres i DP-saksbehandling
  if (data.nyTilstand === "UNDER_KONTROLL") {
    return redirect(`/oppgave/${oppgaveId}/kontroll`);
  }

  throw new Error(
    `Oppgave med id ${oppgaveId} har uventet tilstand. Forventet tilstand er UNDER_BEHANDLING eller UNDER_KONTROLL, fikk ${data}`,
  );
}
