import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { formaterNorskDato } from "./dato.utils";

export function hentOrkestratorOpplysningVisningTekst(opplysning: string) {
  const opplysninger = [
    { key: "fornavnOgMellomnavn", navn: "Fornavn" },
    { key: "etternavn", navn: "Etternavn" },
    { key: "fødselsdato", navn: "Fødselsdato" },
    { key: "oppholdssted", navn: "Oppholdssted" },
    { key: "forsørgerBarnet", navn: "Forsørger barnet" },
    { key: "barnetilleggFom", navn: "Barnetillegg fra" },
    { key: "barnetilleggTom", navn: "Barnetillegg til" },
    { key: "kvalifisererTilBarnetillegg", navn: "Rett til barnetillegg" },
    { key: "begrunnelse", navn: "Begrunnelse" },
  ];

  return opplysninger.find((pair) => pair.key === opplysning)?.navn;
}

export function hentFormatertOpplysninigsverdi(opplysning: IOrkestratorBarnOpplysning): string {
  switch (opplysning.datatype) {
    case "tekst":
      return opplysning.verdi.toString();

    case "dato":
      return formaterNorskDato(opplysning.verdi.toString());

    case "boolsk":
      return opplysning.verdi;

    default:
      return opplysning.verdi?.toString();
  }
}
