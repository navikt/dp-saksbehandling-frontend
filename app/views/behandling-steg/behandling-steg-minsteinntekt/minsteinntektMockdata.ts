export interface IInntekt {
  periodeType: "siste-12" | "siste-36";
  fra: string;
  til: string;
  inntekt: number;
}

export interface IMinsteinntektData {
  uuid: string;
  virkningsdato: string;
  vilkaarOppfylt: boolean;
  inntektsId: string;
  inntektPerioder: IInntekt[];
}

export const minsteinntektMockdata: IMinsteinntektData = {
  uuid: "mock-minsteinntekt-uuid",
  virkningsdato: "2023-12-06",
  vilkaarOppfylt: true,
  inntektsId: "en-uuid-referanse-til-inntektsdata",
  inntektPerioder: [
    {
      periodeType: "siste-12",
      fra: "april 2022",
      til: "april 2023",
      inntekt: 600000,
    },
    {
      periodeType: "siste-36",
      fra: "april 2020",
      til: "april 2023",
      inntekt: 600000,
    },
  ],
};
