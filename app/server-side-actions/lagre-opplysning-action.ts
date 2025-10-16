import { parseFormData, validationError } from "@rvf/react-router";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { lagreOpplysning } from "~/models/behandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getHttpProblemAlert } from "~/utils/error-response.utils";
import { hentValideringForOpplysningSkjema } from "~/utils/validering.util";

import { components } from "../../openapi/behandling-typer";

export async function lagreOpplysningAction(request: Request, formData: FormData) {
  const opplysningDatatype = formData.get("datatype") as components["schemas"]["DataType"];
  invariant(opplysningDatatype, "opplysningDatatype er påkrevd");

  const validertSkjema = await parseFormData(
    formData,
    hentValideringForOpplysningSkjema(opplysningDatatype),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const { behandlingId, opplysningTypeId, verdi, gyldigFraOgMed, gyldigTilOgMed, begrunnelse } =
    validertSkjema.data;

  console.log("gyldigFraOgMed: ", gyldigFraOgMed);
  console.log("gyldigTilOgMed: ", gyldigTilOgMed);

  let gyldigFraOgMedDato: string | undefined = undefined;
  let gyldigTilOgMedDato: string | undefined = undefined;

  if (gyldigFraOgMed) {
    gyldigFraOgMedDato = formaterTilBackendDato(gyldigFraOgMed);
  }

  if (gyldigTilOgMed) {
    gyldigTilOgMedDato = formaterTilBackendDato(gyldigTilOgMed);
  }

  const { data, error } = await lagreOpplysning(
    request,
    behandlingId,
    opplysningTypeId,
    konverterOpplysningVerdiTilBackendVerdi(opplysningDatatype, verdi),
    begrunnelse ? begrunnelse : "",
    gyldigFraOgMedDato,
    gyldigTilOgMedDato,
  );

  if (error) {
    return getHttpProblemAlert(error);
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

function konverterOpplysningVerdiTilBackendVerdi(opplysningDatatype: string, verdi: string) {
  switch (opplysningDatatype) {
    case "dato": {
      return formaterTilBackendDato(verdi);
    }

    case "desimaltall":
    case "penger":
      return verdi.replace(",", ".");

    case "boolsk":
      return verdi === "Ja" ? "true" : "false";

    default:
      return verdi;
  }
}
