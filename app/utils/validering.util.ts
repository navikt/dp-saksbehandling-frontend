import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";
import type { IOpplysning } from "~/models/behandling.server";

export function hentValideringRegler(opplysninger: IOpplysning[]) {
  const zodValideringsregler: Record<string, z.ZodType> = {};

  for (const opplysning of opplysninger) {
    zodValideringsregler[opplysning.navn] = hentValideringForInput(opplysning.datatype);
  }

  return withZod(z.object(zodValideringsregler));
}

function hentValideringForInput(opplysningType: string): z.ZodType {
  switch (opplysningType) {
    case "INT":
      return z.coerce
        .number({
          required_error: "Du må skrive et tall",
          invalid_type_error: "Det må være et gyldig heltall",
        })
        .positive({ message: "Du må skrive inn et tall" });

    case "DOUBLE":
      return z
        .string()
        .nonempty("Du må skrive et tall")
        .regex(new RegExp("^\\d*(,)?\\d*$"), "Det må være et gyldig tall"); // Regex for å matche tall med komma seperator

    case "BOOLEAN":
      return z.enum(["true", "false"], {
        required_error: "Du må velge et svar",
        invalid_type_error: "Ugyldig svar",
      });

    case "STRING":
      return z.string().nonempty("Du må fylle ut feltet");

    case "LOCALDATE":
      return z.string().regex(
        new RegExp("^(0[1-9]|[12][0-9]|3[01])[\\.-](0[1-9]|1[012])[\\.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
        "Ugyldig dato",
      );

    default:
      return z.string();
  }
}
