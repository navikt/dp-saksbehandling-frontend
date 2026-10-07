import { parseFormData, validationError } from "@rvf/react-router";

import { IAlert } from "~/context/alert-context";
import { lagreOpplysning } from "~/models/behandling.server";
import {
  BEREGNINGSREGEL_OPPLYSNINGER,
  endreBeregningsregelSkjema,
} from "~/utils/beregningsregel.utils";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";

export async function endreBeregningsregelAction(request: Request, formData: FormData) {
  const validertSkjema = await parseFormData(formData, endreBeregningsregelSkjema);
  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, beregningsregel, begrunnelse, gyldigFraOgMed } = validertSkjema.data;
  const fraOgMed = gyldigFraOgMed ? formaterTilBackendDato(gyldigFraOgMed) : undefined;

  for (const opplysningTypeId of BEREGNINGSREGEL_OPPLYSNINGER) {
    const { data, error } = await lagreOpplysning(
      request,
      behandlingId,
      opplysningTypeId,
      opplysningTypeId === beregningsregel ? "true" : "false",
      begrunnelse,
      fraOgMed,
    );

    if (error || !data) {
      const alert = error ? getHttpProblemAlert(error) : undefined;
      return {
        ...alert,
        variant: "error",
        title: "Beregningsregel ble ikke ferdig lagret",
        body: `${alert?.body ?? "Ukjent feil."}`,
      } satisfies IAlert;
    }
  }

  return { variant: "success", title: "Beregningsregel lagret" } satisfies IAlert;
}
