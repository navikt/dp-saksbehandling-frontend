import { validationError } from "@rvf/remix";
import { hentOppgaverForPerson } from "~/models/person.server";
import { redirect } from "@remix-run/node";
import { hentValideringForPersonIdent } from "~/utils/validering.util";

export async function sokPerson(request: Request, formData: FormData) {
  const result = await hentValideringForPersonIdent().validate(formData);

  if (result.error) {
    return validationError(result.error, result.submittedData);
  }

  const { personIdent } = result.data;

  const oppgaver = await hentOppgaverForPerson(request, personIdent);
  const sisteOppgave = oppgaver[0];

  if (sisteOppgave) {
    const sisteOppgaveTilstand = sisteOppgave?.tilstand;
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

    if (oppgaver.length > 0) {
      return redirect(`/oppgave/${sisteOppgave.oppgaveId}/${view}`);
    }
  } else {
    return validationError({ fieldErrors: { personIdent: "Fant ingen oppgaver for personen" } });
  }
}
