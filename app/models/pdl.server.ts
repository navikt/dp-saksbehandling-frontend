import { gql, GraphQLClient } from "graphql-request";
import { logger } from "server/logger";
import { v4 as uuidv4 } from "uuid";
import { getSaksbehandler } from "./auth.server";
import type { SessionWithOboProvider } from "@navikt/dp-auth";
import { getPDLOboToken } from "~/utils/auth.utils.server";
import { mockPerson } from "../../mock-data/mock-person";

export interface IPerson {
  ident: string;
  forNavn: string;
  mellomNavn: string | null;
  etterNavn: string;
  telefon: string;
  kontaktadresse: VegadresseDetails;
  bostedadresse: VegadresseDetails;
  statsborgerskap: string;
  utflyttingFraNorge?: Date;
  antallBarn: number;
}

export type HentPersonResponsData = {
  hentPerson: {
    navn: Personnavn[];
    statsborgerskap: Statsborgerskap[];
    telefonnummer: Telefon[];
    bostedsadresse: Bostedsadresse[];
    kontaktadresse: Kontaktadresse[];
    doedsfall: Doedsfall[];
    utflyttingFraNorge: UtflyttingFraNorge[];
    sikkerhetstiltak: Sikkerhetstiltak[];
    foreldreansvar: Foreldreansvar[];
  } | null;
};

export type Personnavn = {
  fornavn: string;
  mellomnavn: string | null;
  etternavn: string;
};

export type Statsborgerskap = {
  statsborgerskap: string;
};

export type Telefon = {
  nummer: string;
};

export type Bostedsadresse = {
  vegadresse: VegadresseDetails;
};

export type Kontaktadresse = {
  vegadresse: VegadresseDetails;
};

export type Doedsfall = {
  doedsdato?: Date;
};

export type UtflyttingFraNorge = {
  utflyttingsdato?: Date;
};

export type Sikkerhetstiltak = {
  tiltakstype: string;
};

export type Foreldreansvar = {
  ansvar?: string;
};

export type VegadresseDetails = {
  husnummer: string;
  adressenavn: string;
  postnummer: string;
};

export async function mockHentPerson(): Promise<IPerson> {
  return Promise.resolve(mockPerson);
}

export async function hentPersonalia(session: SessionWithOboProvider, ident: string) {
  const saksbehandler = await getSaksbehandler(session);
  const onBehalfOfToken = await getPDLOboToken(session);
  const pdlAdresse = "https://pdl-api.dev-fss-pub.nais.io/graphql";

  const personSpoerring = gql`
    query ($ident: ID!) {
      hentPerson(ident: $ident) {
        navn(historikk: false) {
          fornavn
          mellomnavn
          etternavn
        }
        statsborgerskap(historikk: false) {
          land
        }
        telefonnummer {
          nummer
        }
        bostedsadresse(historikk: false) {
          vegadresse {
            husnummer
            adressenavn
            postnummer
          }
        }
        kontaktadresse(historikk: false) {
          vegadresse {
            husnummer
            adressenavn
            postnummer
          }
        }
        doedsfall {
          doedsdato
        }
        utflyttingFraNorge {
          utflyttingsdato
        }
        sikkerhetstiltak {
          tiltakstype
        }
        foreldreansvar(historikk: false) {
          ansvar
        }
      }
    }
  `;

  const callId = uuidv4();
  const client = new GraphQLClient(pdlAdresse, {
    headers: {
      Authorization: `Bearer ${onBehalfOfToken}`,
      "Nav-User-Id": saksbehandler.onPremisesSamAccountName,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
      tema: "DAG",
      behandlingsnummer: "B286",
    },
  });
  logger.info(`Henter pdl informasjon med call-id: ${callId}`);
  return await client.request<HentPersonResponsData>(personSpoerring, { ident });
}
