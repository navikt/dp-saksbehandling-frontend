interface OpplysningMap {
  [key: string]: {
    title: string;
    header: string;
    description: string;
    values: string[];
  };
}

export const opplysningsMap: OpplysningMap = {
  virkningstidspunkt: {
    title: "Virkningstidspunkt",
    header: "Fastsett Virkningstidpunkt",
    description: "Finn tidspunkt alle vilkår er oppfylt.",
    values: ["Søknadsdato", "fagsakId", "Ønsker dagpenger fra dato"],
  },
  alderskrav: {
    title: "Alderskrav",
    header: "Alderskrav",
    description: "For å motta dagpenger må bruker være under 67 år.",
    values: [
      "Oppfyller kravet til alder",
      "Fødselsdato",
      "Dato søker når maks alder",
      "Siste mulige dag bruker kan oppfylle alderskrav",
    ],
  },
  registrertArbeidssoker: {
    title: "Registrert Arbeidssøker",
    header: "Registrert Arbeidssøker",
    description: "Bruker må være registrert arbeidssøker for å ha rett til dagpenger",
    values: [
      "Søknadsdato",
      "Registrert som arbeidssøker",
      "Ønsker dagpenger fra dato",
      "Registrert som arbeidssøker på søknadstidspunktet",
    ],
  },
  vernepliktPermittertFisk: {
    title: "Rettighetstype",
    header: "Rettighetstype",
    description: "Bruker må være registrert arbeidssøker for å ha rett til dagpenger",
    values: [
      "Søknadsdato",
      "fagsakId",
      "Ønsker dagpenger fra dato",
      "Har rett til dagpenger under permittering",
      "Har rett til dagpenger etter konkurs",
      "Har rett til dagpenger under permittering i fiskeforedlingsindustri",
      "Har rett til ordinære dagpenger uten arbeidsforhold",
      "Har rett til ordinære dagpenger",
      "Avtjent verneplikt",
    ],
  },
  minsteArbeidsinntekt: {
    title: "Minste arbeidsinntekt",
    header: "Minste arbeidsinntekt",
    description:
      "Finn tidspunkt alle vilkår er oppfylt. Videre noe som hjelper og forklarer om noe er uklart om virkningstidspunktet.",
    values: [
      "Krav til minsteinntekt",
      "Ønsker dagpenger fra dato",
      "Arbeidsinntekt er over kravet for siste 12 mnd",
      "Arbeidsinntekt siste 12 mnd",
      "Inntektskrav for siste 12 mnd",
      "Arbeidsinntekt er over kravet for siste 36 mnd",
      "Arbeidsinntekt siste 36 mnd",
      "Inntektskrav for siste 36 mnd",
      "Inntekt",
    ],
  },
  taptArbeidsinntekt: {
    title: "Tapt arbeidsinntekt",
    header: "Tapt arbeidsinntekt",
    description: "Inntektsopplysninger",
    values: [
      "Siste avsluttende kalendermåned",
      "Inntektskrav for siste 12 mnd",
      "Inntektskrav for siste 36 mnd",
    ],
  },
  // taptArbeidstid: {
  //   title: "Tapt arbeidstid",
  //   header: "Fastsett Virkningstidpunkt",
  //   description:
  //     "For å ha rett til dagpenger må medlemmet være reell arbeidssøker. Som reell arbeidssøker regnes den som er arbeidsfør og er villig til å ta ethvert arbeid, hvor som helst i Norge, uavhengig av om det er heltid eller deltid, og delta på arbeidsmarkedstiltak.",
  //   values: ["Fast arbeidstid i minst seks måneder"],
  // },
  // reellArbeidssoker: {
  //   title: "Reell arbeidssøker",
  //   header: "Fastsett Virkningstidpunkt",
  //   description:
  //     "Finn tidspunkt alle vilkår er oppfylt. Videre noe som hjelper og forklarer om noe er uklart om virkningstidspunktet.",
  //   values: ["Søknadsdato", "fagsakId", "Ønsker dagpenger fra dato"],
  // },
  // utdanning: {
  //   title: "Utdanning",
  //   header: "Fastsett Virkningstidpunkt",
  //   description:
  //     "Finn tidspunkt alle vilkår er oppfylt. Videre noe som hjelper og forklarer om noe er uklart om virkningstidspunktet.",
  //   values: ["Søknadsdato", "fagsakId", "Ønsker dagpenger fra dato"],
  // },
  // folketrydeytelser: {
  //   title: "Fulle Folketrygdeytelser",
  //   header: "Fastsett Virkningstidpunkt",
  //   description:
  //     "Finn tidspunkt alle vilkår er oppfylt. Videre noe som hjelper og forklarer om noe er uklart om virkningstidspunktet.",
  //   values: ["Søknadsdato", "fagsakId", "Ønsker dagpenger fra dato"],
  // },
  // streikOgLockout: {
  //   title: "Streik og lockout",
  //   header: "Fastsett Virkningstidpunkt",
  //   description:
  //     "Finn tidspunkt alle vilkår er oppfylt. Videre noe som hjelper og forklarer om noe er uklart om virkningstidspunktet.",
  //   values: ["Søknadsdato", "fagsakId", "Ønsker dagpenger fra dato"],
  // },
  // utestengt: {
  //   title: "Utestengt",
  //   header: "Fastsett Virkningstidpunkt",
  //   description:
  //     "Finn tidspunkt alle vilkår er oppfylt. Videre noe som hjelper og forklarer om noe er uklart om virkningstidspunktet.",
  //   values: ["Søknadsdato", "fagsakId", "Ønsker dagpenger fra dato"],
  // },
  alle: {
    title: "Alle",
    header: "Alle opplysninger",
    description: "Alle opplysninger knyttet til denne oppgaven.",
    values: [],
  },
};
