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
    switch (nyesteOppgave.behandlingType) {
      case "RETT_TIL_DAGPENGER":
        if (nyesteOppgave.tilstand === "UNDER_KONTROLL") {
          return redirect(
            `/oppgave/${nyesteOppgave.oppgaveId}/dagpenger-rett/${nyesteOppgave.behandlingId}/kontroll`,
          );
        }
        if (nyesteOppgave.tilstand === "UNDER_BEHANDLING") {
          return redirect(
            `/oppgave/${nyesteOppgave.oppgaveId}/dagpenger-rett/${nyesteOppgave.behandlingId}/behandle`,
          );
        }
        return redirect(
          `/oppgave/${nyesteOppgave.oppgaveId}/dagpenger-rett/${nyesteOppgave.behandlingId}/se`,
        );

      case "KLAGE":
        return redirect(`/oppgave/${nyesteOppgave.oppgaveId}/klage/${nyesteOppgave.behandlingId}`);
    }
  } else {
    return validationError({ fieldErrors: { personIdent: "Fant ingen oppgaver for personen" } });
  }
}
