import { redirect } from "react-router";

import { IAlert } from "~/context/alert-context";
import { hentOppgavelisteSti, type OppgavelisteKilde } from "~/hooks/useAktivtOppgaveSok";
import { hentNesteOppgave } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";
import { getErrorAlert } from "~/utils/error-response.utils";

export async function hentNesteOppgaveAction(request: Request, formData: FormData) {
  const aktivtOppgaveSok = formData.get("aktivtOppgaveSok") as string;
  const kildeVerdi = formData.get("kilde");

  if (aktivtOppgaveSok == null) {
    throw new Error("Mangler aktivt oppgave søk");
  }

  const kilde: OppgavelisteKilde | undefined =
    kildeVerdi === "kontroll" || kildeVerdi === "feilutbetaling" ? kildeVerdi : undefined;

  const params = new URLSearchParams(aktivtOppgaveSok);
  params.delete("side");
  params.delete("antallOppgaver");
  const aktivtOppgaveSokUtenPaginering = params.toString();

  const { data, error, response } = await hentNesteOppgave(request, aktivtOppgaveSokUtenPaginering);

  if (data) {
    switch (data.behandlingType) {
      case "RETT_TIL_DAGPENGER":
        if (data.tilstand === "UNDER_KONTROLL") {
          return redirect(`/oppgave/${data.oppgaveId}/dagpenger-rett/${data.behandlingId}/vedtak`);
        }

        return redirect(`/oppgave/${data.oppgaveId}/dagpenger-rett/${data.behandlingId}/behandle`);

      case "KLAGE":
        return redirect(`/oppgave/${data.oppgaveId}/klage/${data.behandlingId}`);

      case "TILBAKEKREVING":
        return redirect(`/oppgave/${data.oppgaveId}/tilbakekreving/${data.behandlingId}`);
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
      alert = getErrorAlert(error, response);
    }
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", alert);

  return redirect(`${hentOppgavelisteSti(kilde)}?${aktivtOppgaveSok}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
