import type { IJournalpost } from "~/models/SAF.server";

export const mockJournalpost: IJournalpost = {
  journalpostId: "598116231",
  tittel: "Søknad om dagpenger (ikke permittert)",
  dokumenter: [
    {
      dokumentInfoId: "624863374",
      tittel: "Søknad om dagpenger (ikke permittert)",
      brevkode: "NAV 04-01.03",
      originalJournalpostId: "598116231",
      dokumentvarianter: [
        {
          variantformat: "ARKIV",
          saksbehandlerHarTilgang: true,
          skjerming: null,
        },
        {
          variantformat: "ARKIV",
          saksbehandlerHarTilgang: true,
          skjerming: null,
        },
        {
          variantformat: "ARKIV",
          saksbehandlerHarTilgang: true,
          skjerming: null,
        },
      ],
    },
    {
      dokumentInfoId: "624863375",
      tittel: "Tjenestebevis",
      brevkode: "T3",
      originalJournalpostId: "598116231",
      dokumentvarianter: [
        {
          variantformat: "ARKIV",
          saksbehandlerHarTilgang: true,
          skjerming: null,
        },
      ],
    },
    {
      dokumentInfoId: "624863376",
      tittel: "Dokumentasjon av andre ytelser",
      brevkode: "K1",
      originalJournalpostId: "598116231",
      dokumentvarianter: [
        {
          variantformat: "ARKIV",
          saksbehandlerHarTilgang: true,
          skjerming: null,
        },
      ],
    },
    {
      dokumentInfoId: "624863377",
      tittel: "Dokumentasjon av sluttdato",
      brevkode: "T2",
      originalJournalpostId: "598116231",
      dokumentvarianter: [
        {
          variantformat: "ARKIV",
          saksbehandlerHarTilgang: true,
          skjerming: null,
        },
      ],
    },
    {
      dokumentInfoId: "624863378",
      tittel: "Dokumentasjon av helse og funksjonsnivå",
      brevkode: "T9",
      originalJournalpostId: "598116231",
      dokumentvarianter: [
        {
          variantformat: "ARKIV",
          saksbehandlerHarTilgang: true,
          skjerming: null,
        },
      ],
    },
  ],
};
