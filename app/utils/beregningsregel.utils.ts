import { z } from "zod";

import { hentValideringForNorskDato } from "~/utils/validering.util";

export const BEREGNINGSREGEL_OPPLYSNINGER = [
  "0194881f-9435-72a8-b1ce-9575cbc2a764",
  "0194881f-9435-72a8-b1ce-9575cbc2a765",
  "0194881f-9435-72a8-b1ce-9575cbc2a766",
] as const;

export const endreBeregningsregelSkjema = z.object({
  _action: z.literal("endre-beregningsregel"),
  behandlingId: z.string().min(1),
  beregningsregel: z.enum(BEREGNINGSREGEL_OPPLYSNINGER, { message: "Du må velge beregningsregel" }),
  begrunnelse: z.string().trim().min(1, "Du må skrive en begrunnelse"),
  gyldigFraOgMed: z.preprocess(
    // Datepicker setter undefined til "undefiend" så vi må caste tilbake
    (val) => (val === "" || val === "undefined" ? undefined : val),
    hentValideringForNorskDato().optional(),
  ),
});
