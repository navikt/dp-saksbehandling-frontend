import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import type { IOpplysningType } from "~/models/oppgave.server";

export function hentValideringRegler(
  svartype: IOpplysningType,
  id: string, // ID = stegets navn, eksempelvis "Periode". Det er med i strukturen vi får fra backend.
  stegId: string,
) {
  return withZod(
    z.object({
      [stegId]: hentValideringForInput(svartype, id),
    }),
  );
}

function hentValideringForInput(svartype: IOpplysningType, id: string): z.ZodType {
  switch (svartype) {
    case "Int":
      return z.coerce
        .number({
          required_error: "Du må skrive et tall",
          invalid_type_error: "Det må være et gyldig heltall",
        })
        .positive({ message: "Du må skrive inn et tall" });

    case "Double":
      return z
        .string()
        .nonempty("Du må skrive et tall")
        .regex(new RegExp("^\\d*(,)?\\d*$"), "Det må være et gyldig tall"); // Regex for å matche tall med komma seperator

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
        "Ugyldig dato",
      );
  }
}
