import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import type { TBehandlingStegSvartype } from "~/models/oppgave.server";

export function validerOgParseMetadata<T>(skjemaData: FormData, key: string): T {
  const inputVerdi = skjemaData.get(key);

  // Alle inputfelt sin value er enten string eller File blob
  if (typeof inputVerdi !== "string") {
    throw new Error("input er ikke en string");
  }

  return JSON.parse(inputVerdi);
}

export function hentFormattertSvar(svar: string, svartype: TBehandlingStegSvartype) {
  switch (svartype) {
    case "Double": {
      return svar.replace(/,/g, ".");
    }

    case "LocalDate": {
      return svar.split(".").reverse().join("-");
    }

    default: {
      return svar;
    }
  }
}

export function hentValideringRegler(svartype: TBehandlingStegSvartype, inputnavn: string) {
  return withZod(
    z.object({
      [inputnavn]: hentValideringType(svartype),
      begrunnelse: z.string(),
    })
  );
}

function hentValideringType(svartype: TBehandlingStegSvartype): z.ZodType {
  switch (svartype) {
    case "Int":
      return z.coerce
        .number({
          required_error: "Du må skrive et tall",
          invalid_type_error: "Det må være et gyldig heltall",
        })
        .int();

    case "Double":
      return z
        .string()
        .nonempty("Du må skrive et tall")
        .regex(new RegExp("^\\d*(,|.)?\\d*$"), "Det må være et gyldig tall"); // Regex for å matche tall med komma eller punktum seperator for desimal

    case "Boolean":
      return z.enum(["true", "false"], {
        required_error: "Du må velge et svar",
        invalid_type_error: "Ugyldig svar",
      });

    case "String":
      return z.string().nonempty("Du må fylle ut feltet");

    case "LocalDate":
      return z.string().regex(
        new RegExp("^(0[1-9]|[12][0-9]|3[01])[\\.-](0[1-9]|1[012])[\\.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
        "Ugyldig dato"
      );
  }
}
