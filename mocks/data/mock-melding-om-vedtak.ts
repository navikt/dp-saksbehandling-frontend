import type { IMeldingOmVedtak } from "~/models/melding-om-vedtak.server";

export const mockMeldingOmVedtakAvslagMinsteinntekt: IMeldingOmVedtak = {
  html: "<p>HTML persistert i backend</p>",
  utvidedeBeskrivelser: [],
};

export const mockMeldingOmVedtakInnvilgelse: IMeldingOmVedtak = {
  html: "<p>HTML persistert i backend</p>",
  utvidedeBeskrivelser: [
    {
      brevblokkId: "brev.blokk.begrunnelse-avslag-minsteinntekt",
      tekst: "Tekst persistert i backend",
      sistEndretTidspunkt: "2024-10-15T07:18:25.593Z",
      tittel: "Tittel persistert i backend",
    },
  ],
};

export const mockMeldingerOmVedtak = [
  {
    behandlingId: "018f05a0-667a-7597-a835-fab53189d051",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "0192c2aa-9fd5-776d-8c8f-819853b43c7e",
    melding: mockMeldingOmVedtakAvslagMinsteinntekt,
  },
];
