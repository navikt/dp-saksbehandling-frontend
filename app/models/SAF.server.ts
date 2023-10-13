import { logger, sikkerLogger } from "../../server/logger";
import { v4 as uuidv4 } from "uuid";
import { gql, GraphQLClient } from "graphql-request";
import { getSaksbehandler, getSession } from "./auth.server";
import { getEnv } from "~/utils/env.utils";
import { mockJournalpost } from "../../mock-data/mock-journalpost";
import { type INetworkResponse } from "~/utils/types";

export interface IJournalpost {
  journalpostId: string;
  tittel: string;
  dokumenter: IJournalpostDokument[];
}

interface IJournalpostDokument {
  dokumentInfoId: string;
  tittel: string;
  brevkode: string;
  originalJournalpostId: string;
  dokumentvarianter: IJournalpostDokumentvariant[];
}

interface IJournalpostDokumentvariant {
  variantformat: string | null;
  saksbehandlerHarTilgang: boolean;
  skjerming: string | null;
}

export async function hentJournalpost(
  request: Request,
  journalpostId: string,
): Promise<INetworkResponse<IJournalpost>> {
  if (getEnv("IS_LOCALHOST") === "true") {
    return {
      status: "success",
      data: mockJournalpost,
    };
  }

  const session = await getSession(request);
  const saksbehandler = await getSaksbehandler(session);
  const token = await session.apiToken("api://dev-fss.teamdokumenthandtering.saf-q1/.default");

  if (!token || !saksbehandler) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const callId = uuidv4();
  const client = new GraphQLClient("https://saf.dev-fss-pub.nais.io/graphql", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Nav-User-Id": saksbehandler.onPremisesSamAccountName,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
    },
  });

  try {
    logger.info(`Henter dokumenter med call-id: ${callId}`);
    const response = await client.request(journalpostGrapqlQuery, { journalpostId });
    // TODO Fiks typer på graphql
    // Graphql returnerer et object med property journalpost som inneholder en journalpost.
    return {
      status: "success",
      // @ts-ignore
      data: response.journalpost,
    };
  } catch (error: unknown) {
    logger.warn(`Feil fra SAF med call-id ${callId}: ${error}`);
    const errorMessage = error instanceof Error ? error.message : "Feil ved henting av dokumenter";
    sikkerLogger.warn(`SAF kall catch error: ${error} - ${errorMessage}`);

    return {
      status: "error",
      error: {
        statusCode: 500,
        statusText: errorMessage,
      },
    };
  }
}

const journalpostGrapqlQuery = gql`
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
`;
