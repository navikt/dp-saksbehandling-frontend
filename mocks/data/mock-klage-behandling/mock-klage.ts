import { components } from "../../../openapi/saksbehandling-typer";

const behandlingOpplysninger: components["schemas"]["KlageOpplysning"][] = [
  {
    opplysningId: "hkg",
    opplysningNavnId: "test",
    navn: "Hva klagen gjelder",
    type: "FLER_LISTEVALG",
    paakrevd: false,
    gruppe: "KLAGESAK",
    valgmuligheter: ["AVSLAG_PÅ_SØKNAD", "FOR_LITE_UTBETALT", "VEDTAK_OM_TILBAKEBETALING", "ANNET"],
    redigerbar: true,
  },
  {
    opplysningId: "vkg",
    opplysningNavnId: "test",
    navn: "Vedtak klagen gjelder",
    type: "LISTEVALG",
    paakrevd: true,
    gruppe: "KLAGESAK",
    valgmuligheter: ["Vedtak 1", "Vedtak 2"],
    redigerbar: true,
  },
  {
    opplysningId: "ffk",
    opplysningNavnId: "test",
    navn: "Frist for klage",
    type: "DATO",
    valgmuligheter: [],
    paakrevd: true,
    gruppe: "FRIST",
    verdi: "2025-01-23",
    redigerbar: true,
  },
  {
    opplysningId: "km",
    opplysningNavnId: "test",
    navn: "Klage mottatt",
    type: "DATO",
    valgmuligheter: [],
    paakrevd: true,
    gruppe: "FRIST",
    redigerbar: true,
  },
  {
    opplysningId: "hkkif",
    opplysningNavnId: "test",
    navn: "Har klager klaget innen fristen?",
    type: "BOOLSK",
    valgmuligheter: [],
    paakrevd: true,
    gruppe: "FRIST",
    redigerbar: true,
  },
  {
    opplysningId: "eks",
    opplysningNavnId: "test",
    navn: "Er klagen skriftlig?",
    type: "BOOLSK",
    valgmuligheter: [],
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    opplysningId: "eku",
    opplysningNavnId: "test",
    navn: "Er klagen underskrevet?",
    type: "BOOLSK",
    valgmuligheter: [],
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    opplysningId: "nkdesk",
    opplysningNavnId: "test",
    navn: "Nevner klagen den endring som krevet?",
    type: "BOOLSK",
    valgmuligheter: [],
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    opplysningId: "hkrk",
    opplysningNavnId: "test",
    navn: "Har klager rettslig klageinteresse",
    type: "BOOLSK",
    valgmuligheter: [],
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
];
const utfallOpplysning: components["schemas"]["KlageOpplysning"] = {
  opplysningId: "ufa",
  opplysningNavnId: "test",
  navn: "Utfall",
  type: "LISTEVALG",
  paakrevd: true,
  gruppe: "KLAGESAK",
  redigerbar: true,
  valgmuligheter: ["OPPRETTHOLDELSE", "DELVIS_MEDHOLD", "MEDHOLD", "AVVIST"],
};

const vurderingAvKlagen: components["schemas"]["KlageOpplysning"] = {
  opplysningId: "vak",
  opplysningNavnId: "test",
  navn: "Vurdering av klagen",
  type: "TEKST",
  valgmuligheter: [],
  paakrevd: true,
  gruppe: "KLAGESAK",
  redigerbar: true,
};

// Kun synlig når utfall er OPPRETTHOLDELSE (klagen oversendes klageinstansen).
const hvemErKlager: components["schemas"]["KlageOpplysning"] = {
  opplysningId: "hekis",
  opplysningNavnId: "test",
  navn: "Hvem er klager i saken?",
  type: "LISTEVALG",
  paakrevd: true,
  gruppe: "KLAGE_ANKE",
  valgmuligheter: ["Bruker", "Fullmektig"],
  redigerbar: true,
};

const hjemler: components["schemas"]["KlageOpplysning"] = {
  opplysningId: "hhgk",
  opplysningNavnId: "test",
  navn: "Hvilke hjemler gjelder klagen?",
  type: "FLER_LISTEVALG",
  valgmuligheter: ["Hjemmel 1", "Hjemmel 2"],
  paakrevd: true,
  gruppe: "KLAGE_ANKE",
  redigerbar: true,
};

const internMelding: components["schemas"]["KlageOpplysning"] = {
  opplysningId: "imtk",
  opplysningNavnId: "test",
  navn: "Intern melding til klageinstans",
  type: "TEKST",
  valgmuligheter: [],
  paakrevd: true,
  gruppe: "KLAGE_ANKE",
  redigerbar: true,
};

// Speiler backend: klageinstans-feltene vises kun ved OPPRETTHOLDELSE. For
// AVVIST/MEDHOLD/DELVIS_MEDHOLD (og IKKE_SATT) vises kun Utfall + Vurdering av klagen.
export function synligeUtfallOpplysninger(
  utfall: components["schemas"]["Utfall"]["verdi"],
): components["schemas"]["KlageOpplysning"][] {
  const base = [utfallOpplysning, vurderingAvKlagen];
  if (utfall === "OPPRETTHOLDELSE") {
    return [...base, hvemErKlager, hjemler, internMelding];
  }
  return base;
}

export const klage: components["schemas"]["Klage"] = {
  behandlingId: "0199390e-35aa-7f47-9e95-2c384bcb2e93",
  // Starter nøytralt (IKKE_SATT) slik at du selv kan velge utfall under Utfall-fanen.
  // Velger du MEDHOLD/DELVIS_MEDHOLD oppdaterer mocken klagen og to-stegs-flyten aktiveres.
  tilstand: "BEHANDLES",
  utfall: {
    verdi: "IKKE_SATT",
    tilgjengeligeUtfall: ["OPPRETTHOLDELSE", "DELVIS_MEDHOLD", "MEDHOLD"],
  },
  behandlingOpplysninger,
  utfallOpplysninger: synligeUtfallOpplysninger("IKKE_SATT"),
};

export const klager: components["schemas"]["Klage"][] = [klage];
