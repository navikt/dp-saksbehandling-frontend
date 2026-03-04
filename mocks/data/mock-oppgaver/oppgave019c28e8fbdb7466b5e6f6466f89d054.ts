import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019c28e8fbdb7466b5e6f6466f89d054: components["schemas"]["Oppgave"] = {
  oppgaveId: "019c28e8-fbdb-7466-b5e6-f6466f89d054",
  behandlingId: "019c28d4-8633-7b7a-b67c-60dd74c7dba1",
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
  tidspunktOpprettet: "2026-02-04T14:25:42.587006",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "MANUELL",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-02-04T15:22:57.086",
      tittel: "Ferdig behandlet",
      behandler: {
        navn: "F_Z994276 E_Z994276",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-02-04T15:22:45.385",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z994276 E_Z994276",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-02-04T15:21:51.993",
      tittel: "Klar til kontroll",
      behandler: {
        navn: "F_Z994794 E_Z994794",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-02-04T14:48:20.165",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994794 E_Z994794",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-02-04T14:48:03.419",
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
  meldingOmVedtakKilde: "INGEN",
  kontrollertBrev: "IKKE_RELEVANT",
};
