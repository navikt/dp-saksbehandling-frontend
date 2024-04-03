import type { IOppgave } from "~/models/oppgave.server";
import {
  soknadMedAlderskravMock,
  soknadMedReellArbeidssokerAltJaMock,
  soknadMedReellArbeidssokerFritakMock,
} from "mocks/data/mock-soknadsbehandling-oppgaver";
import { mockBehandling } from "./mock-behandling";

export const mockPerson = {
  fornavn: "Donald",
  mellomnavn: "Dægg",
  etternavn: "Duck",
  ident: "12345678910",
};

export const masterMenyMock: IOppgave = {
  oppgaveId: "msw-ny-mastermeny",
  behandlingId: "msw-behandling-id-1",
  personIdent: "msw-personmock-statoil",
  person: mockPerson,
  tidspunktOpprettet: "2024-01-01",
  tilstand: "KLAR_TIL_BEHANDLING",
  emneknagger: ["Konkurs Statoil"],
  journalpostIder: ["123456789"],
  steg: [
    {
      beskrivendeId: "Ikke over 67 år",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Mangler dokumentasjon",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Utdanning",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Reell arbeidsøker",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Ikke utestengt",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Lovvalg",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Medlem",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Opphold i Norge",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Registrert som arbeidsøker",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Minste arbeidsinntekt",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [
        {
          opplysningNavn: "Svangerskapsrelaterte sykepenger",
          dataType: "BOOLEAN",
          status: "FAKTUM",
          redigerbar: false,
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "eøs inntekter",
          dataType: "BOOLEAN",
          status: "FAKTUM",
          redigerbar: false,
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "inntekter neste måned",
          dataType: "BOOLEAN",
          status: "FAKTUM",
          redigerbar: false,
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "jobbet utenfor norge",
          dataType: "BOOLEAN",
          status: "FAKTUM",
          redigerbar: false,
          svar: null,
        },
      ],
    },
    {
      beskrivendeId: "Tapt arbeidsinntekt",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Tapt arbeidstid",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
    {
      beskrivendeId: "Ikke fulle folketrygdytelser",
      tilstand: "MANUELL_BEHANDLING",
      opplysninger: [],
    },
  ],
  opplysninger: [
    {
      opplysningNavn: "soknaddato",
      dataType: "LOCALDATE",
      status: "FAKTUM",
      redigerbar: false,
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "virkningsdato",
      dataType: "LOCALDATE",
      status: "FAKTUM",
      redigerbar: false,
      svar: {
        verdi: "true",
      },
    },
    {
      opplysningNavn: "beregningsdato",
      dataType: "LOCALDATE",
      status: "FAKTUM",
      redigerbar: false,
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
  person: mockPerson,
  tidspunktOpprettet: "2024-03-13T10:49:35.580995+01:00",
  emneknagger: ["Søknadsbehandling"],
  tilstand: "KLAR_TIL_BEHANDLING",
  steg: [
    {
      beskrivendeId: "steg.minsteinntekt",
      opplysninger: [
        {
          opplysningNavn: "Minsteinntekt",
          status: "HYPOTESE",
          redigerbar: true,
          dataType: "BOOLEAN",
          svar: {
            verdi: "false",
          },
        },
        {
          opplysningNavn: "Inntekt er over kravet for siste 12 mnd",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "BOOLEAN",
          svar: {
            verdi: "false",
          },
        },
        {
          opplysningNavn: "InntektSiste12Mnd",
          status: "HYPOTESE",
          redigerbar: true,
          dataType: "DOUBLE",
          svar: {
            verdi: "0.0",
          },
        },
        {
          opplysningNavn: "Inntektskrav for siste 12 mnd",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "DOUBLE",
          svar: {
            verdi: "177930.0",
          },
        },
        {
          opplysningNavn: "Antall G for krav til 12 mnd inntekt",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "DOUBLE",
          svar: {
            verdi: "1.5",
          },
        },
        {
          opplysningNavn: "Virkningsdato",
          status: "HYPOTESE",
          redigerbar: true,
          dataType: "LOCALDATE",
          svar: {
            verdi: "2024-02-19",
          },
        },
        {
          opplysningNavn: "Fødselsdato",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "LOCALDATE",
          svar: {
            verdi: "1999-03-31",
          },
        },
        {
          opplysningNavn: "Søknadstidspunkt",
          status: "HYPOTESE",
          redigerbar: true,
          dataType: "LOCALDATE",
          svar: {
            verdi: "2024-02-19",
          },
        },
        {
          opplysningNavn: "Grunnbeløp",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "DOUBLE",
          svar: {
            verdi: "118620.0",
          },
        },
        {
          opplysningNavn: "Inntekt er over kravet for siste 36 mnd",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "BOOLEAN",
          svar: {
            verdi: "false",
          },
        },
        {
          opplysningNavn: "InntektSiste36Mnd",
          status: "HYPOTESE",
          redigerbar: true,
          dataType: "DOUBLE",
          svar: {
            verdi: "0.0",
          },
        },
        {
          opplysningNavn: "Inntektskrav for siste 36 mnd",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "DOUBLE",
          svar: {
            verdi: "355860.0",
          },
        },
        {
          opplysningNavn: "Antall G for krav til 36 mnd inntekt",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "DOUBLE",
          svar: {
            verdi: "3.0",
          },
        },
      ],
      tilstand: "MANUELL_BEHANDLING",
    },
    {
      beskrivendeId: "steg.alder",
      opplysninger: [
        {
          opplysningNavn: "Oppfyller kravet til alder",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "BOOLEAN",
          svar: {
            verdi: "true",
          },
        },
        {
          opplysningNavn: "Virkningsdato",
          status: "HYPOTESE",
          redigerbar: true,
          dataType: "LOCALDATE",
          svar: {
            verdi: "2024-02-19",
          },
        },
        {
          opplysningNavn: "Fødselsdato",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "LOCALDATE",
          svar: {
            verdi: "1999-03-31",
          },
        },
        {
          opplysningNavn: "Søknadstidspunkt",
          status: "HYPOTESE",
          redigerbar: true,
          dataType: "LOCALDATE",
          svar: {
            verdi: "2024-02-19",
          },
        },
        {
          opplysningNavn: "Siste mulige dag bruker kan oppfylle alderskrav",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "LOCALDATE",
          svar: {
            verdi: "2066-03-31",
          },
        },
        {
          opplysningNavn: "Dato søker når maks alder",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "LOCALDATE",
          svar: {
            verdi: "2066-03-31",
          },
        },
        {
          opplysningNavn: "Aldersgrense",
          status: "FAKTUM",
          redigerbar: false,
          dataType: "INT",
          svar: {
            verdi: "67",
          },
        },
      ],
      tilstand: "MANUELL_BEHANDLING",
    },
  ],
  journalpostIder: ["123"],
  opplysninger: [],
  behandling: mockBehandling,
};

export const mockOppgaver: IOppgave[] = [
  masterMenyMock,
  minsteinntektAvslagOppgave,
  soknadMedAlderskravMock,
  soknadMedReellArbeidssokerAltJaMock,
  soknadMedReellArbeidssokerFritakMock,
];
