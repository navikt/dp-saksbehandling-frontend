import { redirect } from "@remix-run/node";

import { IAlert } from "~/context/alert-context";
import { hentNesteOppgave } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { logger } from "~/utils/logger.utils";

export async function hentNesteOppgaveAction(request: Request, formData: FormData) {
  const aktivtOppgaveSok = formData.get("aktivtOppgaveSok") as string;

  if (aktivtOppgaveSok == null) {
    throw new Error("Mangler aktivt oppgave søk");
  }

  const { data, error, response } = await hentNesteOppgave(request, aktivtOppgaveSok);

  if (data) {
    if (data.tilstand === "UNDER_KONTROLL") {
      return redirect(`/oppgave/${data.oppgaveId}/kontroll`);
    }
    return redirect(`/oppgave/${data.oppgaveId}/behandle`);
  }

  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);
  let alert: IAlert;

  if (response.status === 404) {
    alert = {
      variant: "success",
      title: "Ingen flere oppgaver 🎉",
      body: "Alle oppgaver med dette søket er ferdig behandlet",
    };
  } else {
    alert = {
      variant: "error",
      title: error.title,
      body: error.detail,
      service: error.instance,
    };

    const session = await getSession(request.headers.get("Cookie"));
    session.flash("alert", alert);

    return redirect(`/`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
}
