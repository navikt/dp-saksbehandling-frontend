import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019df6848fd37128824390451b3cf219: components["schemas"]["Oppgave"] = {
  oppgaveId: "019df684-8fd3-7128-8243-90451b3cf219",
  behandlingId: "019df2f6-2738-77f3-b629-c54a0360c47b",
  person: {
    ident: "17869697486",
    id: "01993cc0-a8b3-740d-849e-22b6af8a2b5a",
    fornavn: "ERFAREN",
    etternavn: "STAFETT",
    fodselsdato: "1996-06-17",
    alder: 29,
    statsborgerskap: "NOR",
    kjonn: "KVINNE",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2026-05-04T00:00:00",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "FERIETILLEGG",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-05-05T07:02:55.968",
      tittel: "Ferdig behandlet",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-05-04T00:00:00",
      tittel: "Opprettet",
      behandler: {
        navn: "dp-saksbehandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: [
    {
      visningsnavn: "Ferietillegg",
      kategori: "BEHANDLET_HENDELSE_TYPE",
    },
  ],
  tilstand: "FERDIG_BEHANDLET",
  lovligeEndringer: {
    paaVentAarsaker: [],
    avbrytAarsaker: [],
    leggTilbakeAarsaker: [],
    returnerTilSaksbehandlingAarsaker: [],
    kvalitetskontrollAarsaker: [],
  },
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
