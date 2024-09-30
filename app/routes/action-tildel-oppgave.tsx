import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import type { IOppgave } from "~/models/oppgave.server";
import { tildelOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import { handleTildelOppgaveMessages } from "~/utils/alert-message.utils";
import type { IHttpProblem } from "~/utils/types";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;

  if (!oppgaveId) {
    throw new Error("Mangler oppgaveId");
  }

  const response = await tildelOppgave(request, oppgaveId);

  if (response.ok) {
    const oppgave = (await response.json()) as IOppgave;
    return redirect(`/oppgave/${oppgave.oppgaveId}/behandle`);
  }

  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

  const httpProblem: IHttpProblem = await response.json();
  if (httpProblem.status === 403) {
    const ikkeTilgangVariant = httpProblem.type.split(":")[3];
    const alert = handleTildelOppgaveMessages(httpProblem.status, ikkeTilgangVariant);
    return json(alert);
  }

  const alert = handleTildelOppgaveMessages(httpProblem.status);
  return json(alert);
}
