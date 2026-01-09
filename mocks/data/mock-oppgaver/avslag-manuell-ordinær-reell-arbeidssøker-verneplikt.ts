import type { components } from "../../../openapi/saksbehandling-typer";

export const avslagManuellOrdinærReellArbeidssøkerVerneplikt: components["schemas"]["Oppgave"] = {
  oppgaveId: "0198c672-16fe-72b8-b886-da85111e4714",
  behandlingId: "0198c672-111d-7701-a986-76b0ca6b215d",
  saksbehandler: {
    ident: "Z993298",
    fornavn: "Donald",
    etternavn: "Duck",
    enhet: {
      navn: "Mock Enhet",
      enhetNr: "1337",
      postadresse: "Apalveien 111, 1337 Andeby",
    },
  },
  person: {
    ident: "11888199359",
    id: "0197a6b0-4f75-7fb4-8298-a3f8220ca92d",
    fornavn: "SPESIFIKK",
    etternavn: "KONSERT",
    fodselsdato: "1981-08-11",
    alder: 44,
    statsborgerskap: "NOR",
    kjonn: "MANN",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2025-08-20T09:47:01.022703",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "MANUELL",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-09-11T14:07:35.296",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993082 E_Z993082",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-10T13:57:13.04",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z993142 E_Z993142",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-10T13:56:39.057",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993142 E_Z993142",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-09T08:56:59.186",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-08-20T09:47:48.525",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-08-20T09:47:02.526",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: ["Avslag", "Ordinær", "Reell arbeidssøker", "Verneplikt"],
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
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
