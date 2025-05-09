import { components } from "openapi/soknad-orkestrator-typer";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { formaterNorskDato } from "./dato.utils";

export function hentOrkestratorBarnOpplysningLabel(opplysningId: string) {
  const opplysninger = [
    { id: "fornavnOgMellomnavn", label: "Fornavn" },
    { id: "etternavn", label: "Etternavn" },
    { id: "fodselsdato", label: "Fødselsdato" },
    { id: "oppholdssted", label: "Oppholdssted" },
    { id: "forsorgerBarnet", label: "Forsørger barnet" },
    { id: "barnetilleggFom", label: "Barnetillegg fra" },
    { id: "barnetilleggTom", label: "Barnetillegg til" },
    { id: "kvalifisererTilBarnetillegg", label: "Rett til barnetillegg" },
    { id: "begrunnelse", label: "Begrunnelse" },
  ];

  // Returner label hvis key finnes, eller returnerer key med første bokstaven uppercase
  return (
    opplysninger.find((opplysning) => opplysning.id === opplysningId)?.label ||
    opplysningId.charAt(0).toUpperCase() + opplysningId.slice(1)
  );
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
  const { orkestratorLandliste } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId",
  );

  return (
    orkestratorLandliste?.find((land: components["schemas"]["Land"]) => land.alpha3kode === lankode)
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
