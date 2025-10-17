import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";

import { components } from "../../openapi/behandling-typer";

export function formaterOpplysningVerdi(opplysning: components["schemas"]["Opplysning"]): string {
  switch (opplysning.datatype) {
    case "penger":
      return `${formaterTallMedTusenSeperator(opplysning.verdi)} kr`;
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysning.verdi);
    case "dato":
      return formaterTilNorskDato(opplysning.verdi);
    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";
    case "barn": {
      return (opplysning.verdien as components["schemas"]["Barneliste"])?.verdi.length.toString();
    }

    default:
      return opplysning.verdi;
  }
}

export function formaterOpplysningVerdiV2(
  opplysningsverdi: components["schemas"]["Opplysningsverdi"],
) {
  switch (opplysningsverdi.datatype) {
    case "tekst":
      return opplysningsverdi.verdi;
    case "inntekt":
      return `${opplysningsverdi.verdi} inntekt`;
    case "dato":
      return formaterTilNorskDato(opplysningsverdi.verdi);
    case "heltall":
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "desimaltall":
      return formaterTallMedTusenSeperator(opplysningsverdi.verdi);
    case "penger":
      return `${formaterTallMedTusenSeperator(opplysningsverdi.verdi)} kr`;
    case "ulid":
      return `${opplysningsverdi.verdi} ulid`;
    case "boolsk":
      return opplysningsverdi.verdi ? "Ja" : "Nei";
    case "periode":
      return `${formaterTilNorskDato(opplysningsverdi.fom)} - ${formaterTilNorskDato(opplysningsverdi.tom)}`;
    case "barn":
      return `${opplysningsverdi.verdi} barn`;
  }
}

export function konverterOpplysningVerdiTilSkjemaVerdi(
  verdi: components["schemas"]["Opplysningsverdi"],
): string {
  switch (verdi.datatype) {
    case "tekst":
      return verdi.verdi;
    case "inntekt":
      return verdi.verdi;
    case "dato":
      return formaterTilNorskDato(verdi.verdi);
    case "heltall":
      return verdi.verdi.toString();
    case "desimaltall":
      return verdi.verdi.toString();
    case "penger":
      return verdi.verdi.toString();
    case "ulid":
      return verdi.verdi;
    case "boolsk":
      return verdi.verdi ? "Ja" : "Nei";
    case "periode":
      return `${verdi.fom} - ${verdi.tom}`;
    case "barn":
      return JSON.stringify(verdi.verdi);
  }
}
