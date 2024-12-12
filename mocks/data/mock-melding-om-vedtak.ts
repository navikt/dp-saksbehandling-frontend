import type { IMeldingOmVedtak } from "~/models/melding-om-vedtak.server";

export const mockMeldingOmVedtakAvslagMinsteinntekt: IMeldingOmVedtak = {
  brevblokkIder: [
    "brev.blokk.vedtak-avslag",
    "brev.blokk.begrunnelse-avslag-minsteinntekt",
    "brev.blokk.sporsmaal",
    "brev.blokk.rett-til-innsyn",
    "brev.blokk.rett-til-aa-klage",
  ],
  opplysninger: [
    {
      tekstId: "opplysning.provingsdato",
      verdi: "2024-12-03",
      datatype: "dato",
    },
    {
      tekstId: "opplysning.inntektskrav-for-siste-12-mnd",
      verdi: "186042",
      datatype: "penger",
    },
    {
      tekstId: "opplysning.inntektskrav-for-siste-36-mnd",
      verdi: "372084",
      datatype: "penger",
    },
    {
      tekstId: "opplysning.siste-avsluttende-kalendermaaned",
      verdi: "2024-10-31",
      datatype: "dato",
    },
    {
      tekstId: "opplysning.arbeidsinntekt-siste-12-mnd",
      verdi: "0",
      datatype: "penger",
    },
    {
      tekstId: "opplysning.arbeidsinntekt-siste-36-mnd",
      verdi: "55550",
      datatype: "penger",
    },
  ],
  utvidedeBeskrivelser: [],
};

export const mockMeldingOmVedtakInnvilgelse: IMeldingOmVedtak = {
  brevblokkIder: [
    "brev.blokk.begrunnelse-avslag-minsteinntekt",
    "brev.blokk.sporsmaal",
    "brev.blokk.rett-til-aa-klage",
    "brev.blokk.rett-til-innsyn",
  ],
  opplysninger: [
    { tekstId: "opplysning.soknadsdato", datatype: "dato", verdi: "12-05-2024" },
    {
      tekstId: "opplysning.arbeidsinntekt-siste-12-mnd",
      datatype: "penger",
      verdi: "0",
    },
    { tekstId: "opplysning.inntektskrav-for-siste-12-mnd", datatype: "penger", verdi: "176000" },
    {
      tekstId: "opplysning.arbeidsinntekt-siste-36-mnd",
      datatype: "penger",
      verdi: "58000",
    },
    { tekstId: "opplysning.inntektskrav-for-siste-36-mnd", datatype: "penger", verdi: "528000" },
    {
      tekstId: "opplysning.siste-avsluttende-kalendermaaned",
      datatype: "dato",
      verdi: "12-05-2024",
    },
    {
      tekstId: "opplysning.soknadstidspunkt",
      datatype: "dato",
      verdi: "12-05-2024",
    },
  ],

  utvidedeBeskrivelser: [
    {
      brevblokkId: "brev.blokk.begrunnelse-avslag-minsteinntekt",
      tekst: "Tekst persistert i backend",
      sistEndretTidspunkt: "2024-10-15T07:18:25.593Z",
    },
  ],
};

export const mockMeldingerOmVedtak = [
  {
    behandlingId: "018f05a0-667a-7597-a835-fab53189d051",
    melding: mockMeldingOmVedtakInnvilgelse,
  },
  {
    behandlingId: "0192c2aa-9fd5-776d-8c8f-819853b43c7e",
    melding: mockMeldingOmVedtakAvslagMinsteinntekt,
  },
];
