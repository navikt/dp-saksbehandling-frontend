import type { JournalpostQuery } from "../../graphql/generated/saf/graphql";
import { Variantformat } from "../../graphql/generated/saf/graphql";

export const mockJournalposter: JournalpostQuery["journalpost"][] = [
  {
    journalpostId: "22222222222222",
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
    journalpostId: "33333333333333",
    tittel: "Søknad om dagpenger (ikke permittert)",
    datoOpprettet: "2018-01-02T12:00:00",
    dokumenter: [
      {
        dokumentInfoId: "624863374",
        tittel: "Søknad om dagpenger (ikke permittert)",
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
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
          {
            variantformat: Variantformat.Original,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
          {
            variantformat: Variantformat.Fullversjon,
            saksbehandlerHarTilgang: true,
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
    journalpostId: "44444444444444",
    tittel: "Søknad om dagpenger (ikke permittert)",
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
  {
    journalpostId: "55555555555555",
    tittel: "Ettersendelse til seknad om dagpenger ved arbeidsledighet (ikke permittert)",
    datoOpprettet: "2018-01-03T12:00:00",
    dokumenter: [
      {
        dokumentInfoId: "624863374",
        tittel: "Ettersendelse til seknad om dagpenger ved arbeidsledighet (ikke permittert)",
        brevkode: "NAV 04-01.03",
        originalJournalpostId: "598116238",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863375",
        tittel: "Arbeidsavtale",
        brevkode: "T3",
        originalJournalpostId: "598116238",
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
    journalpostId: "66666666666666",
    tittel: "Ettersendelse til seknad om dagpenger ved arbeidsledighet (ikke permittert)",
    datoOpprettet: "2018-01-03T12:00:00",
    dokumenter: [
      {
        dokumentInfoId: "624863374",
        tittel: "Ettersendelse til seknad om dagpenger ved arbeidsledighet (ikke permittert)",
        brevkode: "NAV 04-01.03",
        originalJournalpostId: "598116238",
        dokumentvarianter: [
          {
            variantformat: Variantformat.Arkiv,
            saksbehandlerHarTilgang: true,
            skjerming: null,
          },
        ],
      },
      {
        dokumentInfoId: "624863375",
        tittel: "Arbeidsavtale",
        brevkode: "T3",
        originalJournalpostId: "598116238",
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
    journalpostId: "77777777777777",
    tittel: "Vedtak om dagpenger",
    datoOpprettet: "2025-12-18T14:17:05",
    dokumenter: [
      {
        dokumentInfoId: "753095018",
        tittel: "Vedtak om dagpenger",
        brevkode: "NAV-DAGPENGER-VEDTAK",
        originalJournalpostId: "717550336",
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
