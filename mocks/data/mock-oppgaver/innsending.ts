import type { components } from "../../../openapi/saksbehandling-typer";

export const innsending: components["schemas"]["Oppgave"] = {
  oppgaveId: "0199390e-3602-7b10-9402-77ca0d12d4ac",
  behandlingId: "0198c672-111d-7701-a986-76b0ca6b225d",
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
  tidspunktOpprettet: "2025-09-11T00:00:00",
  behandlingType: "INNSENDING",
  utlostAv: "INNSENDING",
  journalpostIder: ["55555555555555"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-09-11T15:54:16.734",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-09-11T15:54:16.707",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
  ],
  emneknagger: [],
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
    leggTilbakeAarsaker: ["MANGLER_KOMPETANSE", "HABILITET", "FRAVÆR", "ANNET"],
  },
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
