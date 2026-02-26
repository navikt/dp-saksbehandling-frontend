import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019b2ccd885d71eb8977f453029fd5b4: components["schemas"]["Oppgave"] = {
  oppgaveId: "019b2ccd-885d-71eb-8977-f453029fd5b4",
  behandlingId: "019b2ccd-878b-754a-b941-507d4da5ab71",
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
  tidspunktOpprettet: "2025-12-17T15:53:45.745039",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "MELDEKORT",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-12-17T15:54:51.244",
      tittel: "Ferdig behandlet",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-12-17T15:54:29.014",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-12-17T15:53:45.949",
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
    paaVentAarsaker: [],
    avbrytAarsaker: [],
    leggTilbakeAarsaker: [],
    returnerTilSaksbehandlingAarsaker: ["FEIL_UTFALL", "FEIL_HJEMMEL", "HAR_MANGLER", "ANNET"],
  },
  meldingOmVedtakKilde: "INGEN",
  kontrollertBrev: "IKKE_RELEVANT",
};
