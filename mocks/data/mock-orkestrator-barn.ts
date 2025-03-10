import { IOrkestratorBarn } from "~/models/orkestrator-opplysning.server";

export interface IOrkestratorBarnOpplysning {
  barnId: string;
  fornavnOgMellomnavn: string;
  etternavn: string;
  fødselsdato: string;
  oppholdssted: string;
  forsørgerBarnet: boolean;
  fraRegister: boolean;
  kvalifisererTilBarnetillegg?: boolean;
  barnetilleggFom?: string;
  barnetilleggTom?: string;
  begrunnelse?: string;
  endretAv?: string;
}

const barn1: IOrkestratorBarn = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ed",
  opplysninger: [
    { id: "fornavnOgMellomnavn", verdi: "Kvekk 1", kilde: "register", datatype: "string" },
    { id: "etternavn", verdi: "Kvakk 1", kilde: "register", datatype: "string" },
    { id: "fødselsdato", verdi: "2019-01-01", kilde: "register", datatype: "string" },
    { id: "oppholdssted", verdi: "Norge", kilde: "register", datatype: "string" },
    { id: "forsørgerBarnet", verdi: "true", kilde: "søknad", datatype: "boolean" },
    { id: "kvalifisererTilBarnetillegg", verdi: "true", datatype: "boolean" },
    { id: "barnetilleggFom", verdi: "2021-01-01", datatype: "string" },
    { id: "barnetilleggTom", verdi: "2021-12-31", datatype: "string" },
    { id: "begrunnelse", verdi: "Barnet er under 18 år", datatype: "string" },
  ],
};

const barn2: IOrkestratorBarn = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ef",
  opplysninger: [
    { id: "fornavnOgMellomnavn", verdi: "Kvekk 2", kilde: "søknad", datatype: "string" },
    { id: "etternavn", verdi: "Kvakk 2", kilde: "søknad", datatype: "string" },
    { id: "fødselsdato", verdi: "2020-01-01", kilde: "søknad", datatype: "string" },
    { id: "oppholdssted", verdi: "Norge", kilde: "søknad", datatype: "string" },
    { id: "forsørgerBarnet", verdi: "true", kilde: "søknad", datatype: "boolean" },
    { id: "kvalifisererTilBarnetillegg", verdi: "true", datatype: "boolean" },
    { id: "barnetilleggFom", verdi: "2022-01-01", datatype: "string" },
    { id: "barnetilleggTom", verdi: "2023-12-31", datatype: "string" },
    { id: "begrunnelse", verdi: "Barnet er under 18 år", datatype: "string" },
  ],
};

export const mockOrkestratorBarn: IOrkestratorBarn[] = [barn1, barn2];
