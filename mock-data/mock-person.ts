import type { IPerson } from "~/models/pdl.server";

export const mockPerson: IPerson = {
  antallBarn: 0,
  bostedadresse: {
    husnummer: "111",
    adressenavn: "Apalveien",
    postnummer: "1337",
  },
  forNavn: "Donald",
  mellomNavn: null,
  etterNavn: "Duck",
  ident: "12345678910",
  kontaktadresse: {
    husnummer: "111",
    adressenavn: "Apalveien",
    postnummer: "1337",
  },
  statsborgerskap: "Norge",
  telefon: "90010200",
};
