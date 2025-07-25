import { components } from "../../../openapi/melding-om-vedtak-typer";
import avslagBrev from "./mock-avslag-brev.html?raw";
import innvilgetBrev from "./mock-innvilget-brev.html?raw";
import meldingOmVedtakCss from "./mock-melding-om-vedtak.css?raw";

export const mockMeldingOmVedtakAvslagMinsteinntekt: components["schemas"]["MeldingOmVedtakResponse"] =
  {
    html: "<p>HTML persistert i backend</p>",
    utvidedeBeskrivelser: [],
  };

export const mockMeldingOmVedtakInnvilgelse: components["schemas"]["MeldingOmVedtakResponse"] = {
  html: hentHtmlMedInjectedCss(innvilgetBrev, meldingOmVedtakCss),
  utvidedeBeskrivelser: [
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
  html: hentHtmlMedInjectedCss(avslagBrev, meldingOmVedtakCss),
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
  {
    behandlingId: "018e2222-9df8-7aa4-94a6-318fada10999",
    melding: mockMeldingOmVedtakKlage,
  },
];

function hentHtmlMedInjectedCss(html: string, css: string): string {
  return html.replace("<!-- STYLE_INJECTION_POINT -->", `<style>${css}</style>`);
}
