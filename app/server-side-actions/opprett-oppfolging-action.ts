import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { opprettOppfolging } from "~/models/saksbehandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getErrorAlert } from "~/utils/error-response.utils";
import { hentValideringForNyOppfolgingSkjema } from "~/utils/validering.util";

import { components } from "../../openapi/saksbehandling-typer";

export async function opprettOppfolgingAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForNyOppfolgingSkjema());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { personIdent, personUuid, tittel, beskrivelse, årsak, frist, tildelSammeSaksbehandler } =
    validertSkjema.data;

  const body: components["schemas"]["OpprettOppfolgingRequest"] = {
    personIdent,
    tittel,
    beskrivelse,
    aarsak: årsak,
    frist: frist ? formaterTilBackendDato(frist) : undefined,
    beholdOppgaven: tildelSammeSaksbehandler === true,
  };

  const { data, error, response } = await opprettOppfolging(request, body);

  if (data) {
    return redirect(`/person/${personUuid}/oversikt`);
  }

  if (error) {
    return getErrorAlert(error, response);
  }

  throw new Error(`Uhåndtert feil i opprettOppfolgingAction()`);
}
