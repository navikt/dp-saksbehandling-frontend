import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019bb687f66e75cebb9fca28c190ace2: components["schemas"]["Oppgave"] = {
  oppgaveId: "019bb687-f66e-75ce-bb9f-ca28c190ace2",
  behandlingId: "019bb687-9786-751e-860b-8a122e5b689f",
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
    ident: "02498144171",
    id: "019bb687-f526-71db-88b9-1bf04b5c5471",
    fornavn: "ÆRLIG",
    etternavn: "KLIPPE",
    fodselsdato: "1981-09-02",
    alder: 44,
    statsborgerskap: "NOR",
    kjonn: "MANN",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2026-01-13T09:44:58.146973",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "SØKNAD",
  journalpostIder: ["717558852"],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-03-11T15:45:51.752",
      tittel: "Avbrutt",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
      body: "Behandles i Arena",
    },
    {
      type: "statusendring",
      tidspunkt: "2026-01-15T15:06:01.995",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z993298 E_Z993298",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-01-13T09:45:22.414",
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
      visningsnavn: "Behandles i Arena",
      kategori: "AVBRUTT_GRUNN",
    },
  ],
  tilstand: "KLAR_TIL_BEHANDLING",
  lovligeEndringer: {
    paaVentAarsaker: [],
    avbrytAarsaker: [],
    leggTilbakeAarsaker: [],
    returnerTilSaksbehandlingAarsaker: [],
    kvalitetskontrollAarsaker: [],
  },
  soknadId: "d5e2160c-bf80-473c-8118-8e13f2672cd4",
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
