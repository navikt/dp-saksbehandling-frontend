import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019b2cbfa883718c8ad3eecfc980ffd7: components["schemas"]["Oppgave"] = {
  oppgaveId: "019b2cbf-a883-718c-8ad3-eecfc980ffd7",
  behandlingId: "019b2cbf-a124-77ab-8944-496c1856f599",
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
  beslutter: {
    ident: "Z993298",
    fornavn: "F_Z990599",
    etternavn: "E_Z990599",
    enhet: {
      navn: "IT-avdelingen",
      enhetNr: "2970",
      postadresse: "",
    },
  },
  person: {
    ident: "24838299217",
    id: "019b2cbf-a28c-758a-b64e-ad9e1377d5c5",
    fornavn: "TILFELDIG",
    etternavn: "BARON",
    fodselsdato: "1982-03-24",
    alder: 44,
    statsborgerskap: "NOR",
    kjonn: "KVINNE",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
    erNodbremset: false,
  },
  tidspunktOpprettet: "2025-12-17T15:38:34.789597",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["717550198", "717550199"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-12-17T15:52:01.34",
      tittel: "Ferdig behandlet",
      behandler: {
        navn: "F_Z990599 E_Z990599",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-12-17T15:51:33.058",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z990599 E_Z990599",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-12-17T15:51:09.408",
      tittel: "Klar til kontroll",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-12-17T15:39:24.958",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-12-17T15:38:36.675",
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
    leggTilbakeAarsaker: [],
    returnerTilSaksbehandlingAarsaker: [],
    kvalitetskontrollAarsaker: [],
  },
  soknadId: "e834ef80-00b3-46d8-998b-686054309444",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
