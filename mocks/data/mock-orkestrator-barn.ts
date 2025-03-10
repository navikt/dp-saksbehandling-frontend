import { IOrkestratorBarn } from "~/models/orkestrator-opplysning.server";

const barn1: IOrkestratorBarn = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ed",
  opplysninger: [
    { id: "fornavnOgMellomnavn", verdi: "Kvekk 1", kilde: "register", datatype: "tekst" },
    { id: "etternavn", verdi: "Kvakk 1", kilde: "register", datatype: "tekst" },
    { id: "fødselsdato", verdi: "2019-01-01", kilde: "register", datatype: "dato" },
    { id: "oppholdssted", verdi: "Norge", kilde: "register", datatype: "land" },
    { id: "forsørgerBarnet", verdi: "true", kilde: "søknad", datatype: "boolsk" },
    { id: "kvalifisererTilBarnetillegg", verdi: "true", datatype: "boolsk" },
    { id: "barnetilleggFom", verdi: "2021-01-01", datatype: "dato" },
    { id: "barnetilleggTom", verdi: "2021-12-31", datatype: "dato" },
    { id: "begrunnelse", verdi: "Barnet er under 18 år", datatype: "tekst" },
  ],
};

const barn2: IOrkestratorBarn = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ef",
  opplysninger: [
    { id: "fornavnOgMellomnavn", verdi: "Kvekk 2", kilde: "søknad", datatype: "tekst" },
    { id: "etternavn", verdi: "Kvakk 2", kilde: "søknad", datatype: "tekst" },
    { id: "fødselsdato", verdi: "2020-01-01", kilde: "søknad", datatype: "dato" },
    { id: "oppholdssted", verdi: "Norge", kilde: "søknad", datatype: "land" },
    { id: "forsørgerBarnet", verdi: "true", kilde: "søknad", datatype: "boolsk" },
    { id: "kvalifisererTilBarnetillegg", verdi: "true", datatype: "boolsk" },
    { id: "barnetilleggFom", verdi: "2022-01-01", datatype: "dato" },
    { id: "barnetilleggTom", verdi: "2023-12-31", datatype: "dato" },
    { id: "begrunnelse", verdi: "Barnet er under 18 år", datatype: "tekst" },
  ],
};

export const mockOrkestratorBarn: IOrkestratorBarn[] = [barn1, barn2];
