import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { formaterNorskDato } from "./dato.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function hentOrkestratorBarnOpplysningLabel(opplysningId: string) {
  const opplysninger = [
    { id: "fornavnOgMellomnavn", navn: "Fornavn" },
    { id: "etternavn", navn: "Etternavn" },
    { id: "fødselsdato", navn: "Fødselsdato" },
    { id: "oppholdssted", navn: "Oppholdssted" },
    { id: "forsørgerBarnet", navn: "Forsørger barnet" },
    { id: "barnetilleggFom", navn: "Barnetillegg fra" },
    { id: "barnetilleggTom", navn: "Barnetillegg til" },
    { id: "kvalifisererTilBarnetillegg", navn: "Rett til barnetillegg" },
    { id: "begrunnelse", navn: "Begrunnelse" },
  ];

  return opplysninger.find((opplysning) => opplysning.id === opplysningId)?.navn;
}

export function hentOrkestratorBarnOpplysningVerdi(opplysning: IOrkestratorBarnOpplysning): string {
  switch (opplysning.datatype) {
    case "tekst":
      return opplysning.verdi;

    case "dato":
      return formaterNorskDato(opplysning.verdi);

    case "land":
      return hentLand(opplysning.verdi);

    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";

    default:
      return opplysning.verdi;
  }
}

function hentLand(lankode: string): string {
  const { orkestratorLandliste } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return orkestratorLandliste.find((land) => land.alpha3kode === lankode)?.navn || "";
}

export function hentOrkestratorBarnValideringDefaultValue(
  opplysning: IOrkestratorBarnOpplysning,
): string {
  switch (opplysning.datatype) {
    case "tekst":
      return opplysning.verdi;

    case "dato":
      return formaterNorskDato(opplysning.verdi);

    case "land":
      return opplysning.verdi;

    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";

    default:
      return opplysning.verdi;
  }
}
