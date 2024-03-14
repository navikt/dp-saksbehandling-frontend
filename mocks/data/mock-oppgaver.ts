import type { IOppgave } from "~/models/oppgave.server";
import {
  soknadMedAlderskravMock,
  soknadMedReellArbeidssokerAltJaMock,
  soknadMedReellArbeidssokerFritakMock,
} from "mocks/data/mock-soknadsbehandling-oppgaver";

export const masterMenyMock: IOppgave = {
  oppgaveId: "msw-ny-mastermeny",
  behandlingId: "msw-behandling-id-1",
  personIdent: "msw-personmock-statoil",
  tidspunktOpprettet: "2024-01-01",
  tilstand: "TilBehandling",
  emneknagger: ["Konkurs Statoil"],
  journalpostIder: ["123456789"],
  steg: [
    {
      beskrivendeId: "Ikke over 67 år",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Mangler dokumentasjon",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Utdanning",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Reell arbeidsøker",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Ikke utestengt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Lovvalg",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Medlem",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Opphold i Norge",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Registrert som arbeidsøker",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Minste arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "Svangerskapsrelaterte sykepenger",
          dataType: "Boolean",
          status: "Faktum",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "eøs inntekter",
          dataType: "Boolean",
          status: "Faktum",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "inntekter neste måned",
          dataType: "Boolean",
          status: "Faktum",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "jobbet utenfor norge",
          dataType: "Boolean",
          status: "Faktum",
          svar: null,
        },
      ],
    },
    {
      beskrivendeId: "Tapt arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Tapt arbeidstid",
      tilstand: "Groenn",
      opplysninger: [],
    },
    {
      beskrivendeId: "Ikke fulle folketrygdytelser",
      tilstand: "Groenn",
      opplysninger: [],
    },
  ],
  opplysninger: [
    {
      opplysningNavn: "soknaddato",
      dataType: "LocalDate",
      status: "Faktum",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      dataType: "LocalDate",
      status: "Faktum",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      dataType: "LocalDate",
      status: "Faktum",
      svar: {
        verdi: "true",
      },
    },
  ],
};

