import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { opprettKlage } from "~/models/saksbehandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForNyKlageSkjema } from "~/utils/validering.util";

import { components } from "../../openapi/saksbehandling-typer";

export async function opprettKlageAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForNyKlageSkjema());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { opprettetDato, journalpostId, sakId, personIdent } = validertSkjema.data;
  const klageBody: components["schemas"]["OpprettKlage"] = {
    opprettet: formaterTilBackendDato(opprettetDato, true),
    journalpostId,
    sakId,
    personIdent: {
      ident: personIdent,
    },
  };

  const { data, error } = await opprettKlage(request, klageBody);

  if (data) {
    return redirect(`/oppgave/${data.oppgaveId}/klage/${data.behandlingId}`);
  }

  if (error) {
    return getHttpProblemAlert(error);
  }

  throw new Error(`Uhåndtert feil i opprettKlageAction()`);
}
