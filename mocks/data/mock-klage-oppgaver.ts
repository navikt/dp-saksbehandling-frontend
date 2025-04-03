import { components } from "../../openapi/saksbehandling-typer";

const behandlingOpplysninger: components["schemas"]["KlageOpplysning"][] = [
  {
    id: "hkg",
    navn: "Hva klagen gjelder",
    type: "TEKST",
    paakrevd: false,
    gruppe: "KLAGESAK",
    redigerbar: true,
  },
  {
    id: "vkg",
    navn: "Vedtak klagen gjelder",
    type: "LISTEVALG",
    paakrevd: true,
    gruppe: "KLAGESAK",
    valgmuligheter: ["Vedtak 1", "Vedtak 2"],
    redigerbar: true,
  },
  {
    id: "ffk",
    navn: "Frist for klage",
    type: "DATO",
    paakrevd: true,
    gruppe: "FRIST",
    redigerbar: true,
  },
  {
    id: "km",
    navn: "Klage mottatt",
    type: "DATO",
    paakrevd: true,
    gruppe: "FRIST",
    redigerbar: true,
  },
  {
    id: "hkkif",
    navn: "Har klager klaget innen fristen?",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FRIST",
    redigerbar: true,
  },
  {
    id: "eks",
    navn: "Er klagen skriftlig?",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    id: "eku",
    navn: "Er klagen underskrevet?",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    id: "nkdesk",
    navn: "Nevner klagen den endring som krevet?",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
  {
    id: "hkrk",
    navn: "Har klager rettslig klageinteresse",
    type: "BOOLSK",
    paakrevd: true,
    gruppe: "FORMKRAV",
    redigerbar: true,
  },
];
const utfallOpplysninger: components["schemas"]["KlageOpplysning"][] = [
  {
    id: "vuk",
    navn: "Vurdering av klagen",
    type: "TEKST",
    paakrevd: false,
    gruppe: "KLAGESAK",
    redigerbar: true,
  },
  {
    id: "hekis",
    navn: "Hvem er klager i saken?",
    type: "LISTEVALG",
    paakrevd: true,
    gruppe: "KLAGE_ANKE",
    valgmuligheter: ["Bruker", "Fullmektig"],
    redigerbar: true,
  },
  {
    id: "hhgk",
    navn: "Hvilke hjemler gjelder klagen?",
    type: "FLER_LISTEVALG",
    valgmuligheter: ["Hjemmel 1", "Hjemmel 2"],
    paakrevd: true,
    gruppe: "KLAGE_ANKE",
    redigerbar: true,
  },
  {
    id: "imtk",
    navn: "Intern melding til klageinstans",
    type: "TEKST",
    paakrevd: true,
    gruppe: "KLAGE_ANKE",
    redigerbar: true,
  },
];

export const klageOppgave: components["schemas"]["Klage"] = {
  id: "123456789",
  utfall: {
    verdi: "OPPRETTHOLDELSE",
    tilgjeneligeUtfall: ["OPPRETTHOLDELSE", "DELVIS_MEDHOLD", "MEDHOLD"],
  },
  behandlingOpplysninger,
  utfallOpplysninger,
};

export const klageOppgaver: components["schemas"]["Klage"][] = [klageOppgave];
