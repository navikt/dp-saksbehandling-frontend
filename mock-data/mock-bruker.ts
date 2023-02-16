import type { IBruker } from "~/models/bruker.server";

export const mockBruker: IBruker = {
  postAdresse: {
    adresselinje1: "Vestfaret 11",
    adresselinje2: "",
    adresselinje3: "",
    postnummer: "1719",
    poststed: "Greåker",
    landkode: "NO",
    land: "NORGE",
  },
  forNavn: "PRATSOM",
  mellomNavn: "MOCKDATA",
  etterNavn: "GALOPP",
  fødselsDato: "1977-03-12",
  folkeregistrertAdresse: {
    adresselinje1: "Vestfaret 11",
    adresselinje2: "",
    adresselinje3: "",
    postnummer: "1719",
    poststed: "Greåker",
    landkode: "NO",
    land: "NORGE",
  },
  ident: "12837798289",
};
