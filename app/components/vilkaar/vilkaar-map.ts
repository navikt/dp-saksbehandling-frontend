interface OpplysningMap {
  [key: string]: {
    title: string;
    header: string;
    description: string;
    values: string[];
  };
}

export const vilkaarMap: OpplysningMap = {
  soknadsTidspunkt: {
    title: "§3A-1 Søknadstidspunkt ",
    header: "Søknadstidspunkt",
    description:
      "Søknad om dagpenger anses som fremmet på det tidspunktet medlemmet enten a.har registrert og sendt en søknad elektronisk til Arbeids- og velferdsetaten, eller b.har levert en søknad på papir til Arbeids- og velferdsetaten",
    values: [
      "fagsakId",
      "Søknadstidspunkt",
      "Prøvingsdato",
      "Søknadsdato",
      "Ønsker dagpenger fra dato",
    ],
  },
  arbeidstidArbeidsinntekt: {
    title: "§4-3 Tap av arbeidstid og arbeidsinntekt",
    header: "Tap av arbeidstid og arbeidsinntekt",
    description:
      "For å få rett til dagpenger må medlemmet ha tapt arbeidsinntekt som arbeidstaker på grunn av arbeidsløshet. For at medlemmet skal få rett til dagpenger, må vanlig arbeidstid være redusert med minst 50 prosent.",
    values: [
      "Krav til tap av arbeidsinntekt og arbeidstid",
      "Beregnet vanlig arbeidstid per uke før tap",
      "Ny arbeidstid per uke",
      "Maksimal vanlig arbeidstid",
      "Krav til prosentvis tap av arbeidstid",
      "Beregningsregel: Arbeidstid siste 6 måneder",
      "Beregningsregel: Arbeidstid siste 12 måneder",
      "Beregeningsregel: Arbeidstid siste 36 måneder",
    ],
  },
  kravMinsteinntekt: {
    title: "§4-4 Krav til minsteinntekt",
    header: "Krav til minsteinntekt",
    description:
      "Bruker må ha brutto arbeidsinntekt som minst svarer til 1,5 ganger grunnbeløpet på søknadstidspunktet de siste tolv avsluttede kalendermånedene, eller brutto arbeidsinntekt som minst svarer til 3 ganger grunnbeløpet på søknadstidspunktet de siste 36 avsluttede kalendermånedene.",
    values: [
      "Krav til minsteinntekt",
      "Ønsker dagpenger fra dato",
      "Inntektskrav for siste 12 mnd",
      "Inntektskrav for siste 36 mnd",
      "Maksimal vanlig arbeidstid",
      "Arbeidsinntekt siste 12 mnd",
      "Arbeidsinntekt siste 36 mnd",
      "Arbeidsinntekt er over kravet for siste 12 mnd",
      "Arbeidsinntekt er over kravet for siste 36 mnd",
    ],
  },
  reelleArbeidssokere: {
    title: "§4-5  Reelle arbeidssøkere",
    header: "Reelle arbeidssøkere",
    description:
      "For å ha rett til dagpenger må medlemmet være reell arbeidssøker. Som reell arbeidssøker regnes den som er arbeidsfør og er villig til å ta ethvert arbeid, hvor som helst i Norge, uavhengig av om det er heltid eller deltid,og delta på arbeidsmarkedstiltak.",
    values: [
      "Det er godkjent at bruker kun søker deltidsarbeid",
      "Det er godkjent at bruker kun søk arbeid lokalt",
    ],
  },
  arbeidssoker: {
    title: "§4-8 Meldeplikt og møteplikt",
    header: "Meldeplikt",
    description: "Bruker må være registrert arbeidssøker for å ha rett til dagpenger",
    values: [
      "Søknadsdato",
      "Ønsker dagpenger fra dato",
      "Registrert som arbeidssøker",
      "Registrert som arbeidssøker på søknadstidspunktet",
    ],
  },
  dagpengenesStorrelse: {
    title: "§4-12 Dagpengenes størrelse",
    header: "Dagpengenes størrelse",
    description:
      "Dagpengegrunnlaget er den inntekten dagpengene regnes ut etter. 90 % grunnlag for dagpenger.",
    values: [
      "Har barnetillegg",
      "Antall barn som gir rett til barnetillegg",
      "Barnetilleggets størrelse i kroner per dag for hvert barn",
      "Sum av barnetillegg",
      "Andel av dagsats med barnetillegg som overstiger maks andel av dagpengegrunnlaget",
    ],
  },
  alle: {
    title: "Alle",
    header: "Alle opplysninger",
    description: "Alle opplysninger knyttet til denne oppgaven.",
    values: [],
  },
};
