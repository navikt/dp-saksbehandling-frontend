import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { type TAktivitetType } from "~/models/aktivitet.server";
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

export function hentValideringRegler(
  svartype: TBehandlingStegSvartype,
  id: string,
  inputnavn: string,
) {
  return withZod(
    z.object({
      [inputnavn]: hentValideringType(svartype, id),
      begrunnelse: z.string(),
    }),
  );
}

function hentValideringType(svartype: TBehandlingStegSvartype, id: string): z.ZodType {
  // Sjekker spesialtilfeller først
  switch (id) {
    case "Periode":
      return z.coerce
        .number({
          required_error: "Du må fylle ut en periode",
          invalid_type_error: "Du må fylle ut en gyldig periode",
        })
        .positive({ message: "Du må skrive et positivt tall" });
    case "Rettighetstype":
      return z.string().nonempty("Du må fylle ut en rettighetstype");
  }

  // Hvis ingen spesialtilfeller treffer, kjører vi på med de generelle typene
  switch (svartype) {
    case "Int":
      return z.coerce
        .number({
          required_error: "Du må skrive et tall",
          invalid_type_error: "Det må være et gyldig heltall",
        })
        .positive({ message: "Du må skrive et positivt tall" });

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

export const nyRapporteringsperiodeValidator = withZod(
  z.object({
    fraOgMed: z.string().regex(
      new RegExp("^(0[1-9]|[12][0-9]|3[01])[\\.-](0[1-9]|1[012])[\\.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
      "Ugyldig dato",
    ),
  }),
);
