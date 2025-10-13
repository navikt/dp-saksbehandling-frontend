import { z } from "zod";

import { logger } from "~/utils/logger.utils";

import { components } from "../../openapi/behandling-typer";
import { components as meldingOmVedtakComponents } from "../../openapi/melding-om-vedtak-typer";
import { components as saksbehandlingComponents } from "../../openapi/saksbehandling-typer";

export function hentValideringForOpplysningSkjema(
  datatype: components["schemas"]["DataType"],
  nyPeriode: boolean,
) {
  return z.object({
    verdi: hentValideringForOpplysningVerdi(datatype),
    opplysningTypeId: z.string().min(1, "Det mangler opplysningTypeId i skjema"),
    datatype: z.string().min(1, "Det mangler datatype i skjema"),
    behandlingId: z.string().min(1, "Det mangler behandlingId i skjema"),
    begrunnelse: z.string().min(1, "Du må skrive en begrunnelse").optional(),
    gyldigFraOgMed: z.preprocess(
      (val) => (val === "" ? undefined : val),
      nyPeriode ? hentValideringForNorskDato() : hentValideringForNorskDato().optional(),
    ),
    gyldigTilOgMed: z.preprocess(
      (val) => (val === "" ? undefined : val),
      hentValideringForNorskDato().optional(),
    ),
    ingenTomDato: z
      .string()
      .transform((val) => val === "true")
      .optional(),
    ingenFomDato: z
      .string()
      .transform((val) => val === "true")
      .optional(),
  });
}

export function hentValideringForSlettOpplysningSkjema() {
  return z.object({
    opplysningId: z.string().min(1, "Det mangler opplysningId i skjema"),
    behandlingId: z.string().min(1, "Det mangler behandlingId i skjema"),
  });
}

export function hentValideringForOpplysningVerdi(datatype: components["schemas"]["DataType"]) {
  switch (datatype) {
    case "heltall":
      return z
        .string()
        .min(1, { message: "Du må skrive et tall" })
        .regex(/^\d+$/, "Det må være et gyldig heltall")
        .refine(
          (val) => {
            const num = parseInt(val, 10);
            return num >= 0;
          },
          { message: "Du må skrive inn et tall" },
        );

    case "desimaltall":
      return z
        .string()
        .min(1, { message: "Du må skrive et tall" })
        .regex(new RegExp("^\\d*(,)?\\d*$"), "Det må være et gyldig tall") // Regex for å matche tall med komma seperator
        .refine(
          (val) => {
            // Bytt komma med punktum for parsing
            const normalizedVal = val.replace(",", ".");
            const num = parseFloat(normalizedVal);
            return !isNaN(num) && num >= 0;
          },
          { message: "Du må skrive inn et gyldig tall" },
        );

    case "boolsk":
      return z.enum(["Ja", "Nei"], {
        message: "Du må velge et svar",
      });

    case "dato":
      return hentValideringForNorskDato();

    default:
      return z.string();
  }
}

export function hentValideringForKlageOpplysningSkjema(
  opplysning: saksbehandlingComponents["schemas"]["KlageOpplysning"],
) {
  return z.object({
    verdi: hentValideringForKlageOpplysningVerdi(opplysning),
    opplysningId: z.string().min(1, "Det mangler opplysningId i skjema"),
    datatype: z.string().min(1, "Det mangler datatype i skjema"),
    behandlingId: z.string().min(1, "Det mangler behandlingId i skjema"),
  });
}

export function hentValideringForKlageOpplysningVerdi(
  opplysning: saksbehandlingComponents["schemas"]["KlageOpplysning"],
) {
  switch (opplysning.type) {
    case "TEKST":
      return z.string().min(1);

    case "BOOLSK":
      return z.enum(["Ja", "Nei"], {
        message: "Du må velge et svar",
      });

    case "DATO":
      return hentValideringForNorskDato();

    case "LISTEVALG":
      return z.enum(opplysning.valgmuligheter, {
        message: "Du må velge et svar",
      });

    case "FLER_LISTEVALG":
      return z.preprocess(
        (input) => {
          if (typeof input === "string") {
            try {
              const parsed = JSON.parse(input);
              if (Array.isArray(parsed)) {
                return parsed;
              }
            } catch (error: unknown) {
              logger.error(error);
              return undefined;
            }
          }
          return undefined;
        },
        z.array(
          z.string().refine((val) => opplysning.valgmuligheter.includes(val), {
            message: "Ugyldig valg",
          }),
        ),
      );

    default:
      return z.string();
  }
}

export function hentValideringForPersonIdent() {
  return z.object({
    personIdent: z
      .string()
      .regex(/^\d+$/, { message: "Fødselsnummer kan kun inneholde tall" })
      .length(11, { message: "Fødselsnummer må være 11 siffer" }),
  });
}

