import { components } from "openapi/soknad-orkestrator-typer";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { formaterNorskDato } from "./dato.utils";

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

export function formatterOrkestratorOpplysningVerdi(
  opplysning: components["schemas"]["BarnOpplysning"],
): string {
  switch (opplysning.dataType) {
    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";

    case "dato":
      return formaterNorskDato(opplysning.verdi);

    case "land":
      return hentLand(opplysning.verdi);

    default:
      return opplysning.verdi;
  }
}

function hentLand(lankode: string): string {
  const { orkestratorLandliste } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    orkestratorLandliste.find((land: components["schemas"]["Land"]) => land.alpha3kode === lankode)
      ?.navn || ""
  );
}

// Funksjonen returnerer et objekt med opplysninger fra opplysnings array
export function hentOrkestratorBarnFormDefaultValues(
  opplysninger: components["schemas"]["BarnOpplysning"][],
) {
  return opplysninger.reduce(
    (acc, { id, verdi }) => {
      acc[id] = verdi;
      return acc;
    },
    {} as Record<string, string>,
  );
}
