import type { components } from "../../../openapi/saksbehandling-typer";

export const ordinærAvslagMinsteinntekt: components["schemas"]["Oppgave"] = {
  oppgaveId: "01980d51-63be-7176-a08e-68d44ca639ef",
  behandlingId: "01980d51-30d1-7af3-a8f5-2f2572087d2a",
  saksbehandler: {
    ident: "Z993298",
    fornavn: "F_Z993298",
    etternavn: "E_Z993298",
    enhet: {
      navn: "IT-avdelingen",
      enhetNr: "2970",
      postadresse: "",
    },
  },
  person: {
    ident: "04810098363",
    id: "018eeb95-d6b4-7b85-af13-9f24bdab030e",
    fornavn: "DRIFTIG",
    etternavn: "APPELSIN",
    fodselsdato: "2000-01-04",
    alder: 25,
    statsborgerskap: "NOR",
    kjonn: "MANN",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2025-07-15T11:01:21.500665",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["691134178"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-11-20T10:42:59.498",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-20T10:42:53.261",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-07-15T11:01:51.303",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994276 E_Z994276",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-07-15T11:01:34.526",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: ["Avslag", "Ordinær"],
  tilstand: "UNDER_BEHANDLING",
  lovligeEndringer: {
    paaVentAarsaker: [
      "AVVENT_SVAR",
      "AVVENT_DOKUMENTASJON",
      "AVVENT_MELDEKORT",
      "AVVENT_PERMITTERINGSÅRSAK",
      "AVVENT_RAPPORTERINGSFRIST",
      "AVVENT_SVAR_PÅ_FORESPØRSEL",
      "ANNET",
    ],
    avbrytAarsaker: ["BEHANDLES_I_ARENA", "FLERE_SØKNADER", "TRUKKET_SØKNAD", "ANNET"],
  },
  soknadId: "02387802-0322-4f2f-abb8-183d50637713",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
