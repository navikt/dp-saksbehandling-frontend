import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019b9cf5580377b3b9db2195d8101a55: components["schemas"]["Oppgave"] = {
  oppgaveId: "019b9cf5-5803-77b3-b9db-2195d8101a55",
  behandlingId: "019b9cf5-56da-726e-bfee-b4d4847a6bde",
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
    ident: "24838299217",
    id: "019b2cbf-a28c-758a-b64e-ad9e1377d5c5",
    fornavn: "TILFELDIG",
    etternavn: "BARON",
    fodselsdato: "1982-03-24",
    alder: 43,
    statsborgerskap: "NOR",
    kjonn: "KVINNE",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2026-01-08T10:34:42.907414",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "MANUELL",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-01-08T11:16:09.028",
      tittel: "Ferdig behandlet",
      behandler: {
        navn: "F_Z994276 E_Z994276",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-01-08T11:16:03.722",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z994276 E_Z994276",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-01-08T11:15:52.37",
      tittel: "Klar til kontroll",
      behandler: {
        navn: "F_Z994794 E_Z994794",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-01-08T10:35:01.142",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994794 E_Z994794",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-01-08T10:34:43.203",
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
  ],
  tilstand: "FERDIG_BEHANDLET",
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
    leggTilbakeAarsaker: ["MANGLER_KOMPETANSE", "INHABILITET", "FRAVÆR", "ANNET"],
    returnerTilSaksbehandlingAarsaker: ["FEIL_UTFALL", "FEIL_HJEMMEL", "HAR_MANGLER", "ANNET"],
    kvalitetskontrollAarsaker: [
      "OPPLÆRING",
      "INNGRIPENDE_FOR_BRUKER",
      "KOMPLISERT_VURDERING",
      "SKJØNNSMESSIG_VURDERING",
      "ANNET",
    ],
  },
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
