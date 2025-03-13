import type { Validator } from "@rvf/remix";
import { withZod } from "@rvf/zod";
import { z } from "zod";

import { components } from "../../openapi/behandling-typer";

export function hentValideringForOpplysning(
  opplysning: components["schemas"]["Opplysning"],
): Validator<{ verdi: string | number }> {
  switch (opplysning.datatype) {
    case "heltall":
      return withZod(
        z.object({
          verdi: z.coerce
            .number({
              required_error: "Du må skrive et tall",
              invalid_type_error: "Det må være et gyldig heltall",
            })
            .positive({ message: "Du må skrive inn et tall" }),
        }),
      );

    case "desimaltall":
      return withZod(
        z.object({
          verdi: z
            .string()
            .min(1, { message: "Du må skrive et tall" })
            .regex(new RegExp("^\\d*(,)?\\d*$"), "Det må være et gyldig tall"), // Regex for å matche tall med komma seperator
        }),
      );

    case "boolsk":
      return withZod(
        z.object({
          verdi: z.enum(["true", "false"], {
            required_error: "Du må velge et svar",
            invalid_type_error: "Ugyldig svar",
          }),
        }),
      );

    case "dato":
      return withZod(
        z.object({
          verdi: z.string().regex(
            new RegExp("^(0[1-9]|[12][0-9]|3[01])[\\.-](0[1-9]|1[012])[\\.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
            "Ugyldig dato. Gylige datoformat er dd.mm.åååå",
          ),
        }),
      );

    default:
      return withZod(
        z.object({
          verdi: z.string(),
        }),
      );
  }
}

export function hentValideringForPersonIdent() {
  return withZod(
    z.object({
      personIdent: z
        .string()
        .regex(/^\d+$/, { message: "Personnummer kan kun inneholde tall" })
        .length(11, { message: "Personnummer må være 11 siffer" }),
    }),
  );
}

export function hentValideringUtsettOppgave() {
  return withZod(
    z.object({
      utsettTilDato: z.string().min(1, { message: "Du må velge en dato" }),
      paaVentAarsak: z.string().min(1, { message: "Du må velge en begrunnelse" }),
    }),
  );
}
