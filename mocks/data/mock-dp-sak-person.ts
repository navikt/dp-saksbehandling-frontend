import { components } from "../../openapi/saksbehandling-typer";
import { mockListeOppgaver } from "./mock-liste-oppgaver";

export const mockSikkerhetstiltak: components["schemas"]["Sikkerhetstiltak"][] = [
  { beskrivelse: "To i samtale", gyldigTom: "2025-12-01" },
  { beskrivelse: "Ikke fysisk", gyldigTom: "2025-12-01" },
];

export const mockPerson: components["schemas"]["Person"] = {
  alder: 74,
  id: "016969b5-3ee6-7693-8fdd-649153c18f74",
  fodselsdato: "12.01.1954",
  kjonn: "MANN",
  statsborgerskap: "Norsk",
  fornavn: "Donald",
  mellomnavn: "Dægg",
  etternavn: "Duck",
  ident: "12345678910",
  sikkerhetstiltak: mockSikkerhetstiltak,
  skjermesSomEgneAnsatte: false,
  adressebeskyttelseGradering: "UGRADERT",
};

export const mockPersonOversikt: components["schemas"]["PersonOversikt"] = {
  person: mockPerson,
  oppgaver: mockListeOppgaver,
  saker: [
    {
      id: "01979c1e-9005-76d8-8efa-99370d5e77e5",
      behandlinger: [
        {
          id: "0197a0f3-c587-760e-9966-ab336f85c63a",
          behandlingType: "KLAGE",
          opprettet: "2025-06-24T00:00:00",
          oppgaveId: "0197a0f3-c61e-76d3-9e15-1a1605df602a",
        },
        {
          id: "01979c1e-8f4f-772c-98a8-286eac985cbf",
          behandlingType: "RETT_TIL_DAGPENGER",
          opprettet: "2025-06-23T11:28:57.936476",
          oppgaveId: "01979c1e-a0f7-7d33-88ae-d30dc573002e",
        },
      ],
    },
    {
      id: "01979c85-adb5-7b7a-b67d-4265b3b88e81",
      behandlinger: [
        {
          id: "01979c85-ac69-78b2-a880-c38a86d583cf",
          behandlingType: "RETT_TIL_DAGPENGER",
          opprettet: "2025-06-23T13:21:35.602787",
          oppgaveId: "01979c85-ce5c-7e04-9a2e-c5bb762ef12d",
        },
      ],
    },
  ],
};
