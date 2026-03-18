import { components } from "../../../openapi/saksbehandling-typer";
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
    oppgaveId: "019c28e8-fbdb-7466-b5e6-f6466f89d054",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    oppgaveId: "019bb687-f66e-75ce-bb9f-ca28c190ace2",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    oppgaveId: "019b9cf5-5803-77b3-b9db-2195d8101a55",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    oppgaveId: "019b2ce1-aecd-715e-b604-3ba49ebe3abc",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    oppgaveId: "019b2cdf-d913-763a-a823-40c42f9d5461",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    oppgaveId: "019b2ccd-885d-71eb-8977-f453029fd5b4",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    oppgaveId: "019b2cbf-a883-718c-8ad3-eecfc980ffd7",
    melding: mockMeldingOmVedtakAvslagMinsteinntekt,
  },
  {
    oppgaveId: "0199390e-3602-7b10-9402-77ca0d12d8ac",
    melding: mockMeldingOmVedtakKlage,
  },
  {
    oppgaveId: "019a492d-d283-731d-83a2-a4f36df00502",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
];

function hentHtmlMedInjectedCss(html: string, css: string): string {
  return html.replace("<!-- STYLE_INJECTION_POINT -->", `<style>${css}</style>`);
}
