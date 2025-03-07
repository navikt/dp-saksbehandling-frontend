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

export function hentFormatertOpplysninigsverdi(
  opplysning: string,
  verdi: string | boolean,
): string {
  const datoType = ["fødselsdato", "barnetilleggFom", "barnetilleggTom"];
  const landType = ["oppholdssted"];
  const booleanType = ["forsørgerBarnet", "kvalifisererTilBarnetillegg"];

  if (datoType.includes(opplysning) && typeof verdi === "string") {
    return formaterNorskDato(verdi);
  }

  if (landType.includes(opplysning)) {
    return verdi.toString();
  }

  if (booleanType.includes(opplysning)) {
    return verdi ? "Ja" : "Nei";
  }

  return verdi.toString();
}
