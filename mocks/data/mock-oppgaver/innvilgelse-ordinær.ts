import type { components } from "../../../openapi/saksbehandling-typer";

export const innvilgelseOrdinær: components["schemas"]["Oppgave"] = {
  oppgaveId: "019a9714-a7e7-7387-ac8b-16136fcb6175",
  behandlingId: "019a9714-9968-731e-8918-779b5d1e8727",
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
  beslutter: {
    ident: "Z994276",
    fornavn: "F_Z994276",
    etternavn: "E_Z994276",
    enhet: {
      navn: "IT-avdelingen",
      enhetNr: "2970",
      postadresse: "",
    },
  },
  person: {
    ident: "44827400804",
    id: "019a9714-9bc1-70c2-bdc9-1d1c9f89f519",
    fornavn: "STABIL",
    etternavn: "DYNAMO",
    fodselsdato: "1974-02-04",
    alder: 51,
    statsborgerskap: "FSM",
    kjonn: "KVINNE",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2025-11-18T14:08:20.989828",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["717502681", "717502657", "77777777777777"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-11-18T14:10:30.869",
      tittel: "Ferdig behandlet",
      behandler: {
        navn: "F_Z994276 E_Z994276",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-18T14:10:24.738",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z994276 E_Z994276",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-18T14:10:07.275",
      tittel: "Klar til kontroll",
      behandler: {
        navn: "F_Z994794 E_Z994794",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-18T14:08:30.189",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994794 E_Z994794",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-18T14:08:24.679",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: ["Innvilgelse", "Ordinær"],
  tilstand: "FERDIG_BEHANDLET",
  lovligeEndringer: {
    paaVentAarsaker: [],
    avbrytAarsaker: [],
  },
  soknadId: "079ad249-a99f-44c4-a779-d294ac7ea3a1",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
