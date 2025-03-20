import { lagreNotat } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function lagreNotatAction(request: Request, formData: FormData) {
  const oppgaveId = formData.get("oppgave-id") as string;
  const notat = formData.get("notat") as string;

  if (notat == null) {
    throw new Error("Mangler notat");
  }

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const { data, error } = await lagreNotat(request, oppgaveId, notat);

  if (error) {
    return getHttpProblemAlert(error);
  }

  return data;
}
