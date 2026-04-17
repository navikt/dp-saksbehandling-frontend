import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { opprettGenerellOppgave } from "~/models/saksbehandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForNyGenerellOppgaveSkjema } from "~/utils/validering.util";

import { components } from "../../openapi/saksbehandling-typer";

export async function opprettGenerellOppgaveAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForNyGenerellOppgaveSkjema());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { personIdent, tittel, beskrivelse, aarsak, frist, beholdOppgaven } = validertSkjema.data;
  const body: components["schemas"]["OpprettGenerellOppgaveRequest"] = {
    personIdent,
    tittel,
    beskrivelse,
    aarsak,
    frist: frist ? formaterTilBackendDato(frist) : undefined,
    beholdOppgaven: beholdOppgaven === "on",
  };

  const { data, error } = await opprettGenerellOppgave(request, body);

  if (data) {
    return redirect(`/oppgave/${data.oppgaveId}/generell-oppgave/${data.generellOppgaveId}`);
  }

  if (error) {
    return getHttpProblemAlert(error);
  }

  throw new Error(`Uhåndtert feil i opprettGenerellOppgaveAction()`);
}
