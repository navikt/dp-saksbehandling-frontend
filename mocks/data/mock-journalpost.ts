import type { JournalpostQuery } from "../../graphql/generated/saf/graphql";
import { Variantformat } from "../../graphql/generated/saf/graphql";

export const mockJournalpost: JournalpostQuery["journalpost"] = {
  journalpostId: "598116231",
  tittel: "(mockdata)Søknad om dagpenger (ikke permittert)",
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
          variantformat: Variantformat.Arkiv,
          saksbehandlerHarTilgang: true,
          skjerming: null,
        },
        {
          variantformat: Variantformat.Arkiv,
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
};
