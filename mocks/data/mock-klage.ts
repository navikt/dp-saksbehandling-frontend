import { components } from "../../openapi/saksbehandling-typer";
import { mockMeldingOmVedtakInnvilgelse } from "./mock-melding-om-vedtak";

const behandlingOpplysninger: components["schemas"]["KlageOpplysning"][] = [
  {
    opplysningId: "hkg",
    navn: "Hva klagen gjelder",
    type: "TEKST",
    paakrevd: false,
    gruppe: "KLAGESAK",
    redigerbar: true,
  },
  {
    opplysningId: "vkg",
    navn: "Vedtak klagen gjelder",
    type: "LISTEVALG",
    paakrevd: true,
    gruppe: "KLAGESAK",
    valgmuligheter: ["Vedtak 1", "Vedtak 2"],
    redigerbar: true,
  },
  {
    opplysningId: "ffk",
    navn: "Frist for klage",
    type: "DATO",
    paakrevd: true,
    gruppe: "FRIST",
    verdi: "2025-01-23",
    redigerbar: true,
  },
  {
    opplysningId: "km",
    navn: "Klage mottatt",
    type: "DATO",
    paakrevd: true,
    gruppe: "FRIST",
    redigerbar: true,
  },
  {
    opplysningId: "hkkif",
    navn: "Har klager klaget innen fristen?",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FRIST",
    redigerbar: true,
  },
  {
    opplysningId: "eks",
    navn: "Er klagen skriftlig?",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    opplysningId: "eku",
    navn: "Er klagen underskrevet?",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    opplysningId: "nkdesk",
    navn: "Nevner klagen den endring som krevet?",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    opplysningId: "hkrk",
    navn: "Har klager rettslig klageinteresse",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
];
const utfallOpplysninger: components["schemas"]["KlageOpplysning"][] = [
  {
    opplysningId: "ufa",
    navn: "Utfall",
    type: "LISTEVALG",
    paakrevd: true,
    gruppe: "KLAGESAK",
    redigerbar: true,
    valgmuligheter: ["OPPRETTHOLDELSE", "DELVIS_MEDHOLD", "MEDHOLD", "AVVIST"],
  },
  {
    opplysningId: "hekis",
    navn: "Hvem er klager i saken?",
    type: "LISTEVALG",
    paakrevd: true,
    gruppe: "KLAGE_ANKE",
    valgmuligheter: ["Bruker", "Fullmektig"],
    redigerbar: true,
  },
  {
    opplysningId: "hhgk",
    navn: "Hvilke hjemler gjelder klagen?",
    type: "FLER_LISTEVALG",
    valgmuligheter: ["Hjemmel 1", "Hjemmel 2"],
    paakrevd: true,
    gruppe: "KLAGE_ANKE",
    redigerbar: true,
  },
  {
    opplysningId: "imtk",
    navn: "Intern melding til klageinstans",
    type: "TEKST",
    paakrevd: true,
    gruppe: "KLAGE_ANKE",
    redigerbar: true,
  },
];

export const klage: components["schemas"]["Klage"] = {
  behandlingId: "123456789",
  utfall: {
    verdi: "OPPRETTHOLDELSE",
    tilgjengeligeUtfall: ["OPPRETTHOLDELSE", "DELVIS_MEDHOLD", "MEDHOLD"],
  },
  meldingOmVedtak: mockMeldingOmVedtakInnvilgelse,
  behandlingOpplysninger,
  utfallOpplysninger,
};

export const klager: components["schemas"]["Klage"][] = [klage];
