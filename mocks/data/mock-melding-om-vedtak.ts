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
    { tekstId: "Søknadsdato", datatype: "dato", verdi: "12-05-2024" },
    {
      tekstId: "Arbeidsinntekt siste 12 mnd",
      datatype: "penger",
      verdi: "0",
    },
    { tekstId: "Inntektskrav for siste 12 mnd", datatype: "penger", verdi: "176000" },
    {
      tekstId: "Arbeidsinntekt siste 36 mnd",
      datatype: "penger",
      verdi: "58000",
    },
    { tekstId: "Inntektskrav for siste 36 mnd", datatype: "penger", verdi: "528000" },
  ],
};
