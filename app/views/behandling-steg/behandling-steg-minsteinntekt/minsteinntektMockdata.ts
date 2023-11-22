export interface IInntektPeriode {
  periode: string;
  inntekt: number;
}

export interface IInntekt {
  id: "siste-12" | "siste-36";
  fra: string;
  til: string;
  perioder: IInntektPeriode[];
  inntekt: number;
  oppfyllerKrav: boolean;
}

interface IMinsteinntekstData {
  regel: "ordinaer" | "verneplikt";
  virkningsdato: string;
  vilkaarOppfylt: boolean;
  inntekter: IInntekt[];
}

export const minsteinntektMockdata: IMinsteinntekstData = {
  virkningsdato: "06.12.2023",
  vilkaarOppfylt: true,
  regel: "ordinaer",
  inntekter: [
    {
      id: "siste-12",
      fra: "april 2022",
      til: "april 2023",
      inntekt: 600000,
      oppfyllerKrav: true,
      perioder: [
        { periode: "april 2022", inntekt: 50000 },
        { periode: "mai 2022", inntekt: 50000 },
        { periode: "juni 2022", inntekt: 50000 },
        { periode: "juli 2022", inntekt: 50000 },
        { periode: "august 2022", inntekt: 50000 },
        { periode: "september 2022", inntekt: 50000 },
        { periode: "oktober 2022", inntekt: 50000 },
        { periode: "november 2022", inntekt: 50000 },
        { periode: "desember 2022", inntekt: 50000 },
        { periode: "januar 2023", inntekt: 50000 },
        { periode: "februar 2023", inntekt: 50000 },
        { periode: "mars 2023", inntekt: 50000 },
        { periode: "april 2023", inntekt: 50000 },
      ],
    },
    {
      id: "siste-36",
      fra: "april 2020",
      til: "april 2023",
      inntekt: 600000,
      oppfyllerKrav: false,
      perioder: [
        { periode: "april 2020", inntekt: 500000 },
        { periode: "mai 2021", inntekt: 500000 },
        { periode: "jumi 2022", inntekt: 500000 },
      ],
    },
  ],
};
