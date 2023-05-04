import { withZod } from "@remix-validated-form/with-zod";
import type { TBehandlingStegSvartype } from "~/models/oppgave.server";
import { z } from "zod";
// import { format, formatISO } from "date-fns";

export function validerOgParseMetadata<T>(skjemaData: FormData, key: string): T {
  const inputVerdi = skjemaData.get(key);

  // Alle inputfelt sin value er enten string eller File blob
  if (typeof inputVerdi !== "string") {
    throw new Error("input er ikke en string");
  }

  return JSON.parse(inputVerdi);
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
        .regex(new RegExp("^\\d*(,)?\\d*$"), "Det må være et gyldig tall"); // Regex for å matche tall med komma seperator for desimal

    case "Boolean":
      return z.enum(["true", "false"], {
        required_error: "Du må velge et svar",
        invalid_type_error: "Ugyldig svar",
      });

    case "String":
      return z.string().nonempty("Du må fylle ut feltet");

    // Fungerer ikke helt på plass enda
    // Vet ikke helt hvordan vi sette eller return feilmelding
    case "LocalDate":
      return z.coerce.date();
    // .preprocess((val) => {
    //   const timeStamp = Date.parse(String(val));
    //   const dateString = formatISO(new Date(timeStamp), { representation: "date" });

    //   const date = new Date(dateString);
    //   return date;
    // }, z.coerce.date())
    // .transform((val) => {
    //   const localDate = format(val, "yyyy-dd-MM");
    //   return localDate;
    // });
  }
}
