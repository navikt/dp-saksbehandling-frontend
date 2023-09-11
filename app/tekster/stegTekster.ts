export type IStegId =
  | "Virkningsdato"
  | "Rettighetstype"
  | "Fastsatt vanlig arbeidstid"
  | "Grunnlag"
  | "Dagsats"
  | "Periode"
  | "Oppfyller kravene til dagpenger";

export interface IStegTekst {
  id: IStegId;
  label: string;
  begrunnelse: string;
  hjelpetekst: {
    label: string;
    begrunnelse: string;
  };
}

export const stegTekster: IStegTekst[] = [
  {
    id: "Virkningsdato",
    label: "Virkningsdato",
    begrunnelse: "Begrunnelse",
    hjelpetekst: {
      label: "",
      begrunnelse: "",
    },
  },
  {
    id: "Rettighetstype",
    label: "Rettighetstype",
    begrunnelse: "Begrunnelse",
    hjelpetekst: {
      label: "",
      begrunnelse: "",
    },
  },
  {
    id: "Fastsatt vanlig arbeidstid",
    label: "Fastsatt ukentlig vanlig arbeidstid",
    begrunnelse: "Begrunnelse",
    hjelpetekst: {
      label: "",
      begrunnelse:
        "Skriv inn hvilken regel som er anvendt for beregning av vanlig arbeidstid i dagpengeforskriften §11-2.",
    },
  },
  {
    id: "Grunnlag",
    label: "Grunnlag",
    begrunnelse: "Begrunnelse",
    hjelpetekst: {
      label: "",
      begrunnelse: "Skriv begrunnelse og hjemmel for hvordan dagpengegrunnlaget er fastsatt.",
    },
  },
  {
    id: "Dagsats",
    label: "Dagsats",
    begrunnelse: "Begrunnelse",
    hjelpetekst: {
      label: "",
      begrunnelse: "",
    },
  },
  {
    id: "Periode",
    label: "Stønadsperiode",
    begrunnelse: "Begrunnelse",
    hjelpetekst: {
      label: "",
      begrunnelse: "",
    },
  },
  {
    id: "Oppfyller kravene til dagpenger",
    label: "Oppfyller kravene til dagpenger",
    begrunnelse: "Begrunnelse",
    hjelpetekst: {
      label: "",
      begrunnelse: "",
    },
  },
];

export function hentStegTekst(id: IStegId) {
  return stegTekster.find((steg) => steg.id === id);
}
