import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019a492dd283731d83a2a4f36df00502: components["schemas"]["Oppgave"] = {
  oppgaveId: "019a492d-d283-731d-83a2-a4f36df00502",
  behandlingId: "019a492d-aa06-7c8b-841a-3378bce87b27",
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
    ident: "15837399782",
    id: "019a492d-ac06-72f9-b356-e9633b0f1414",
    fornavn: "LEGITIM",
    etternavn: "HALVMETER",
    fodselsdato: "1973-03-15",
    alder: 52,
    statsborgerskap: "NOR",
    kjonn: "MANN",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2025-11-03T11:05:20.775636",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["717283880"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-11-11T13:05:21.366",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-11T13:03:45.355",
      tittel: "Klar til kontroll",
      behandler: {
        navn: "F_Z993809 E_Z993809",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-11T13:03:16.837",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993809 E_Z993809",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-11T09:44:38.666",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z993809 E_Z993809",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-03T11:09:45.739",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993809 E_Z993809",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-03T11:05:31.139",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: [
    {
      visningsnavn: "Ordinær",
      kategori: "RETTIGHET",
    },
    {
      visningsnavn: "Innvilgelse",
      kategori: "SOKNADSRESULTAT",
    },
  ],
  tilstand: "UNDER_KONTROLL",
  lovligeEndringer: {
    paaVentAarsaker: [],
    avbrytAarsaker: [],
  },
  soknadId: "c72ecdf9-1103-415a-ba99-fd1d94b4dc40",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
