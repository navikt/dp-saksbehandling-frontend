import type { components } from "../../../openapi/saksbehandling-typer";

export const generellAdresseendringOppgave: components["schemas"]["Oppgave"] = {
  oppgaveId: "019a0002-0002-7002-a002-000000000001",
  behandlingId: "019a0002-0002-7002-a002-000000000002",
  saksbehandler: undefined,
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
      tidspunkt: "2026-03-18T14:30:00",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-saksbehandling",
        rolle: "system",
      },
    },
  ],
  emneknagger: [{ visningsnavn: "Adresseendring", kategori: "UDEFINERT" }],
  tilstand: "KLAR_TIL_BEHANDLING",
  lovligeEndringer: {
    paaVentAarsaker: [],
    avbrytAarsaker: [],
    leggTilbakeAarsaker: [],
    returnerTilSaksbehandlingAarsaker: [],
    kvalitetskontrollAarsaker: [],
  },
  meldingOmVedtakKilde: "INGEN",
  kontrollertBrev: "IKKE_RELEVANT",
};
