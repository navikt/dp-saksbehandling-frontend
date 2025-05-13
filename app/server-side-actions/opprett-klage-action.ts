import { redirect } from "react-router";

import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { opprettKlage } from "~/models/saksbehandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

import { components } from "../../openapi/saksbehandling-typer";

export async function opprettKlageAction(request: Request, formData: FormData) {
  const opprettetDato = formData.get("opprettetDato") as string;
  const journalpostId = formData.get("journalpostId") as string;
  const sakId = formData.get("sakId") as string;
  const personIdent = formData.get("personIdent") as string;

  if (!opprettetDato) {
    const error: IFormValidationError = {
      field: "opprettetDato",
      message: "Du må oppgi en dato",
    };

    return error;
  }

  if (!journalpostId) {
    const error: IFormValidationError = {
      field: "journalpostId",
      message: "Du må skrive inn en journalpost ID",
    };

    return error;
  }

  if (!sakId) {
    const error: IFormValidationError = {
      field: "sakId",
      message: "Du må skrive inn en sak ID",
    };

    return error;
  }

  const klageBody: components["schemas"]["OpprettKlage"] = {
    opprettet: opprettetDato,
    journalpostId,
    sakId,
    personIdent: {
      ident: personIdent,
    },
  };

  console.log(klageBody);

  const { data, error } = await opprettKlage(request, klageBody);

  if (data) {
    return redirect(`/oppgave/${data.oppgaveId}/klage/${data.behandlingId}`);
  }

  if (error) {
    return getHttpProblemAlert(error);
  }

  throw new Error(`Uhåndtert feil i opprettKlageAction()`);
}
