import { redirect } from "@remix-run/node";

import { hentNesteOppgave, type IOppgave } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function hentNesteOppgaveAction(request: Request, formData: FormData) {
  const aktivtOppgaveSok = formData.get("aktivtOppgaveSok") as string;

  if (aktivtOppgaveSok == null) {
    throw new Error("Mangler aktivt oppgave søk");
  }

  const response = await hentNesteOppgave(request, aktivtOppgaveSok);
  if (response.ok) {
    const oppgave = (await response.json()) as IOppgave;
    if (oppgave.tilstand === "UNDER_KONTROLL") {
      return redirect(`/oppgave/${oppgave.oppgaveId}/kontroll`);
    }
    return redirect(`/oppgave/${oppgave.oppgaveId}/behandle`);
  }

  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  const alert = getAlertMessage({ name: "hent-neste-oppgave", httpCode: response.status });

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", alert);

  return redirect(`/`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
