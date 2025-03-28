import { components } from "openapi/soknad-orkestrator-typer";

const barn1: components["schemas"]["BarnResponse"] = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ed",
  opplysninger: [
    { id: "fornavnOgMellomnavn", verdi: "Kvekk 1", kilde: "register", dataType: "tekst" },
    { id: "etternavn", verdi: "Kvakk 1", kilde: "register", dataType: "tekst" },
    { id: "fødselsdato", verdi: "2019-01-01", kilde: "register", dataType: "dato" },
    { id: "oppholdssted", verdi: "SWE", kilde: "register", dataType: "land" },
    { id: "forsørgerBarnet", verdi: "true", kilde: "soknad", dataType: "boolsk" },
    { id: "kvalifisererTilBarnetillegg", verdi: "true", dataType: "boolsk" },
    { id: "barnetilleggFom", verdi: "2021-01-01", dataType: "dato" },
    { id: "barnetilleggTom", verdi: "2021-12-31", dataType: "dato" },
    { id: "begrunnelse", verdi: "Barnet er under 18 år", dataType: "tekst" },
  ],
};

const barn2: components["schemas"]["BarnResponse"] = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ef",
  opplysninger: [
    { id: "fornavnOgMellomnavn", verdi: "Kvekk 2", kilde: "soknad", dataType: "tekst" },
    { id: "etternavn", verdi: "Kvakk 2", kilde: "soknad", dataType: "tekst" },
    { id: "fødselsdato", verdi: "2020-01-01", kilde: "soknad", dataType: "dato" },
    { id: "oppholdssted", verdi: "NOR", kilde: "soknad", dataType: "land" },
    { id: "forsørgerBarnet", verdi: "true", kilde: "soknad", dataType: "boolsk" },
    { id: "kvalifisererTilBarnetillegg", verdi: "false", dataType: "boolsk" },
    { id: "barnetilleggFom", verdi: "2022-01-01", dataType: "dato" },
    { id: "barnetilleggTom", verdi: "2023-12-31", dataType: "dato" },
    { id: "begrunnelse", verdi: "Barnet er under 18 år", dataType: "tekst" },
  ],
};

export const mockOrkestratorBarn: components["schemas"]["BarnResponse"][] = [barn1, barn2];
