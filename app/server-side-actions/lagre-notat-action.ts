import { json } from "@remix-run/node";

import { lagreNotat } from "~/models/oppgave.server";

export async function lagreNotatAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgave-id") as string;
  const notat = formData.get("notat") as string;

  if (notat == null) {
    throw new Error("Mangler notat");
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await lagreNotat(request, oppgaveId, notat);

  return json(response);
}
