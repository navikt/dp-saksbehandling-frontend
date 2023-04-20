import { withZod } from "@remix-validated-form/with-zod";
import type { BehandlingStegSvartype } from "~/models/behandling.server";
import { z } from "zod";

export function validerOgParseMetadata<T>(skjemaData: FormData, key: string): T {
  const inputVerdi = skjemaData.get(key);

  // Alle inputfelt sin value er enten string eller File blob
  if (typeof inputVerdi !== "string") {
    throw new Error("input er ikke en string");
  }

  return JSON.parse(inputVerdi);
}

export function hentValideringRegler(svartype: BehandlingStegSvartype, inputnavn: string) {
  return withZod(
    z.object({
      [inputnavn]: hentValideringType(svartype),
      begrunnelse: z
        .string()
        .nonempty("Begrunnelse er påkrevd")
        .min(10, "Begrunnelse må være minimum 10 tegn"),
    })
  );
}

function hentValideringType(svartype: BehandlingStegSvartype): z.ZodType {
  switch (svartype) {
    case "Int":
      return z.coerce.number({
        required_error: "Du må skrive et tall",
        invalid_type_error: "Det må være et gyldig tall",
      });

    case "Boolean":
      return z.enum(["true", "false"], {
        required_error: "Du må velge et svar",
        invalid_type_error: "Ugyldig svar",
      });

    case "String":
      return z.string().nonempty("Du må fylle ut feltet");

    case "LocalDate":
      return z.coerce.date({
        required_error: "Du må fylle ut dato",
        invalid_type_error: "Det må være en gyldig dato",
      });
  }
}
