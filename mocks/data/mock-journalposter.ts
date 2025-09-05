import type { JournalpostQuery } from "../../graphql/generated/saf/graphql";
import { Variantformat } from "../../graphql/generated/saf/graphql";

export const mockJournalposter: JournalpostQuery["journalpost"][] = [
  {
    journalpostId: "639664664",
    tittel: "MASKERT_FELT",
    datoOpprettet: "2018-01-01T12:00:00",
    dokumenter: [
      {
        dokumentInfoId: "669305578",
        tittel: "MASKERT_FELT",
        brevkode: "000053",
        originalJournalpostId: "639664664",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Produksjon,
            saksbehandlerHarTilgang: false,
            skjerming: null,
          },
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: false,
            skjerming: null,
          },
        ],
      },
    ],
  },
  {
    journalpostId: "639664665",
    tittel: "2. MASKERT_FELT",
    datoOpprettet: "2018-01-02T12:00:00",
    dokumenter: [
      {
        dokumentInfoId: "669305578",
        tittel: "MASKERT_FELT",
        brevkode: "000053",
        originalJournalpostId: "639664664",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Produksjon,
            saksbehandlerHarTilgang: false,
            skjerming: null,
          },
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: false,
            skjerming: null,
          },
        ],
      },
    ],
  },
  {
    journalpostId: "598116232",
    tittel: "(mockdata 2)Søknad om dagpenger (ikke permittert)",
    datoOpprettet: "2018-01-02T12:00:00",
    dokumenter: [
      {
        dokumentInfoId: "624863374",
        tittel: "(mockdata) Søknad om dagpenger (ikke permittert)",
        brevkode: "NAV 04-01.03",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
          {
            variantformat: Variantformat.Produksjon,
            saksbehandlerHarTilgang: false,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863375",
        tittel: "(mockdata) Tjenestebevis",
        brevkode: "T3",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863376",
        tittel: "(mockdata) Dokumentasjon av andre ytelser",
        brevkode: "K1",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863377",
        tittel: "(mockdata) Dokumentasjon av sluttdato",
        brevkode: "T2",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863378",
        tittel: "(mockdata) Dokumentasjon av helse og funksjonsnivå",
        brevkode: "T9",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
    ],
  },
  {
    journalpostId: "598116231",
    tittel: "(mockdata)Søknad om dagpenger (ikke permittert)",
    datoOpprettet: "2018-01-03T12:00:00",
    dokumenter: [
      {
        dokumentInfoId: "624863374",
        tittel: "(mockdata) Søknad om dagpenger (ikke permittert)",
        brevkode: "NAV 04-01.03",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
          {
            variantformat: Variantformat.Produksjon,
            saksbehandlerHarTilgang: false,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863375",
        tittel: "(mockdata) Tjenestebevis",
        brevkode: "T3",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863376",
        tittel: "(mockdata) Dokumentasjon av andre ytelser",
        brevkode: "K1",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863377",
        tittel: "(mockdata) Dokumentasjon av sluttdato",
        brevkode: "T2",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863378",
        tittel: "(mockdata) Dokumentasjon av helse og funksjonsnivå",
        brevkode: "T9",
        originalJournalpostId: "598116231",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
    ],
  },
];
