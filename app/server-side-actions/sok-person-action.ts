import { validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { hentOppgaverForPerson } from "~/models/saksbehandling.server";
import { hentValideringForPersonIdent } from "~/utils/validering.util";

export async function sokPersonAction(request: Request, formData: FormData) {
  const result = await hentValideringForPersonIdent().validate(formData);

  if (result.error) {
    return validationError(result.error, result.submittedData);
  }

  const { personIdent } = result.data;

  const { data } = await hentOppgaverForPerson(request, personIdent);
  const nyesteOppgave = data?.[0];

  if (nyesteOppgave) {
    const sisteOppgaveTilstand = nyesteOppgave.tilstand;
    let view = "se";
    switch (sisteOppgaveTilstand) {
      case "KLAR_TIL_BEHANDLING":
      case "UNDER_BEHANDLING":
        view = "behandle";
        break;
      case "UNDER_KONTROLL":
        view = "kontroll";
        break;
    }
    return redirect(`/oppgave/${nyesteOppgave.oppgaveId}/${view}`);
  } else {
    return validationError({ fieldErrors: { personIdent: "Fant ingen oppgaver for personen" } });
  }
}
