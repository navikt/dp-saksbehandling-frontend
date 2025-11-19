import type { components } from "../../../openapi/saksbehandling-typer";

export const avslagMinsteinntektOrdinær: components["schemas"]["Oppgave"] = {
  oppgaveId: "019a6e1a-80b2-76a7-ab6a-a980186c7894",
  behandlingId: "019a6e1a-7c65-7ddb-b9ad-66fdd0b928e4",
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
    ident: "22867098546",
    id: "019a6e1a-7f45-7fa2-b5eb-a0f356fbf52c",
    fornavn: "FIOLETT",
    etternavn: "HORISONT",
    fodselsdato: "1970-06-22",
    alder: 55,
    statsborgerskap: "NOR",
    kjonn: "MANN",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2025-11-10T15:10:20.902401",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["717289552"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-11-19T08:40:33.69",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-19T08:40:29.163",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-10T15:10:30.923",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z990286 E_Z990286",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-10T15:10:22.002",
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
  soknadId: "9ce3225d-ada0-4627-9248-914afee110c4",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
