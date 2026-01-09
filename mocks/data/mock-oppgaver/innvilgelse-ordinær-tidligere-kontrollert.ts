import type { components } from "../../../openapi/saksbehandling-typer";

export const innvilgelseOrdinærTidligereKontrollert: components["schemas"]["Oppgave"] = {
  oppgaveId: "01993817-55d6-7409-b117-04c38f110ddc",
  behandlingId: "01993817-439e-7d3d-9d8a-78cf49ed6fc1",
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
    ident: "Z993809",
    fornavn: "F_Z993809",
    etternavn: "E_Z993809",
    enhet: {
      navn: "IT-avdelingen",
      enhetNr: "2970",
      postadresse: "",
    },
  },
  person: {
    ident: "13856996896",
    id: "01993817-45bf-721f-a140-c8044e2bf059",
    fornavn: "KALD",
    etternavn: "MORENE",
    fodselsdato: "1969-05-13",
    alder: 56,
    statsborgerskap: "NOR",
    kjonn: "KVINNE",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2025-09-11T11:24:32.799021",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["717265620", "717265621"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-11-20T14:49:42.583",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z993809 E_Z993809",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-20T14:25:05.142",
      tittel: "Klar til kontroll",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-18T13:59:53.413",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z994854 E_Z994854",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-18T13:58:40.339",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "notat",
      tidspunkt: "2025-09-18T13:58:40.2545",
      tittel: "Notat",
      behandler: {
        navn: "F_Z994854 E_Z994854",
        rolle: "saksbehandler",
      },
      body: "Bare yull i brevet da",
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-18T13:56:59.035",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z994854 E_Z994854",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-18T13:56:35.375",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "notat",
      tidspunkt: "2025-09-18T13:56:32.822332",
      tittel: "Notat",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
      body: "Her må du fikse noe saker!",
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-18T13:56:19.116",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-18T13:56:12.932",
      tittel: "Klar til kontroll",
      behandler: {
        navn: "F_Z994854 E_Z994854",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-11T11:25:05.625",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994854 E_Z994854",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-11T11:24:37.463",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: ["Innvilgelse", "Ordinær"],
  tilstand: "UNDER_KONTROLL",
  lovligeEndringer: {
    paaVentAarsaker: [],
    avbrytAarsaker: [],
  },
  soknadId: "0de73f03-5a38-43f3-960c-1d66e586ce8f",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
