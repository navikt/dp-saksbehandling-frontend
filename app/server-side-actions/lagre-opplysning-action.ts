import { parseFormData, validationError } from "@rvf/react-router";
import invariant from "tiny-invariant";

import { IAlert } from "~/context/alert-context";
import { lagreOpplysning, lagreOpplysningBegrunnelse } from "~/models/behandling.server";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { getErrorAlert } from "~/utils/error-response.utils";
import { hentValideringForOpplysningPeriodeSkjema } from "~/utils/validering.util";

import { components } from "../../openapi/behandling-typer";

export async function lagreOpplysningAction(request: Request, formData: FormData) {
  const opplysningDatatype = formData.get("datatype") as components["schemas"]["DataType"];
  invariant(opplysningDatatype, "opplysningDatatype er påkrevd");

  const validertSkjema = await parseFormData(
    formData,
    hentValideringForOpplysningPeriodeSkjema(opplysningDatatype),
  );

  if (validertSkjema.error) {
    return validationError(validertSkjema.error);
  }

  const {
    behandlingId,
    opplysningTypeId,
    periodeId,
    nåVerdi,
    nåFraOgMed,
    nåTilOgMed,
    verdi,
    gyldigFraOgMed,
    gyldigTilOgMed,
    begrunnelse,
  } = validertSkjema.data;

  let gyldigFraOgMedDato: string | undefined = undefined;
  let gyldigTilOgMedDato: string | undefined = undefined;
  let nåFraOgMedDato: string | undefined = undefined;
  let nåTilOgMedDato: string | undefined = undefined;

  if (nåFraOgMed) {
    nåFraOgMedDato = formaterTilBackendDato(nåFraOgMed);
  }

  if (nåTilOgMed) {
    nåTilOgMedDato = formaterTilBackendDato(nåTilOgMed);
  }

  if (gyldigFraOgMed) {
    gyldigFraOgMedDato = formaterTilBackendDato(gyldigFraOgMed);
  }

  if (gyldigTilOgMed) {
    gyldigTilOgMedDato = formaterTilBackendDato(gyldigTilOgMed);
  }

  if (
    verdi === nåVerdi &&
    gyldigFraOgMedDato === nåFraOgMedDato &&
    gyldigTilOgMedDato === nåTilOgMedDato
  ) {
    const { error, response } = await lagreOpplysningBegrunnelse(
      request,
      behandlingId,
      periodeId,
      begrunnelse ? begrunnelse : "",
    );
    if (error) {
      return getErrorAlert(error, response);
    }

    if (response.status == 204) {
      const successAlert: IAlert = {
        variant: "success",
        title: "Begrunnelse for opplysning lagret",
      };
      return successAlert;
    }
    throw new Error(`Uhåndtert feil i lagreOpplysningBegrunnelseAction(): ${response.status}`);
  }

  const { data, error, response } = await lagreOpplysning(
    request,
    behandlingId,
    opplysningTypeId,
    konverterOpplysningVerdiTilBackendVerdi(opplysningDatatype, verdi),
    begrunnelse ? begrunnelse : "",
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
