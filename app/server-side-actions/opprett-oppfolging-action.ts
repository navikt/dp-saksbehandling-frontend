import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { opprettOppfolging } from "~/models/saksbehandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForNyOppfolgingSkjema } from "~/utils/validering.util";

import { components } from "../../openapi/saksbehandling-typer";

export async function opprettOppfolgingAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForNyOppfolgingSkjema());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const {
    personIdent,
    nyOppgaveTittel,
    nyOppgaveBeskrivelse,
    nyOppgaveEmneknagg,
    nyOppgaveFrist,
    nyOppgaveTildelSammeSaksbehandler,
  } = validertSkjema.data;

  const body: components["schemas"]["OpprettOppfolgingRequest"] = {
    personIdent,
    tittel: nyOppgaveTittel,
    beskrivelse: nyOppgaveBeskrivelse,
    aarsak: nyOppgaveEmneknagg,
    frist: nyOppgaveFrist ? formaterTilBackendDato(nyOppgaveFrist) : undefined,
    beholdOppgaven: nyOppgaveTildelSammeSaksbehandler,
  };

  const { data, error } = await opprettOppfolging(request, body);

  if (data) {
    return redirect(`/oppgave/${data.oppgaveId}/oppfolging/${data["oppfølgingId"]}`);
  }

  if (error) {
    return getHttpProblemAlert(error);
  }

  throw new Error(`Uhåndtert feil i opprettOppfolgingAction()`);
}
