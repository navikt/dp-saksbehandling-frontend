import type { components } from "../../../openapi/saksbehandling-typer";

export const vernepliktOrdinærInnvilgelseGjenopptak: components["schemas"]["Oppgave"] = {
  oppgaveId: "019b9dad-fbb9-777b-94fa-33f01dfa6bb0",
  behandlingId: "019b9d9a-0239-70fb-9962-4ddd56d3d266",
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
  tidspunktOpprettet: "2026-01-08T13:34:34.703999",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["717556510"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-02-05T08:04:13.603",
      tittel: "Avbrutt",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-02-05T08:04:03.276",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-02-05T08:03:57.017",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-02-04T15:23:34.135",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993212 E_Z993212",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-02-04T14:17:40.655",
      tittel: "Klar til behandling",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-01-08T13:59:03.811",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994794 E_Z994794",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-01-08T13:56:23.737",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: [
    {
      visningsnavn: "Verneplikt",
      kategori: "RETTIGHET",
    },
    {
      visningsnavn: "Ordinær",
      kategori: "RETTIGHET",
    },
    {
      visningsnavn: "Innvilgelse",
      kategori: "SOKNADSRESULTAT",
    },
    {
      visningsnavn: "Gjenopptak",
      kategori: "GJENOPPTAK",
    },
  ],
  tilstand: "KLAR_TIL_BEHANDLING",
  lovligeEndringer: {
    paaVentAarsaker: [],
    avbrytAarsaker: [],
  },
  soknadId: "61dab51a-9a1c-4117-b143-930a650d2ca4",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
