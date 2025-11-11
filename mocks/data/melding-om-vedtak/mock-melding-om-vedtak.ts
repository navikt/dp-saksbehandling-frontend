import { components } from "../../../openapi/melding-om-vedtak-typer";
import avslagBrev from "./mock-avslag-brev.html?raw";
import egendefinert from "./mock-egendefinert-brev.html?raw";
import innvilgetBrev from "./mock-innvilget-brev.html?raw";
import meldingOmVedtakCss from "./mock-melding-om-vedtak.css?raw";

export const mockMeldingOmVedtakAvslagMinsteinntekt: components["schemas"]["MeldingOmVedtakResponse"] =
  {
    html: hentHtmlMedInjectedCss(avslagBrev, meldingOmVedtakCss),
    brevVariant: "GENERERT",
    utvidedeBeskrivelser: [
      {
        brevblokkId: "brev.blokk.vedtak-innvilgelse",
        tekst: "Fisk",
        tittel: "Nav har innvilget søknaden din om dagpenger",
        sistEndretTidspunkt: "2025-01-21T11:12:22.825566779",
      },
      {
        brevblokkId: "brev.blokk.hvor-lenge-kan-du-faa-dagpenger",
        tekst: "",
        tittel: "Hvor lenge kan du få dagpenger?",
        sistEndretTidspunkt: "2025-01-21T11:12:22.825607189",
      },
      {
        brevblokkId: "brev.blokk.arbeidstiden-din",
        tekst: "",
        tittel: "Arbeidstiden din",
        sistEndretTidspunkt: "2025-01-21T11:12:22.825621949",
      },
    ],
  };

export const mockMeldingOmVedtakInnvilgelse: components["schemas"]["MeldingOmVedtakResponse"] = {
  html: hentHtmlMedInjectedCss(innvilgetBrev, meldingOmVedtakCss),
  brevVariant: "EGENDEFINERT",
  utvidedeBeskrivelser: [
    {
      brevblokkId: "brev.blokk.egendefinert",
      tekst: "<h1>Tittel er kult</h1><h2>overskrift</h2><ol><li>kaker</li></ol>",
      tittel: "Egenderfinert",
      sistEndretTidspunkt: "2025-01-21T11:12:22.825566779",
    },
    {
      brevblokkId: "brev.blokk.begrunnelse-innvilgelsesdato",
      tekst: "Kaker",
      tittel: "Hvorfor får du dagpenger fra innvilgelsesdato?",
      sistEndretTidspunkt: "2025-05-27T14:21:56.148862227",
    },
    {
      brevblokkId: "brev.blokk.hvor-lenge-kan-du-faa-dagpenger",
      tekst: "Fisker",
      tittel: "Hvor lenge kan du få dagpenger?",
      sistEndretTidspunkt: "2025-05-27T14:35:09.88313",
    },
    {
      brevblokkId: "brev.blokk.arbeidstiden-din",
      tekst: "Seigmenn",
      tittel: "Arbeidstiden din",
      sistEndretTidspunkt: "2025-05-27T14:21:56.148881107",
    },
  ],
};

export const mockMeldingOmVedtakKlage: components["schemas"]["MeldingOmVedtakResponse"] = {
  html: hentHtmlMedInjectedCss(egendefinert, meldingOmVedtakCss),
  brevVariant: "EGENDEFINERT",
  utvidedeBeskrivelser: [
    {
      brevblokkId: "brev.blokk.egendefinert",
      tekst: "<h1>Tittel er kult</h1><h2>overskrift</h2><ol><li>kaker</li></ol>",
      tittel: "Egenderfinert",
      sistEndretTidspunkt: "2025-01-21T11:12:22.825566779",
    },
  ],
};

export const mockMeldingerOmVedtak = [
  {
    behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "019353b5-3ee6-7693-8fdd-649153c18f74",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "0196f70d-baf3-708a-8741-6e9c5e03448a",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "0199b8b8-4f28-7926-bfac-4459a0ebb34f",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "01997148-5db5-70b4-b4f1-607730450315",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "019391c0-d9f5-78d9-8704-02f749bfb17b",
    melding: mockMeldingOmVedtakAvslagMinsteinntekt,
  },
  {
    behandlingId: "018e2222-9df8-7aa4-94a6-318fada10999",
    melding: mockMeldingOmVedtakKlage,
  },
];

function hentHtmlMedInjectedCss(html: string, css: string): string {
  return html.replace("<!-- STYLE_INJECTION_POINT -->", `<style>${css}</style>`);
}
