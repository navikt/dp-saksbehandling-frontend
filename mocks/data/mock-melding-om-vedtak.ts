import type { IMeldingOmVedtak } from "~/models/melding-om-vedtak.server";

export const mockMeldingOmVedtak: IMeldingOmVedtak = {
  brevblokkIder: [
    "brev.blokk.vedtak-avslag",
    "brev.blokk.begrunnelse-avslag-minsteinntekt",
    "brev.blokk.rett-til-aa-klage",
    "brev.blokk.rett-til-innsyn",
    "brev.blokk.sporsmaal",
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
  ],
};
