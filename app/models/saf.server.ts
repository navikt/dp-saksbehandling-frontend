import { GraphQLClient } from "graphql-request";
import { v4 as uuidv4 } from "uuid";

import { IAlert } from "~/context/alert-context";
import { getSaksbehandler } from "~/models/microsoft.server";
import { getSAFOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { logger } from "~/utils/logger.utils";
import { isSAFGraphqlError, isSAFRequestError } from "~/utils/type-guards";

import { graphql } from "../../graphql/generated/saf";
import type { JournalpostQuery } from "../../graphql/generated/saf/graphql";

export interface ISAFGraphqlError {
  errors: [
    {
      message: string;
      extensions: {
        code: "bad_request" | "forbidden" | "not_found" | "server_error";
        classification: string;
      };
    },
  ];
}

export interface ISAFRequestError {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
}

export async function hentJournalpost(
  request: Request,
  journalpostId: string,
): Promise<JournalpostQuery["journalpost"] | IAlert> {
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
    logger.error(error);

    if (isSAFRequestError(error)) {
      return {
        variant: "error",
        title: error.error,
        body: error.message,
        service: url,
      };
    }

    if (isSAFGraphqlError(error)) {
      const first = error.errors?.[0];
      return {
        variant: "error",
        title: first?.extensions.classification || "Ukjent feil",
        body: first?.message,
        service: url,
      };
    }

    return {
      variant: "error",
      title: "Ukjent feil",
      body: JSON.stringify(error),
      service: url,
    };
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
