import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import type { IOppgave } from "~/models/oppgave.server";
import { hentNesteOppgave } from "~/models/oppgave.server";
import { handleErrorResponse } from "~/utils/error-response.server";
import type { IAlertResponse } from "~/context/alert-context";

export async function action({ request }: ActionFunctionArgs) {
  const oppgaveResponse = await hentNesteOppgave(request);

  if (oppgaveResponse.ok) {
    const oppgave = (await oppgaveResponse.json()) as IOppgave;
    return redirect(`/oppgave/${oppgave.oppgaveId}/behandle`);
  }

  if (!oppgaveResponse.ok && oppgaveResponse.status === 404) {
    return json<IAlertResponse>({
      alert: true,
      httpCode: oppgaveResponse.status,
      message: oppgaveResponse.statusText,
    });
  }

  handleErrorResponse(oppgaveResponse);
}
