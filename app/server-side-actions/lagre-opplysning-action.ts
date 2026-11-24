import { parseFormData, validationError } from "@rvf/react-router";
import invariant from "tiny-invariant";
import { z } from "zod";

import { IAlert } from "~/context/alert-context";
import { endreOpplysning, lagreOpplysning } from "~/models/behandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getErrorAlert } from "~/utils/error-response.utils";
import {
  hentValideringForEndreOpplysningPeriodeSkjema,
  hentValideringForOpplysningPeriodeSkjema,
} from "~/utils/validering.util";

import { components } from "../../openapi/behandling-typer";

export async function lagreOpplysningAction(request: Request, formData: FormData) {
  const opplysningDatatype = formData.get("datatype") as components["schemas"]["DataType"];
  invariant(opplysningDatatype, "opplysningDatatype er påkrevd");

  const validertSkjema = await parseFormData(
    formData,
    z.discriminatedUnion("_action", [
      hentValideringForOpplysningPeriodeSkjema(opplysningDatatype),
      hentValideringForEndreOpplysningPeriodeSkjema(opplysningDatatype),
    ]),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, verdi, gyldigFraOgMed, gyldigTilOgMed, begrunnelse } = validertSkjema.data;

  let gyldigFraOgMedDato: string | undefined = undefined;
  let gyldigTilOgMedDato: string | undefined = undefined;

  if (gyldigFraOgMed) {
    gyldigFraOgMedDato = formaterTilBackendDato(gyldigFraOgMed);
  }

  if (gyldigTilOgMed) {
    gyldigTilOgMedDato = formaterTilBackendDato(gyldigTilOgMed);
  }

  const backendVerdi = konverterOpplysningVerdiTilBackendVerdi(opplysningDatatype, verdi);
  const { data, error, response } =
    validertSkjema.data._action === "endre-opplysning"
      ? await endreOpplysning(request, behandlingId, validertSkjema.data.opplysningId, {
          verdi: backendVerdi,
          begrunnelse,
          gyldigFraOgMed: gyldigFraOgMedDato,
          gyldigTilOgMed: gyldigTilOgMedDato,
        })
      : await lagreOpplysning(
          request,
          behandlingId,
          validertSkjema.data.opplysningTypeId,
          backendVerdi,
          begrunnelse,
          gyldigFraOgMedDato,
          gyldigTilOgMedDato,
        );

  if (error) {
    return getErrorAlert(error, response);
  }

  if (data) {
    const successAlert: IAlert = {
      variant: "success",
      title: "Opplysning lagret",
    };
    return successAlert;
  }

  throw new Error(`Uhåndtert feil i lagreOpplysningAction()`);
}

function konverterOpplysningVerdiTilBackendVerdi(
  opplysningDatatype: components["schemas"]["DataType"],
  verdi: string,
) {
  switch (opplysningDatatype) {
    case "dato": {
      return formaterTilBackendDato(verdi);
    }

    case "boolsk":
      return verdi === "Ja" ? "true" : "false";

    case "desimaltall":
    case "penger":
      return verdi.replace(",", ".");

    default:
      return verdi;
  }
}
