import { redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { hentNesteOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function hentNesteOppgaveAction(request: Request, formData: FormData) {
  const aktivtOppgaveSok = formData.get("aktivtOppgaveSok") as string;

  if (aktivtOppgaveSok == null) {
    throw new Error("Mangler aktivt oppgave søk");
  }

  const { data, error, response } = await hentNesteOppgave(request, aktivtOppgaveSok);

  if (data) {
    switch (data.behandlingType) {
      case "RETT_TIL_DAGPENGER":
        if (data.tilstand === "UNDER_KONTROLL") {
          return redirect(
            `/oppgave/${data.oppgaveId}/dagpenger-rett/${data.behandlingId}/behandle/begrunnelse`,
          );
        }

        return redirect(`/oppgave/${data.oppgaveId}/dagpenger-rett/${data.behandlingId}/behandle`);

      case "KLAGE":
        return redirect(`/oppgave/${data.oppgaveId}/klage/${data.behandlingId}`);
    }
  }

  let alert: IAlert = {
    variant: "error",
    title: `${response.status} ${response.statusText}`,
  };

  if (error) {
    if (error.status === 404) {
      alert = {
        variant: "success",
        title: "Ingen flere oppgaver 🎉",
        body: "Alle oppgaver med dette søket er ferdig behandlet",
      };
    } else {
      alert = getHttpProblemAlert(error);
    }
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", alert);

  return redirect(`/?${aktivtOppgaveSok}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
