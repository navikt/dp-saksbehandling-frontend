import { GraphQLClient } from "graphql-request";
import { v4 as uuidv4 } from "uuid";

import { getSaksbehandler } from "~/models/microsoft.server";
import { getSAFOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { logger } from "~/utils/logger.utils";

import { graphql } from "../../graphql/generated/saf";
import type { JournalpostQuery } from "../../graphql/generated/saf/graphql";

export async function hentJournalpost(
  request: Request,
  journalpostId: string,
): Promise<JournalpostQuery["journalpost"]> {
  const oboToken = await getSAFOboToken(request);
  const saksbehandler = await getSaksbehandler(request);

  const callId = uuidv4();
  const url = `${getEnv("SAF_URL")}/graphql`;
  const client = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${oboToken}`,
      connection: "keep-alive",
      "Nav-User-Id": saksbehandler.onPremisesSamAccountName,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
    },
  });

  try {
    logger.info(`Henter dokumenter med call-id: ${callId}`);
    const response = await client.request(journalpostQuery, { journalpostId });

    return response.journalpost;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Feil ved henting av dokumenter";
    logger.error(errorMessage);

    throw new Response(`Feil ved kall til ${url}`, {
      status: 500,
      statusText: errorMessage,
    });
  }
}

const journalpostQuery = graphql(`
  query journalpost($journalpostId: String!) {
    journalpost(journalpostId: $journalpostId) {
      journalpostId
      tittel
      datoOpprettet
      dokumenter {
        dokumentInfoId
        tittel
        brevkode
        originalJournalpostId
        dokumentvarianter {
          variantformat
          saksbehandlerHarTilgang
          skjerming
        }
      }
    }
  }
`);
