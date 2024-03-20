export interface IStegTekst {
  tittel: string;
  beskrivelse: string;
}

export const stegTekster: { [key: string]: IStegTekst } = {
  "steg.alder": {
    tittel: "Alder",
    beskrivelse: "For å ha rett til dagpenger må søker være under 67 år.",
  },
  "steg.minsteinntekt": {
    tittel: "Minste arbeidsinntekt",
    beskrivelse:
      "Hatt en brutto arbeidsinntekt som minst svarer til 1,5 ganger grunnbeløpet siste 12 månedene, eller 3 ganger grunnbeløpet siste 36 månedene.",
  },
  // TMP for å vise rådata fra dp-behandling
  behandling: {
    tittel: "RAW Behandling",
    beskrivelse: "Rådata fra dp-behandling",
  },
};
