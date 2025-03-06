import { IOrkestratorBarnOpplysning } from "mocks/data/mock-orkestrator-barn-opplysninger";
import { formaterNorskDato } from "./dato.utils";

export function hentOrkestratorOpplysningVisningTekst(opplysning: string) {
  const opplysninger = [
    { key: "fornavnOgMellomnavn", navn: "Fornavn" },
    { key: "etternavn", navn: "Etternavn" },
    { key: "fødselsdato", navn: "Fødselsdato" },
    { key: "oppholdssted", navn: "Oppholdssted" },
    { key: "forsørgerBarnet", navn: "Forsørger barnet" },
    { key: "barnetilleggFom", navn: "Barnetillegg fra og med" },
    { key: "barnetilleggTom", navn: "Barnetillegg til og med" },
    { key: "kvalifisererTilBarnetillegg", navn: "Rett til barnetillegg" },
    { key: "begrunnelse", navn: "Begrunnelse" },
  ];

  return opplysninger.find((pair) => pair.key === opplysning)?.navn;
}

export function orkestratorOpplysningFraResigter(
  opplysning: string,
  fraRegister: boolean,
): boolean | null {
  const eksludertListe = [
    "kvalifisererTilBarnetillegg",
    "barnetilleggFom",
    "barnetilleggTom",
    "begrunnelse",
    "barnId",
  ];

  if (eksludertListe.includes(opplysning)) {
    return null;
  }

  if (opplysning === "forsørgerBarnet") {
    return false;
  }

  return fraRegister;
}

export function setOrkestratorOpplysningsType(opplysning: string) {
  const datoType = ["fødselsdato", "barnetilleggFom", "barnetilleggTom"];
  const landType = ["oppholdssted"];
  const booleanType = ["forsørgerBarnet", "kvalifisererTilBarnetillegg"];

  if (datoType.includes(opplysning)) {
    return "dato";
  }

  if (landType.includes(opplysning)) {
    return "land";
  }

  if (booleanType.includes(opplysning)) {
    return "boolsk";
  }

  return "tekst";
}

export function byggOrkestratorOpplysningObject(barnOpplysning: IOrkestratorBarnOpplysning) {
  const filterList = ["barnId", "fraRegister"];

  return {
    id: barnOpplysning.barnId,
    opplysninger: Object.entries(barnOpplysning)
      .map(([key, value]) => ({
        key,
        verdi: value,
        fraRegister: orkestratorOpplysningFraResigter(key, barnOpplysning.fraRegister),
        type: setOrkestratorOpplysningsType(key),
      }))
      .filter((opp) => !filterList.includes(opp.key)),
  };
}

export function formatterOrkestratorOpplysningVerdi(opplysning: any) {
  if (opplysning.type === "boolsk") {
    return opplysning.verdi ? "Ja" : "Nei";
  }

  if (opplysning.type === "dato") {
    return formaterNorskDato(opplysning.verdi);
  }

  return opplysning.verdi;
}
