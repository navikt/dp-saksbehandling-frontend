import type { components } from "../../../openapi/saksbehandling-typer";

export const ordinærAvslagReellArbeidssøker: components["schemas"]["Oppgave"] = {
  oppgaveId: "019a723b-643a-7179-8259-0b1142683727",
  behandlingId: "019a71dd-03ab-7fbe-9714-c9472667f87c",
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
    ident: "28528148753",
    id: "01987a1a-f073-79f4-b7c9-32b50f1f6243",
    fornavn: "SLAPP",
    etternavn: "BROSME",
    fodselsdato: "1981-12-28",
    alder: 43,
    statsborgerskap: "NOR",
    kjonn: "MANN",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2025-11-11T08:41:41.164459",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["717289583"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2025-11-11T14:08:40.07",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2025-11-11T10:24:46.266",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: ["Avslag", "Ordinær", "Reell arbeidssøker"],
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
  soknadId: "037231f5-0511-410c-8a96-00223aba5e3c",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
