import { GraphQLClient, gql } from "graphql-request";
import { logger } from "server/logger";
import { v4 as uuidv4 } from "uuid";
import { getAzureSession } from "~/utils/auth.utils.server";
import { authorizeUser } from "./auth.server";

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

export async function hentPDL(request: Request, ident: string) {
  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }
  const pdlAdresse = "https://pdl-api.dev-fss-pub.nais.io/graphql";
  console.log("PDL SUBMIT");
  const saksbehandler = await authorizeUser(request);

  //todo: spør om tilgang for audience i prod
  const token = await session.apiToken("api://dev-fss.pdl.pdl-api/.default");

  if (!token || !saksbehandler) {
    throw new Response("Unauthorized", { status: 401 });
  }
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
      Authorization: `Bearer ${token}`,
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
