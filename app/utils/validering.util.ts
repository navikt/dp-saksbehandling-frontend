import { withZod } from "@remix-validated-form/with-zod";
import type { BehandlingStegSvartype } from "~/models/behandling.server";
import { z } from "zod";

export function validerSkjemaData(skjemaData: FormData, key: string): string {
  const inputVerdi = skjemaData.get(key);

  // Alle inputfelt sin value er enten string eller File blob
  if (typeof inputVerdi !== "string") {
    throw new Error("input er ikke en string");
  }

  return inputVerdi;
}

export function validerOgParseMetadata<T>(skjemaData: FormData, key: string): T {
  const inputVerdi = skjemaData.get(key);

  // Alle inputfelt sin value er enten string eller File blob
  if (typeof inputVerdi !== "string") {
    throw new Error("input er ikke en string");
  }

  return JSON.parse(inputVerdi);
}

export function inputValideringRegler(svartype: BehandlingStegSvartype, inputnavn: string) {
  switch (svartype) {
    case "Int":
      return withZod(
        z.object({
          [inputnavn]: z.coerce.number(),
        })
      );

    case "Boolean":
      return withZod(
        z.object({
          [inputnavn]: z.enum(["true", "false"]),
        })
      );

    case "String":
      return withZod(
        z.object({
          [inputnavn]: z
            .string()
            .nonempty("Begrunnelse is required")
            .min(10, "Name must be at least 10 characters long"),
        })
      );

    case "LocalDate":
      return withZod(
        z.object({
          [inputnavn]: z.coerce.date(),
        })
      );

    default:
      return;
  }
}
