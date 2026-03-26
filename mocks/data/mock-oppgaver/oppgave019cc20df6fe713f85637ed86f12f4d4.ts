import type { components } from "../../../openapi/saksbehandling-typer";

export const oppgave019cc20df6fe713f85637ed86f12f4d4: components["schemas"]["Oppgave"] = {
  oppgaveId: "019cc20d-f6fe-713f-8563-7ed86f12f4d4",
  behandlingId: "019cc20d-f4ee-7324-a608-5830d241fc2e",
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
  utlostAv: "MELDEKORT",
  journalpostIder: [],
  historikk: [
    {
      type: "statusendring",
      tidspunkt: "2026-03-06T08:31:18.919",
      tittel: "Ferdig behandlet",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-03-06T08:30:29.916",
      tittel: "Under behandling",
      behandler: {
        navn: "F_Z994714 E_Z994714",
        rolle: "saksbehandler",
      },
    },
    {
      type: "statusendring",
      tidspunkt: "2026-03-06T08:30:21.054",
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
  ],
  tilstand: "FERDIG_BEHANDLET",
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
