import type { IOppgave } from "~/models/oppgave.server";

export const masterMenyMock: IOppgave = {
  uuid: "msw-ny-mastermeny",
  personIdent: "msw-personmock",
  datoOpprettet: "2024-01-01",
  tilstand: "TilBehandling",
  emneknagger: ["Kul emneknagg her"],
  journalpostIDer: [],
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
            type: "Boolean",
            verdi: "true",
          },
        },
        {
          opplysningNavn: "eøs inntekter",
          opplysningType: "Boolean",
          svar: {
            type: "Boolean",
            verdi: "true",
          },
        },
        {
          opplysningNavn: "inntekter neste måned",
          opplysningType: "Boolean",
          svar: {
            type: "Boolean",
            verdi: "true",
          },
        },
        {
          opplysningNavn: "jobbet utenfor norge",
          opplysningType: "Boolean",
          svar: {
            type: "Boolean",
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
};

export const minsteinntektAvslagOppgave: IOppgave = {
  uuid: "msw-minsteinntekt-avslag-oppgave",
  personIdent: "12345678910",
  datoOpprettet: "2023-04-25",
  emneknagger: ["Mulig avslag minsteinntekt"],
  tilstand: "TilBehandling",
  journalpostIDer: [],
  steg: [
    {
      uuid: "sjalabaris",
      stegNavn: "gjenopptak-eller-lukket-sak-8uker",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "mulig-gjenopptak",
          opplysningType: "Boolean",
          svar: {
            type: "Boolean",
            verdi: "true",
          },
        },
        {
          opplysningNavn: "lukket-sak-siste-8uker",
          opplysningType: "Boolean",
          svar: null,
        },
      ],
    },
    {
      uuid: "962305f9-3ec5-482c-9d59-558c7653749a",
      stegNavn: "minste-arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "inntekt-eos-arbeids",
          opplysningType: "Boolean",
          svar: null,
        },
        {
          opplysningNavn: "jobb-utenfor-norge",
          opplysningType: "Boolean",
          svar: null,
        },
        {
          opplysningNavn: "svangerskap-sykepenger",
          opplysningType: "Boolean",
          svar: null,
        },
        {
          opplysningNavn: "inntekt-neste-mnd",
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
};

export const mockOppgaver: IOppgave[] = [masterMenyMock, minsteinntektAvslagOppgave];
