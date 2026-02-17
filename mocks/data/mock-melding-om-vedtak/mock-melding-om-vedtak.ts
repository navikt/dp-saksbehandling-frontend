import { components } from "../../../openapi/melding-om-vedtak-typer";
import avslagBrev from "./mock-avslag-brev.html?raw";
import egendefinert from "./mock-egendefinert-brev.html?raw";
import innvilgetBrev from "./mock-innvilget-brev.html?raw";
import meldingOmVedtakCss from "./mock-melding-om-vedtak.css?raw";

const mockMeldingOmVedtakAvslagMinsteinntekt: components["schemas"]["MeldingOmVedtakResponse"] = {
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

const mockMeldingOmVedtakInnvilgelse: components["schemas"]["MeldingOmVedtakResponse"] = {
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

const mockMeldingOmVedtakKlage: components["schemas"]["MeldingOmVedtakResponse"] = {
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
    behandlingId: "019a71dd-03ab-7fbe-9714-c9472667f87c",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "019a81e3-99ab-7951-8dd1-614c3b5bcf48",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "019a9714-9968-731e-8918-779b5d1e8727",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "0198c672-111d-7701-a986-76b0ca6b215d",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "01980d51-30d1-7af3-a8f5-2f2572087d2a",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "01997540-0ad3-763a-aa60-21546135aa57",
    melding: mockMeldingOmVedtakAvslagMinsteinntekt,
  },
  {
    behandlingId: "01993817-439e-7d3d-9d8a-78cf49ed6fc1",
    melding: mockMeldingOmVedtakKlage,
  },
];

function hentHtmlMedInjectedCss(html: string, css: string): string {
  return html.replace("<!-- STYLE_INJECTION_POINT -->", `<style>${css}</style>`);
}
