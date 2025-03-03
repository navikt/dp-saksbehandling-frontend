export interface IOrkestratorOpplysningBarn {
  barnSvarId: string,
  fornavnOgMellomnavn: string,
  etternavn: string,
  fødselsdato: string,
  oppholdssted: string,
  forsørgerBarnet: boolean,
  fraRegister: boolean,
  girBarnetillegg: boolean,
  girBarnetilleggFom?: string,
  girBarnetilleggTom?: string,
  begrunnelse?: string,
  endretAv?: string,
}

const mockBarn1: IOrkestratorOpplysningBarn = {
    barnSvarId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ed",
    fornavnOgMellomnavn: "Kvekk",
    etternavn: "Kvakk",
    fødselsdato: "2019-01-01",
    oppholdssted: "Norge",
    forsørgerBarnet: true,
    fraRegister: true,
    girBarnetillegg: true,
    girBarnetilleggFom: "2021-01-01",
    girBarnetilleggTom: "2021-12-31",
    begrunnelse: "Barnet er under 18 år",
}

const mockBarn2: IOrkestratorOpplysningBarn = {
  barnSvarId: "f4a7aa9c-7291-4d97-ae01-9fc0acef78ee",
  fornavnOgMellomnavn: "Kvekk 2",
  etternavn: "Kvakk 2",
  fødselsdato: "2019-01-01",
  oppholdssted: "Norge",
  forsørgerBarnet: false,
  fraRegister: false,
  girBarnetillegg: false,
  girBarnetilleggFom: "2021-01-01",
  girBarnetilleggTom: "2021-12-31",
  begrunnelse: "Barnet er under 18 år",
}

export const mockOrkestratorOpplysningBarn: IOrkestratorOpplysningBarn[] = [mockBarn1, mockBarn2]