export const minsteinntektAvslagOppgave: IOppgave = {
  oppgaveId: "018e3737-9df8-7ee4-94a6-317fada10999",
  behandlingId: "018e3737-9dda-7d0f-adee-34711013001d",
  personIdent: "12837798289",
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling"],
  tilstand: "KLAR_TIL_BEHANDLING",
  steg: [
    {
      beskrivendeId: "steg-minsteinntekt",
      opplysninger: [
        {
          opplysningNavn: "Minsteinntekt",
          status: "Hypotese",
          dataType: "Boolean",
          svar: {
            verdi: "false",
          },
        },
        {
          opplysningNavn: "Inntekt er over kravet for siste 12 mnd",
          status: "Hypotese",
          dataType: "Boolean",
          svar: {
            verdi: "false",
          },
        },
        {
          opplysningNavn: "InntektSiste12Mnd",
          status: "Hypotese",
          dataType: "Double",
          svar: {
            verdi: "0.0",
          },
        },
        {
          opplysningNavn: "Inntektskrav for siste 12 mnd",
          status: "Hypotese",
          dataType: "Double",
          svar: {
            verdi: "177930.0",
          },
        },
        {
          opplysningNavn: "Antall G for krav til 12 mnd inntekt",
          status: "Hypotese",
          dataType: "Double",
          svar: {
            verdi: "1.5",
          },
        },
        {
          opplysningNavn: "Virkningsdato",
          status: "Hypotese",
          dataType: "LocalDate",
          svar: {
            verdi: "2024-02-19",
          },
        },
        {
          opplysningNavn: "Fødselsdato",
          status: "Hypotese",
          dataType: "LocalDate",
          svar: {
            verdi: "1999-03-31",
          },
        },
        {
          opplysningNavn: "Søknadstidspunkt",
          status: "Hypotese",
          dataType: "LocalDate",
          svar: {
            verdi: "2024-02-19",
          },
        },
        {
          opplysningNavn: "Grunnbeløp",
          status: "Hypotese",
          dataType: "Double",
          svar: {
            verdi: "118620.0",
          },
        },
        {
          opplysningNavn: "Inntekt er over kravet for siste 36 mnd",
          status: "Hypotese",
          dataType: "Boolean",
          svar: {
            verdi: "false",
          },
        },
        {
          opplysningNavn: "InntektSiste36Mnd",
          status: "Hypotese",
          dataType: "Double",
          svar: {
            verdi: "0.0",
          },
        },
        {
          opplysningNavn: "Inntektskrav for siste 36 mnd",
          status: "Hypotese",
          dataType: "Double",
          svar: {
            verdi: "355860.0",
          },
        },
        {
          opplysningNavn: "Antall G for krav til 36 mnd inntekt",
          status: "Hypotese",
          dataType: "Double",
          svar: {
            verdi: "3.0",
          },
        },
      ],
      tilstand: "Groenn",
    },
    {
      beskrivendeId: "steg-alder",
      opplysninger: [
        {
          opplysningNavn: "Oppfyller kravet til alder",
          status: "Hypotese",
          dataType: "Boolean",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "Virkningsdato",
          status: "Hypotese",
          dataType: "LocalDate",
          svar: {
            verdi: "2024-02-19",
          },
        },
        {
          opplysningNavn: "Fødselsdato",
          status: "Hypotese",
          dataType: "LocalDate",
          svar: {
            verdi: "1999-03-31",
          },
        },
        {
          opplysningNavn: "Søknadstidspunkt",
          status: "Hypotese",
          dataType: "LocalDate",
          svar: {
            verdi: "2024-02-19",
          },
        },
        {
          opplysningNavn: "Siste mulige dag bruker kan oppfylle alderskrav",
          status: "Hypotese",
          dataType: "LocalDate",
          svar: {
            verdi: "2066-03-31",
          },
        },
        {
          opplysningNavn: "Dato søker når maks alder",
          status: "Hypotese",
          dataType: "LocalDate",
          svar: {
            verdi: "2066-03-31",
          },
        },
        {
          opplysningNavn: "Aldersgrense",
          status: "Hypotese",
          dataType: "Int",
          svar: {
            verdi: "67",
          },
        },
      ],
      tilstand: "Groenn",
    },
  ],
  journalpostIder: [],
  opplysninger: [],
};
export const ferdigBehandletMinsteinntektAvslagOppgave: IOppgave = {
  oppgaveId: "msw-ferdig-minsteinntekt-avslag-oppgave",
  behandlingId: "msw-behandling-id",
  personIdent: "12345678910",
  tidspunktOpprettet: "2023-04-25",
  emneknagger: ["Mulig avslag minsteinntekt"],
  tilstand: "FerdigBehandlet",
  journalpostIder: ["123456789"],
  steg: [
    {
      beskrivendeId: "Gjenopptak / 8 uker",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "Mulig gjenopptak",
          dataType: "Boolean",
          status: "Faktum",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "Har hatt lukkede saker siste 8 uker",
          dataType: "Boolean",
          status: "Faktum",
          svar: null,
        },
      ],
    },
    {
      beskrivendeId: "Minste arbeidsinntekt",
      tilstand: "Groenn",
      opplysninger: [
        {
          opplysningNavn: "Svangerskapsrelaterte sykepenger",
          dataType: "Boolean",
          status: "Faktum",
          svar: null,
        },
        {
          opplysningNavn: "Det er inntekt neste kalendermåned",
          dataType: "Boolean",
          status: "Faktum",
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
      dataType: "LocalDate",
      status: "Faktum",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      dataType: "LocalDate",
      status: "Faktum",
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      dataType: "LocalDate",
      status: "Faktum",
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
  soknadMedAlderskravMock,
  soknadMedReellArbeidssokerAltJaMock,
  soknadMedReellArbeidssokerFritakMock,
];
