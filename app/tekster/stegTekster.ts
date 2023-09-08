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
      begrunnelse: "",
    },
  },
  {
    id: "Grunnlag",
    label: "Grunnlag",
    begrunnelse: "Begrunnelse",
    hjelpetekst: {
      label: "",
      begrunnelse: "",
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