export function hentValideringUtsettOppgave() {
  const gyldigeAarsaker: saksbehandlingComponents["schemas"]["UtsettOppgaveAarsak"][] = [
    "AVVENT_SVAR",
    "AVVENT_DOKUMENTASJON",
    "AVVENT_MELDEKORT",
    "AVVENT_PERMITTERINGSÅRSAK",
    "AVVENT_RAPPORTERINGSFRIST",
    "AVVENT_SVAR_PÅ_FORESPØRSEL",
    "ANNET",
  ];
  return z.object({
    oppgaveId: z.string().min(1, "Det mangler oppgaveId i skjema"),
    aktivtOppgaveSok: z.string().optional(),
    beholdOppgave: z.coerce.boolean(),
    utsettTilDato: z.string().min(1, { message: "Du må velge en dato" }),
    paaVentAarsak: z.enum(gyldigeAarsaker, { message: "Du må velge en begrunnelse" }),
  });
}

export function hentValideringAvbrytOppgave() {
  const gyldigeAarsaker: saksbehandlingComponents["schemas"]["AvbrytOppgaveAarsak"][] = [
    "BEHANDLES_I_ARENA",
    "FLERE_SØKNADER",
    "TRUKKET_SØKNAD",
    "ANNET",
  ];
  return z.object({
    oppgaveId: z.string().min(1, "Det mangler oppgaveId i skjema"),
    avbrytAarsak: z.enum(gyldigeAarsaker, { message: "Du må velge en årsak" }),
  });
}

export function hentValideringOrkestratorBarn() {
  return z.object({
    fornavnOgMellomnavn: z.string().min(1, { message: "Du må skrive fornavn" }),
    etternavn: z.string().min(1, { message: "Du må skrive etternavn" }),
    fodselsdato: z.string().regex(
      new RegExp("^(0[1-9]|[12][0-9]|3[01])[.-](0[1-9]|1[012])[.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
      "Ugyldig dato. Gyldige datoformat er dd.mm.åååå",
    ),
    oppholdssted: z.string().min(1, { message: "Du må velge et land" }),
    forsorgerBarnet: z.enum(["true", "false"], {
      message: "Du må velge et svar",
    }),
    kvalifisererTilBarnetillegg: z.enum(["true", "false"], {
      message: "Du må velge et svar",
    }),
    barnetilleggFom: z
      .string()
      .regex(
        new RegExp("^(0[1-9]|[12][0-9]|3[01])[.-](0[1-9]|1[012])[.-](19|20|)\\d\\d$"),
        "Ugyldig dato. Gyldige datoformat er dd.mm.åååå",
      ),
    barnetilleggTom: z
      .string()
      .regex(
        new RegExp("^(0[1-9]|[12][0-9]|3[01])[.-](0[1-9]|1[012])[.-](19|20|)\\d\\d$"),
        "Ugyldig dato. Gyldige datoformat er dd.mm.åååå",
      ),
    begrunnelse: z.string().min(1, { message: "Du må skrive begrunnelse" }),
  });
}

export function hentValideringForNyKlageSkjema() {
  return z.object({
    opprettetDato: z.string().regex(
      new RegExp("^(0[1-9]|[12][0-9]|3[01])[.-](0[1-9]|1[012])[.-](19|20|)\\d\\d$"), // Regex for å matche norsk dato format, eks. 01.02.2023
      "Ugyldig dato. Gylige datoformat er dd.mm.åååå",
    ),
    journalpostId: z.string().min(1, { message: "Du må skrive inn journalpost id" }),
    sakId: z.string().uuid({ message: "Du må skrive inn gyldig sak uuid" }),
    personIdent: z.string().min(1, { message: "Du må skrive inn fødselsnummer" }),
  });
}

export function hentValideringForMeldingOmVedtakKildeSkjema() {
  return z.object({
    oppgaveId: z.string().min(1, "Det mangler oppgaveId i skjema"),
    meldingOmVedtakKilde: z.enum(["DP_SAK", "GOSYS", "INGEN"], {
      message: "Du må velge et alternativ",
    }),
  });
}

export function hentValideringForMeldingOmVedtakBrevVariantSkjema() {
  const lovligeBrevVarianter: meldingOmVedtakComponents["schemas"]["BrevVariant"][] = [
    "GENERERT",
    "EGENDEFINERT",
  ];

  return z.object({
    behandlingId: z.string().min(1, "Det mangler behandlingId i skjema"),
    brevVariant: z.enum(lovligeBrevVarianter, {
      message: "Du må velge et alternativ",
    }),
  });
}

export function hentValideringForGodkjentBrevSkjema() {
  return z.object({
    oppgaveId: z.string().min(1, "Det mangler oppgaveId i skjema"),
    godkjentBrev: z.string().optional(),
  });
}

export function hentValideringForAvklaringSkjema() {
  return z.object({
    avklaringId: z.string().min(1, "Det mangler avklaringId i skjema"),
    behandlingId: z.string().min(1, "Det mangler behandlingId i skjema"),
    begrunnelse: z.string().min(1, { message: "Du må skrive en begrunnelse" }),
  });
}

function hentValideringForNorskDato() {
  return z
    .string()
    .regex(/^\d{2}\.\d{2}\.\d{4}$/, "Dato må være i format DD.MM.YYYY")
    .refine(
      (dateString) => {
        const [day, month, year] = dateString.split(".").map(Number);
        const date = new Date(year, month - 1, day);

        // Sjekk at dato er gyldig og matcher input.
        return (
          date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
        );
      },
      {
        message: "Ugyldig dato",
      },
    );
}
