import { mockPerson } from "../../mock-data/mock-person";

export interface IPerson {
  ident: string;
  forNavn: string;
  mellomNavn: string;
  etterNavn: string;
}

export async function mockHentPerson(): Promise<IPerson> {
  return Promise.resolve(mockPerson);
}
