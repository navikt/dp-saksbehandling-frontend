import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019cc289f59b746c849bee996ed5764b: components["schemas"]["Oppgave"] = {
  oppgaveId: "019cc289-f59b-746c-849b-ee996ed5764b",
  behandlingId: "019cc289-ef99-7c16-89ae-f32218d3f1ac",
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
    ident: "08888496751",
    id: "019cc202-a65b-751f-a86d-bca65716d067",
    fornavn: "FERSK",
    etternavn: "FAMILIEBARNEHAGE",
    fodselsdato: "1984-08-08",
    alder: 41,
    statsborgerskap: "NOR",
    kjonn: "MANN",
    skjermesSomEgneAnsatte: false,
    adressebeskyttelseGradering: "UGRADERT",
    sikkerhetstiltak: [],
  },
  tidspunktOpprettet: "2026-03-06T00:00:00",
  behandlingType: "RETT_TIL_DAGPENGER",
  utlostAv: "REVURDERING",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-03-06T11:24:56.283",
      tittel: "Avbrutt",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
      body: "Annen avbruddsårsak",
    },
    {
      type: "statusendring",
      tidspunkt: "2026-03-06T10:45:51.121",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-03-06T10:45:47.165",
      tittel: "Klar til behandling",
      behandler: {
        navn: "dp-behandling",
        rolle: "system",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-03-06T00:00:00",
      tittel: "Opprettet",
      behandler: {
        navn: "dp-saksbehandling",
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
      visningsnavn: "Annen avbruddsårsak",
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
  meldingOmVedtakKilde: "DP_SAK",
  kontrollertBrev: "IKKE_RELEVANT",
};
