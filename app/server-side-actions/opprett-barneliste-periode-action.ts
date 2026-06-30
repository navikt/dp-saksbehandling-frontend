import { parseFormData, validationError } from "@rvf/react-router";
import { ActionFunctionArgs, redirect } from "react-router";

import { lagreOpplysning } from "~/models/behandling.server";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForNyBarneperiode } from "~/utils/validering.util";

export async function opprettBarnelistePeriodeAction(
  request: Request,
  params: ActionFunctionArgs["params"],
  formData: FormData,
) {
  const validertSkjema = await parseFormData(formData, hentValideringForNyBarneperiode());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, barn, gyldigFraOgMed, begrunnelse, soknadBarnId } = validertSkjema.data;

  const { data, error } = await lagreOpplysning(
    request,
    behandlingId,
    params.opplysningId!,
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
      `/oppgave/${params.oppgaveId}/dagpenger-rett/${params.behandlingId}/regelsett/${params.regelsettId}/opplysning/${params.opplysningId}`,
    );
  }

  throw new Error(`Uhåndtert feil i opprettBarnelistePeriodeAction()`);
}
