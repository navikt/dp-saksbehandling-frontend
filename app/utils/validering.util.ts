import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { type TAktivitetType } from "~/models/aktivitet.server";
import type { TBehandlingStegSvartype } from "~/models/oppgave.server";

export function hentValideringRegler(
  svartype: TBehandlingStegSvartype,
  id: string, // ID = stegets navn, eksempelvis "Periode". Det er med i strukturen vi får fra backend.
  inputnavn: string,
) {
  return withZod(
    z.object({
      [inputnavn]: hentValideringForInput(svartype, id),
      begrunnelse: hentValideringForBegrunnelse(id),
    }),
  );
}

function hentValideringForInput(svartype: TBehandlingStegSvartype, id: string): z.ZodType {
  // Sjekker spesialtilfeller først
  switch (id) {
    case "Periode":
      return z.coerce
        .number({
          required_error: "Du må fylle ut en periode",
          invalid_type_error: "Du må fylle ut en gyldig periode",
        })
        .positive({ message: "Du må velge en periode" });
    case "Rettighetstype":
      return z.string().nonempty("Du må fylle ut en rettighetstype");
    case "Fastsatt vanlig arbeidstid":
      return z.preprocess(
        (timer) => String(timer).replace(/,/g, "."),
        z.coerce
          .number({
            required_error: "Du må skrive et tall",
            invalid_type_error: "Det må være et gyldig tall",
          })
          .min(0, { message: "Du må skrive et tall" })
          .max(40, { message: "Du må skrive et tall mellom 0 og 40 timer" })
          .step(0.5, { message: "Vanlig arbeidstid må skrives kun med hele og halve timer" }),
      );
  }

  // Hvis ingen spesialtilfeller treffer kjører vi på med de generelle typene
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

function hentValideringForBegrunnelse(id: string): z.ZodType {
  switch (id) {
    case "Fastsatt vanlig arbeidstid":
      return z.string().nonempty("Du må fylle ut feltet");

    default:
      return z.string();
  }
}

const aktivitetsvalideringArbeid = z.object({
  aktivitetstype: z.enum(["Arbeid", "Syk", "Ferie"], {
    errorMap: () => ({ message: "Du må velge et aktivitet" }),
  }),
  dato: z.coerce.date({
    invalid_type_error: "Ugyldig dato",
  }),
  timer: z.preprocess(
    (timer) => String(timer).replace(/,/g, "."),
    z.coerce
      .number({
        required_error: "Du må skrive et tall",
        invalid_type_error: "Det må være et gyldig tall",
      })
      .positive({ message: "Det må være mellom 0,5 og 24 timer" })
      .min(0.5, { message: "Det må være mer enn 0,5 timer" })
      .max(24, { message: "Det må være mellom 0,5 og 24 timer" }),
  ),
});

const aktivitetsvalideringSykFerie = aktivitetsvalideringArbeid.partial({ timer: true });

export function validatorAktivitet(aktivitetType: TAktivitetType | string) {
  return aktivitetType === "Arbeid"
    ? withZod(aktivitetsvalideringArbeid)
    : withZod(aktivitetsvalideringSykFerie);
}
