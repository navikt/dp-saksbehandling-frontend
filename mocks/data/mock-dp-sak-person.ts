import { components } from "../../openapi/saksbehandling-typer";

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
  saker: [],
  oppgaver: [],
};
