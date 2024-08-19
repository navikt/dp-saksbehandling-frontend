import type { IBrevBlokk } from "~/models/melding-om-vedtak.server";

export const mockMeldingOmVedtak: IBrevBlokk[] = [
  {
    tekstId: "brev.blokk.vedtak-avslag",
    opplysninger: [{ tekstId: "Søknadsdato", type: "dato", verdi: "12-05-2024" }],
  },
  {
    tekstId: "brev.blokk.begrunnelse-avslag-minsteinntekt",
    opplysninger: [{ tekstId: "Søknadsdato", type: "dato", verdi: "12-05-2024" }],
  },
  {
    tekstId: "brev.blokk.rett-til-aa-klaage",
    opplysninger: [
      {
        tekstId: "Arbeidsinntekt siste 12 mnd",
        type: "penger",
        verdi: "0",
      },
      { tekstId: "Inntektskrav for siste 12 mnd", type: "penger", verdi: "176000" },
      {
        tekstId: "Arbeidsinntekt siste 36 mnd",
        type: "penger",
        verdi: "58000",
      },
      { tekstId: "Inntektskrav for siste 36 mnd", type: "penger", verdi: "528000" },
    ],
  },

  { tekstId: "brev.blokk.rett-til-innsyn", opplysninger: [] },
  { tekstId: "brev.blokk.sporsmaal", opplysninger: [] },
];
