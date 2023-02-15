import { mockBruker } from "../../mock-data/mock-bruker";

export interface IBruker {
  forNavn: string;
  mellomNavn: string;
  etterNavn: string;
  fødselsDato: string;
  postAdresse?: IAdresse;
  folkeregistrertAdresse?: IAdresse;
  kontonummer?: string;
  banknavn?: string;
  bankLandkode?: string;
  ident: string;
}

export interface IAdresse {
  adresselinje1: string;
  adresselinje2: string;
  adresselinje3: string;
  byEllerStedsnavn?: string;
  landkode: string;
  land: string;
  postnummer: string;
  poststed: string;
}

export async function mockHentBruker(): Promise<IBruker> {
  return Promise.resolve(mockBruker);
}

export function hentBruker(onBehalfOfToken: string) {
  const url = `${process.env.API_BASE_URL}/personalia`;
  return fetch(url, {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${onBehalfOfToken}`,
    },
  });
}
