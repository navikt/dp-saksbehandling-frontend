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
