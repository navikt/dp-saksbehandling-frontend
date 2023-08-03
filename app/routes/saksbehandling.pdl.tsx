import { Form, useActionData } from "@remix-run/react";
import { Alert, BodyLong, Button, TextField } from "@navikt/ds-react";
import styles from "~/route-styles/vilkaar.module.css";
import classNames from "classnames";
import { type ActionArgs, json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getAzureSession } from "~/utils/auth.utils.server";
import { gql, GraphQLClient } from "graphql-request";
import { authorizeUser } from "~/models/auth.server";
import { v4 as uuidv4 } from "uuid";
import { logger } from "../../server/logger";

export async function action({ request }: ActionArgs) {
  //todo: gjøre noe greier/mockz her lokalt?
  const session = await getAzureSession(request);

  if (!session) {
    throw new Error("Feil ved henting av sesjon");
  }
  const pdlAdresse = "https://pdl-api.dev-fss-pub.nais.io/graphql";
  console.log("PDL SUBMIT");
  const formData = await request.formData();
  const ident = formData.get("oppslagsnummer");
  invariant(ident, "greide ikke lese formdata");
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
  interface Data {
    hentPerson: { navn: { fornavn: string; mellomnavn: string; etternavn: string }[] };
  }
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
    const data = await client.request<Data>(personSpoerring, { ident });
    // TODO Fiks typer på graphql
    // Graphql returnerer et object med property journalpost som inneholder en journalpost.
    // @ts-ignore
    return json({ ...data });
  } catch (error: unknown) {
    logger.warn(`Feil fra PDL med call-id ${callId}: ${error}`);
    if (error instanceof Error) {
      //todo: greie å lese errorobjektet som graphql error, eksempel:
      //Error: tekst: {"response":{"errors":[{"message":"Tilgang til ressurs (journalpost/dokument) ble avvist.","extensions":{"code":"forbidden","classification":"ExecutionAborted"}}],"data":"xxx"}}
      throw new Response(`Feil ved henting av pdl, debug: ${error.message}`, {
        status: 500,
      });
    }
    throw new Response(`Feil ved henting av pdl.`, { status: 500 });
  }
}

export default function Pdl() {
  const data = useActionData<typeof action>();
  return (
    <>
      <main className={classNames(styles.container)}>
        <div>
          <Alert variant={"warning"}>Ikke bruk denne lokalt</Alert>
          <Form key={"pdl"} method={"POST"}>
            <TextField
              type={"number"}
              name={"oppslagsnummer"}
              label={"Personnummer du vil slå opp"}
            ></TextField>
            <br />
            <Button>Slå opp</Button>
          </Form>
          <BodyLong>
            Navn: {data?.hentPerson.navn[0].fornavn} {data?.hentPerson.navn[0].etternavn}
          </BodyLong>
        </div>
      </main>
    </>
  );
}
