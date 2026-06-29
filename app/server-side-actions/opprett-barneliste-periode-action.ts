import { parseFormData, validationError } from "@rvf/react-router";
import { redirect } from "react-router";

import { lagreOpplysning } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForNyBarneperiode } from "~/utils/validering.util";

export async function opprettBarnelistePeriodeAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForNyBarneperiode());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const {
    behandlingId,
    oppgaveId,
    regelsettId,
    opplysningTypeId,
    barn,
    gyldigFraOgMed,
    begrunnelse,
    soknadBarnId,
  } = validertSkjema.data;

  const { data, error } = await lagreOpplysning(
    request,
    behandlingId,
    opplysningTypeId,
    JSON.stringify({ barn: barn, søknadbarnId: soknadBarnId }),
    begrunnelse ? begrunnelse : "",
    gyldigFraOgMed,
    undefined,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (data) {
    return redirect(
      `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/${regelsettId}/opplysning/${opplysningTypeId}`,
    );
  }

  throw new Error(`Uhåndtert feil i opprettBarnelistePeriodeAction()`);
}
