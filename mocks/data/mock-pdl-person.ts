import type { HentPersonQuery, Vegadresse } from "../../graphql/generated/pdl/graphql";

const vegadresse: Vegadresse = {
  husnummer: "111",
  adressenavn: "Apalveien",
  postnummer: "1337",
};

export const mockPdlPerson: HentPersonQuery["hentPerson"] = {
  doedsfall: [],
  foreldreansvar: [],
  sikkerhetstiltak: [],
  utflyttingFraNorge: [],
  statsborgerskap: [
    {
      land: "Norge",
    },
  ],
  bostedsadresse: [
    {
      vegadresse: vegadresse,
    },
  ],
  navn: [
    {
      fornavn: "Donald",
      mellomnavn: null,
      etternavn: "Duck",
    },
  ],
  kontaktadresse: [
    {
      vegadresse: vegadresse,
    },
  ],
  telefonnummer: [{ nummer: "90010200" }],
};
