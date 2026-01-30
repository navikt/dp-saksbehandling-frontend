import type { components } from "../../../openapi/saksbehandling-typer";

export const ordinærVernepliktAvslagIkkeRegistrertMinsteinntekt: components["schemas"]["Oppgave"] =
  {
    oppgaveId: "01997540-1b3b-7756-ae1d-946dba3e81a9",
    behandlingId: "01997540-0ad3-763a-aa60-21546135aa57",
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
      ident: "02479329608",
      id: "01997540-01b0-740f-8bb5-c170dc805f26",
      fornavn: "UFORGJENGELIG",
      etternavn: "SUPPE",
      fodselsdato: "1993-07-02",
      alder: 32,
      statsborgerskap: "NOR",
      kjonn: "KVINNE",
      skjermesSomEgneAnsatte: false,
      adressebeskyttelseGradering: "UGRADERT",
      sikkerhetstiltak: [],
    },
    tidspunktOpprettet: "2025-09-23T08:25:55.412442",
    behandlingType: "RETT_TIL_DAGPENGER",
    utlostAv: "SØKNAD",
    journalpostIder: ["717267989"],
    historikk: [
      {
        type: "notat",
        tidspunkt: "2026-01-12T12:31:49.292923",
        tittel: "Notat",
        behandler: {
          navn: "F_Z993298 E_Z993298",
          rolle: "saksbehandler",
        },
        body: "asd",
      },
      {
        type: "statusendring",
        tidspunkt: "2025-11-27T13:54:40.025",
        tittel: "Under kontroll",
        behandler: {
          navn: "F_Z993298 E_Z993298",
          rolle: "saksbehandler",
        },
      },
      {
        type: "statusendring",
        tidspunkt: "2025-11-27T13:54:12.528",
        tittel: "Klar til kontroll",
        behandler: {
          navn: "F_Z993622 E_Z993622",
          rolle: "saksbehandler",
        },
      },
      {
        type: "statusendring",
        tidspunkt: "2025-09-23T09:19:50.097",
        tittel: "Under behandling",
        behandler: {
          navn: "F_Z993622 E_Z993622",
          rolle: "saksbehandler",
        },
      },
      {
        type: "statusendring",
        tidspunkt: "2025-09-23T08:25:59.611",
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
        visningsnavn: "Verneplikt",
        kategori: "RETTIGHET",
      },
      {
        visningsnavn: "Avslag",
        kategori: "SOKNADSRESULTAT",
      },
      {
        visningsnavn: "Ikke registrert",
        kategori: "AVSLAGSGRUNN",
      },
      {
        visningsnavn: "Minsteinntekt",
        kategori: "AVSLAGSGRUNN",
      },
    ],
    tilstand: "UNDER_KONTROLL",
    notat: {
      tekst: "asd",
      sistEndretTidspunkt: "2026-01-12T12:31:49.292923",
    },
    lovligeEndringer: {
      paaVentAarsaker: [],
      avbrytAarsaker: [],
    },
    soknadId: "ac4b34e5-8d8e-4410-a321-6123a99e56fb",
    meldingOmVedtakKilde: "DP_SAK",
    kontrollertBrev: "IKKE_RELEVANT",
  };
