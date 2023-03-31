import { personListeMock } from "../../mock-data/mock-person";

export interface IPerson {
  ident: string;
  forNavn: string;
  mellomNavn: string;
  etterNavn: string;
}

export async function mockHentPerson(ident: string): Promise<IPerson> {
  const person = personListeMock.find((person) => person.ident === ident);

  if (!person) {
    return Promise.resolve({ ...personListeMock[0], ident: ident }); // temp fix for å tillate faktisk uthenting av person i dev
    //throw new Error("Klarte ikke henter person");
  }

  return Promise.resolve(person);
}
