import type { components } from "../../../openapi/saksbehandling-typer";

export const ordinær: components["schemas"]["Oppgave"] = {
  oppgaveId: "019a5898-c8a1-73f4-bb62-36a43550372b",
  behandlingId: "019a5898-c805-7a2f-bb17-25cb89f1eac4",
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
    ident: "Z990310",
    fornavn: "F_Z990310",
    etternavn: "E_Z990310",
    enhet: {
      navn: "IT-avdelingen",
      enhetNr: "2970",
      postadresse: "",
    },
  },
  person: {
    ident: "05868899613",
    id: "019a584d-97f6-767e-a755-1e3f060949d5",
    fornavn: "POSSESSIV",
    etternavn: "KVINNE",
    fodselsdato: "1988-06-05",
    alder: 37,
    statsborgerskap: "NOR",
    kjonn: "KVINNE",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2025-11-06T10:56:39.045817",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "MANUELL",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-11-27T09:12:02.743",
      tittel: "Ferdig behandlet",
      behandler: {
        navn: "F_Z990310 E_Z990310",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-27T09:06:28.822",
      tittel: "Under kontroll",
      behandler: {
        navn: "F_Z990310 E_Z990310",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-27T09:04:47.864",
      tittel: "Klar til kontroll",
      behandler: {
        navn: "F_Z990436 E_Z990436",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-06T12:42:57.764",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z990436 E_Z990436",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-06T10:56:39.201",
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
  },
  meldingOmVedtakKilde: "GOSYS",
  kontrollertBrev: "JA",
};
