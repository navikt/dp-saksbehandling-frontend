import { v4 as uuidv4 } from "uuid";
import { GraphQLClient } from "graphql-request";
import { getSaksbehandler } from "./saksbehandler.server";
import { type INetworkResponse } from "~/utils/types";
import { logger } from "~/utils/logger.utils";
import { graphql } from "../../graphql/generated/saf";
import type { JournalpostQuery } from "../../graphql/generated/saf/graphql";
import { getSAFOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";

export async function hentJournalpost(
  request: Request,
  journalpostId: string,
): Promise<INetworkResponse<JournalpostQuery["journalpost"]>> {
  const oboToken = await getSAFOboToken(request);
  const saksbehandler = await getSaksbehandler(request);

  const callId = uuidv4();
  const client = new GraphQLClient(getEnv("SAF_URL"), {
    headers: {
      Authorization: `Bearer ${oboToken}`,
      "Nav-User-Id": saksbehandler.onPremisesSamAccountName,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
    },
  });

  try {
    logger.info(`Henter dokumenter med call-id: ${callId}`);
    const response = await client.request(journalpostQuery, { journalpostId });

    return {
      status: "success",
      data: response.journalpost,
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Feil ved henting av dokumenter";
    logger.info(errorMessage);

    return {
      status: "error",
      error: {
        statusCode: 500,
        statusText: errorMessage,
      },
    };
  }
}

const journalpostQuery = graphql(`
  query journalpost($journalpostId: String!) {
    journalpost(journalpostId: $journalpostId) {
      journalpostId
      tittel
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
