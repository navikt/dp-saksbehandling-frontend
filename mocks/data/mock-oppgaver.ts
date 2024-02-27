import type { IOppgave } from "~/models/oppgave.server";

export const masterMenyMock: IOppgave = {
  oppgaveId: "msw-ny-mastermeny",
  personIdent: "msw-personmock",
  datoOpprettet: "2024-01-01",
  tilstand: "TilBehandling",
  emneknagger: ["Konkurs Statoil"],
  journalpostIder: [],
  steg: [
    {
      stegNavn: "Ikke over 67 år",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Mangler dokumentasjon",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Utdanning",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Reell arbeidsøker",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Ikke utestengt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Lovvalg",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Medlem",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Opphold i Norge",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Registrert som arbeidsøker",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Minste arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "Svangerskapsrelaterte sykepenger",
          opplysningType: "Boolean",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "eøs inntekter",
          opplysningType: "Boolean",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "inntekter neste måned",
          opplysningType: "Boolean",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "jobbet utenfor norge",
          opplysningType: "Boolean",
          svar: {
            verdi: "true",
          },
        },
      ],
    },
    {
      stegNavn: "Tapt arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Tapt arbeidstid",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      stegNavn: "Ikke fulle folketrygdytelser",
      tilstand: "Groenn",
      opplysninger: [],
    },
  ],
  opplysninger: [
    {
      opplysningNavn: "soknaddato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
  ],
};

export const minsteinntektAvslagOppgave: IOppgave = {
  oppgaveId: "msw-minsteinntekt-avslag-oppgave",
  personIdent: "12345678910",
  datoOpprettet: "2023-04-25",
  emneknagger: ["Mulig avslag minsteinntekt"],
  tilstand: "TilBehandling",
  journalpostIder: [],
  steg: [
    {
      stegNavn: "Gjenopptak / 8 uker",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "Mulig gjenopptak",
          opplysningType: "Boolean",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "Har hatt lukkede saker siste 8 uker",
          opplysningType: "Boolean",
          svar: null,
        },
      ],
    },
    {
      stegNavn: "Minste arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "Svangerskapsrelaterte sykepenger",
          opplysningType: "Boolean",
          svar: null,
        },
        {
          opplysningNavn: "Det er inntekt neste kalendermåned",
          opplysningType: "Boolean",
          svar: null,
        },
      ],
      // inntektsopplysninger: [
      //   {
      //     id: "siste-12",
      //     fraDato: "01.01.2023",
      //     tilDato: "01.01.2024",
      //     inntekt: 450000,
      //     inntektPeriode: [
      //       {
      //         arbeidsgiver: "Kokkemannen mega mat",
      //         fraDato: "01.01.2023",
      //         tilDato: "01.02.2023",
      //         inntekt: 37500,
      //       },
      //       {
      //         arbeidsgiver: "Kokkemannen mega mat",
      //         fraDato: "01.02.2023",
      //         tilDato: "01.03.2023",
      //         inntekt: 37500,
      //       },
      //     ],
      //   },
      //   {
      //     id: "siste-36",
      //     fraDato: "01.01.2021",
      //     tilDato: "01.01.2024",
      //     inntekt: 1200000,
      //   },
      // ],
    },
  ],
  opplysninger: [
    {
      opplysningNavn: "soknaddato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
  ],
};
export const ferdigBehandletMinsteinntektAvslagOppgave: IOppgave = {
  oppgaveId: "msw-ferdig-minsteinntekt-avslag-oppgave",
  personIdent: "12345678910",
  datoOpprettet: "2023-04-25",
  emneknagger: ["Mulig avslag minsteinntekt"],
  tilstand: "FerdigBehandlet",
  journalpostIder: [],
  steg: [
    {
      stegNavn: "Gjenopptak / 8 uker",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "Mulig gjenopptak",
          opplysningType: "Boolean",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "Har hatt lukkede saker siste 8 uker",
          opplysningType: "Boolean",
          svar: null,
        },
      ],
    },
    {
      stegNavn: "Minste arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "Svangerskapsrelaterte sykepenger",
          opplysningType: "Boolean",
          svar: null,
        },
        {
          opplysningNavn: "Det er inntekt neste kalendermåned",
          opplysningType: "Boolean",
          svar: null,
        },
      ],
      // inntektsopplysninger: [
      //   {
      //     id: "siste-12",
      //     fraDato: "01.01.2023",
      //     tilDato: "01.01.2024",
      //     inntekt: 450000,
      //     inntektPeriode: [
      //       {
      //         arbeidsgiver: "Kokkemannen mega mat",
      //         fraDato: "01.01.2023",
      //         tilDato: "01.02.2023",
      //         inntekt: 37500,
      //       },
      //       {
      //         arbeidsgiver: "Kokkemannen mega mat",
      //         fraDato: "01.02.2023",
      //         tilDato: "01.03.2023",
      //         inntekt: 37500,
      //       },
      //     ],
      //   },
      //   {
      //     id: "siste-36",
      //     fraDato: "01.01.2021",
      //     tilDato: "01.01.2024",
      //     inntekt: 1200000,
      //   },
      // ],
    },
  ],
  opplysninger: [
    {
      opplysningNavn: "soknaddato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      opplysningType: "LocalDate",
      svar: {
        verdi: "true",
      },
    },
  ],
};

export const mockOppgaver: IOppgave[] = [
  masterMenyMock,
  minsteinntektAvslagOppgave,
  ferdigBehandletMinsteinntektAvslagOppgave,
];
