import { GraphQLClient } from "graphql-request";
import { v4 as uuidv4 } from "uuid";
import { getSaksbehandler } from "./saksbehandler.server";
import { getPDLOboToken } from "~/utils/auth.utils.server";
import { logger } from "~/utils/logger.utils";
import { graphql } from "../../graphql/generated/pdl";

export async function hentPersonalia(request: Request, ident: string) {
  const saksbehandler = await getSaksbehandler(request);
  const onBehalfOfToken = await getPDLOboToken(request);

  const hentPersonQuery = graphql(`
    query hentPerson($ident: ID!) {
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
          utenlandskAdresse {
            adressenavnNummer
            bygningEtasjeLeilighet
            postboksNummerNavn
            postkode
            bySted
            regionDistriktOmraade
            landkode
          }
          utenlandskAdresseIFrittFormat {
            adresselinje1
            adresselinje2
            adresselinje3
            postkode
            byEllerStedsnavn
            landkode
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
  `);

  const pdlAdresse = "https://pdl-api.dev-fss-pub.nais.io/graphql";
  const callId = uuidv4();
  const client = new GraphQLClient(pdlAdresse, {
    headers: {
      Authorization: `Bearer ${onBehalfOfToken}`,
      connection: "keep-alive",
      "Nav-User-Id": saksbehandler.onPremisesSamAccountName,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
      tema: "DAG",
      behandlingsnummer: "B286",
    },
  });
  logger.info(`Henter pdl informasjon med call-id: ${callId}`);

  return await client.request(hentPersonQuery, { ident });
}
