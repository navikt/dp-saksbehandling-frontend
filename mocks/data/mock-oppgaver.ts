import type { IOppgave } from "~/models/oppgave.server";

export const masterMenyMock: IOppgave = {
  uuid: "msw-ny-mastermeny",
  personIdent: "msw-personmock",
  datoOpprettet: "2024-01-01",
  tilstand: "TilBehandling",
  emneknagger: ["Kul emneknagg her"],
  journalpostIder: [],
  steg: [
    {
      uuid: "msw-ikke-over-67",
      stegNavn: "Ikke over 67 år",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-mangler-dokumentasjon",
      stegNavn: "Mangler dokumentasjon",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-utdanning",
      stegNavn: "Utdanning",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-reell-arbeidsoker",
      stegNavn: "Reell arbeidsøker",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-ikke-utestengt",
      stegNavn: "Ikke utestengt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-lovvalg",
      stegNavn: "Lovvalg",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-medlem",
      stegNavn: "Medlem",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-opphold-i-norge",
      stegNavn: "Opphold i Norge",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-arbeidsoker",
      stegNavn: "Registrert som arbeidsøker",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-minste-arbeidsinntekt",
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
      uuid: "msw-tapt-arbeidsinntekt",
      stegNavn: "Tapt arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-tapt-arbeidstid",
      stegNavn: "Tapt arbeidstid",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      uuid: "msw-ikke-fulle-folketrygdytelser",
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
  uuid: "msw-minsteinntekt-avslag-oppgave",
  personIdent: "12345678910",
  datoOpprettet: "2023-04-25",
  emneknagger: ["Mulig avslag minsteinntekt"],
  tilstand: "TilBehandling",
  journalpostIder: [],
  steg: [
    {
      uuid: "sjalabaris",
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
      uuid: "962305f9-3ec5-482c-9d59-558c7653749a",
      stegNavn: "Minste arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "EØS-arbeid",
          opplysningType: "Boolean",
          svar: null,
        },
        {
          opplysningNavn: "Jobb utenfor Norge",
          opplysningType: "Boolean",
          svar: null,
        },
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

export const mockOppgaver: IOppgave[] = [masterMenyMock, minsteinntektAvslagOppgave];
