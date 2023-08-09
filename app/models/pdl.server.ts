import { GraphQLClient, gql } from "graphql-request";
import { logger } from "server/logger";
import { v4 as uuidv4 } from "uuid";
import { getAzureSession } from "~/utils/auth.utils.server";
import { authorizeUser } from "./auth.server";
import { json } from "@remix-run/node";

export interface IPDLHentPersonRespons {
  errors?: [{ message: string }];
  data: HentPersonResponsData;
}

export type HentPersonResponsData = {
  hentPerson: { navn: Personnavn[] };
};

export type Personnavn = {
  fornavn: string;
  mellomnavn: string | null;
  etternavn: string;
};

export async function hentPDL(request: Request, ident: string) {
  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }
  const pdlAdresse = "https://pdl-api.dev-fss-pub.nais.io/graphql";
  console.log("PDL SUBMIT");
  const saksbehandler = await authorizeUser(request);

  //todo: denne kommer til å kresje hardt (til nærmeste errorboundary)
  // hvis applikasjonen ikke er autorisert å være audience hos pdl api i dev/prod
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
    },
  });

  try {
    logger.info(`Henter pdl informasjon med call-id: ${callId}`);
    const data = await client.request<IPDLHentPersonRespons>(personSpoerring, { ident });
    // TODO Fiks typer på graphql
    // Graphql returnerer et object med property journalpost som inneholder en journalpost.
    // @ts-ignore
    return json({ ...data });
  } catch (error: unknown) {
    logger.warn(`Feil fra PDL med call-id ${callId}: ${error}`);
    if (error instanceof Error) {
      //todo: greie å lese errorobjektet som graphql error, eksempel:
      //Error: tekst: {"response":{"errors":[{"message":"Tilgang til ressurs (journalpost/dokument) ble avvist.","extensions":{"code":"forbidden","classification":"ExecutionAborted"}}],"data":"xxx"}}
      throw new Response(null, {
        status: 500,
        statusText: `Feil ved henting av pdl, debug: ${error.message}`,
      });
    }
    throw new Response(`Feil ved henting av pdl.`, { status: 500 });
  }
}
