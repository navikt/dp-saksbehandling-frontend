import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { lagreOpplysning } from "~/models/behandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForNyBarneperiode } from "~/utils/validering.util";

export async function opprettBarnelistePeriodeAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, hentValideringForNyBarneperiode());

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, barn, gyldigFraOgMed, begrunnelse } = validertSkjema.data;

  let gyldigFraOgMedDato: string | undefined = undefined;

  if (gyldigFraOgMed) {
    gyldigFraOgMedDato = formaterTilBackendDato(gyldigFraOgMed);
  }

  const { data, error } = await lagreOpplysning(
    request,
    behandlingId,
    "0194881f-9428-74d5-b160-f63a4c61a23b",
    JSON.stringify(barn),
    begrunnelse ? begrunnelse : "",
    gyldigFraOgMedDato,
    undefined,
  );

  if (error) {
    return getHttpProblemAlert(error);
  }

  if (data) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Barnelisteperiode lagret",
    };
    return successAlert;
  }

  throw new Error(`Uhåndtert feil i opprettBarnelistePeriodeAction()`);
}
