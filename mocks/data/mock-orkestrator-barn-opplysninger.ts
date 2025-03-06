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

const mockBarn1: IOrkestratorBarnOpplysning = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ed",
  fornavnOgMellomnavn: "Kvekk 1",
  etternavn: "Kvakk 2",
  fødselsdato: "2019-01-01",
  oppholdssted: "Norge",
  forsørgerBarnet: true,
  fraRegister: true,
  kvalifisererTilBarnetillegg: true,
  barnetilleggFom: "2021-01-01",
  barnetilleggTom: "2021-12-31",
  begrunnelse: "Barnet er under 18 år",
};

const mockBarn2: IOrkestratorBarnOpplysning = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ef",
  fornavnOgMellomnavn: "Kvekk 2",
  etternavn: "Kvakk 2",
  fødselsdato: "2019-01-01",
  oppholdssted: "Norge",
  forsørgerBarnet: true,
  fraRegister: false,
  kvalifisererTilBarnetillegg: true,
  barnetilleggFom: "2021-01-01",
  barnetilleggTom: "2021-12-31",
  begrunnelse: "Barnet er under 18 år",
};

const mockBarn3: IOrkestratorBarnOpplysning = {
  barnId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ef",
  fornavnOgMellomnavn: "Kvekk 3",
  etternavn: "Kvakk 3",
  fødselsdato: "2019-01-01",
  oppholdssted: "Norge",
  forsørgerBarnet: true,
  fraRegister: false,
  kvalifisererTilBarnetillegg: true,
  barnetilleggFom: "2021-01-01",
  barnetilleggTom: "2021-12-31",
  begrunnelse: "Barnet er under 18 år",
};

export const mockOrkestratorBarnOpplysninger: IOrkestratorBarnOpplysning[] = [mockBarn1, mockBarn2];
export const mockOrkestratorOppdatertBarnOpplysninger: IOrkestratorBarnOpplysning[] = [
  mockBarn1,
  mockBarn3,
];
