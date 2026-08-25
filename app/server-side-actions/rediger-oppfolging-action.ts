import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { redigerOppfolging } from "~/models/saksbehandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForRedigerOppfolgingSkjema } from "~/utils/validering.util";

import { components } from "../../openapi/saksbehandling-typer";

export async function redigerOppfolgingAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForRedigerOppfolgingSkjema());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, tittel, beskrivelse, frist } = validertSkjema.data;

  const body: components["schemas"]["RedigerOppfolgingRequest"] = {
    tittel,
    beskrivelse,
    frist: frist ? formaterTilBackendDato(frist) : undefined,
  };

  const { error } = await redigerOppfolging(request, behandlingId, body);

  if (error) {
    return getHttpProblemAlert(error);
  }

  const successAlert: IAlert = {
    variant: "success",
    title: "Oppgaven er oppdatert",
  };
  return successAlert;
}
