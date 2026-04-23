import type { components } from "../../../openapi/saksbehandling-typer";

export const oppfolging: components["schemas"]["Oppgave"] = {
  oppgaveId: "0199390e-3602-7b10-9402-77ca0d12e5ff",
  behandlingId: "0198c672-333d-7701-a986-76b0ca6b225d",
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
  tidspunktOpprettet: "2025-09-15T00:00:00",
  behandlingType: "OPPFØLGING",
  utlostAv: "OPPFØLGING",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-09-15T10:30:00.000",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-15T10:29:00.000",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
  ],
  emneknagger: [
    {
      visningsnavn: "Inntektssjekk",
      kategori: "RETTIGHET",
    },
    {
      visningsnavn: "Avventer ny informasjon",
      kategori: "OPPFOLGING_ARSAK",
    },
  ],
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
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
