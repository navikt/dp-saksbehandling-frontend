import type { components } from "../../../openapi/saksbehandling-typer";

export const arbeidsinntektAvslagGjenopptakIkkeRegistrertOppholdUtlandOrdinærReellArbeidssøkerVerneplikt: components["schemas"]["Oppgave"] =
  {
    oppgaveId: "019a81e8-c31e-707d-9dbc-d3c8d79940d2",
    behandlingId: "019a81e3-99ab-7951-8dd1-614c3b5bcf48",
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
      ident: "07430195322",
      id: "01973ec2-9967-7e84-baf8-d76c9785d42e",
      fornavn: "DYNAMISK",
      etternavn: "RØYSKATT",
      fodselsdato: "1991-03-07",
      alder: 34,
      statsborgerskap: "NOR",
      kjonn: "MANN",
      skjermesSomEgneAnsatte: false,
      adressebeskyttelseGradering: "UGRADERT",
      sikkerhetstiltak: [],
    },
    tidspunktOpprettet: "2025-11-14T11:22:48.261251",
    behandlingType: "RETT_TIL_DAGPENGER",
    utlostAv: "SØKNAD",
    journalpostIder: ["717502480"],
    historikk: [
      {
        type: "statusendring",
        tidspunkt: "2025-11-18T13:50:39.844",
        tittel: "Under behandling",
        behandler: {
          navn: "F_Z993298 E_Z993298",
          rolle: "saksbehandler",
        },
      },
      {
        type: "statusendring",
        tidspunkt: "2025-11-17T10:23:40.589",
        tittel: "Klar til behandling",
        behandler: {
          navn: "F_Z990436 E_Z990436",
          rolle: "saksbehandler",
        },
      },
      {
        type: "statusendring",
        tidspunkt: "2025-11-17T09:49:27.138",
        tittel: "Under behandling",
        behandler: {
          navn: "F_Z990436 E_Z990436",
          rolle: "saksbehandler",
        },
      },
      {
        type: "statusendring",
        tidspunkt: "2025-11-14T11:28:26.526",
        tittel: "Klar til behandling",
        behandler: {
          navn: "dp-behandling",
          rolle: "system",
        },
      },
    ],
    emneknagger: [
      "Arbeidsinntekt",
      "Avslag",
      "Gjenopptak",
      "Ikke registrert",
      "Opphold utland",
      "Ordinær",
      "Reell arbeidssøker",
      "Verneplikt",
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
    },
    soknadId: "67b4363d-0d67-4f1b-b33d-689335bc137f",
    meldingOmVedtakKilde: "DP_SAK",
    kontrollertBrev: "IKKE_RELEVANT",
  };
