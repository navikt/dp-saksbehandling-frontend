import type { components } from "../../../openapi/saksbehandling-typer";

export const generellAdresseendringOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "019a0002-0002-7002-a002-000000000001",
  behandlingId: "019a0002-0002-7002-a002-000000000002",
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
    ident: "12345678901",
    id: "01993817-45bf-721f-a140-c8044e2bf060",
    fornavn: "TUNG",
    etternavn: "FJELLTOPP",
    fodselsdato: "1985-07-22",
    alder: 40,
    statsborgerskap: "NOR",
    kjonn: "MANN",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2026-03-18T14:30:00",
  behandlingType: "GENERELL",
  utlostAv: "GENERELL",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-03-18T14:30:01",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-03-18T14:30:00",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-saksbehandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: [{ visningsnavn: "Adresseendring", kategori: "UDEFINERT" }],
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
