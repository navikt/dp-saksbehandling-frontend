import type { components } from "../../../openapi/saksbehandling-typer";

export const generellOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "019a0001-0001-7001-a001-000000000001",
  behandlingId: "019a0001-0001-7001-a001-000000000002",
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
  tidspunktOpprettet: "2026-03-19T10:00:00",
  behandlingType: "GENERELL",
  utlostAv: "GENERELL",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-03-19T10:00:01",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-03-19T10:00:00",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-saksbehandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: ["MeldekortKorrigering"],
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
    leggTilbakeAarsaker: ["MANGLER_KOMPETANSE", "INHABILITET", "FRAVÆR", "ANNET"],
    returnerTilSaksbehandlingAarsaker: ["FEIL_UTFALL", "FEIL_HJEMMEL", "HAR_MANGLER", "ANNET"],
    kvalitetskontrollAarsaker: [
      "OPPLÆRING",
      "INNGRIPENDE_FOR_BRUKER",
      "KOMPLISERT_VURDERING",
      "SKJØNNSMESSIG_VURDERING",
      "ANNET",
      "TOTRINNSKONTROLL",
    ],
  },
  meldingOmVedtakKilde: "INGEN",
  kontrollertBrev: "IKKE_RELEVANT",
};
