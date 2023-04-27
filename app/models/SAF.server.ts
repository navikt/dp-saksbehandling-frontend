import { getAzureSession } from "~/utils/auth.utils";
import { logger } from "../../server/logger";
import { v4 as uuidv4 } from "uuid";
import { gql, GraphQLClient } from "graphql-request";
import { authorizeUser } from "./auth.server";

// export async function hentDokument() {
//   GET /rest/hentdokument/{journalpostId}/{dokumentInfoId}/{variantFormat}
// }

export async function hentDokumenterMetadata(request: Request, ident: string) {
  const session = await getAzureSession(request);

  const oboToken = await session.apiToken("api://dev-fss.teamdokumenthandtering.saf-q1/.default");
  console.log(oboToken);

  const saksbehandler = await authorizeUser(request);

  if (!oboToken || !saksbehandler) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const dokumenter = await hentDokumentOversikt(
    oboToken,
    ident,
    saksbehandler.onPremisesSamAccountName
  );

  console.log(dokumenter);

  return dokumenter;
}

export async function hentDokumentOversikt(
  token: string,
  fnr: string,
  navUserId: string
): Promise<Pick<any, "dokumentoversiktSelvbetjening">> {
  const callId = uuidv4();
  const variables = { fnr };

  const query = gql`
    query hentDokumentOversikt($fnr: String!) {
      dokumentoversiktBruker(brukerId: { id: $fnr, type: FNR }, foerste: 10) {
        journalposter {
          journalpostId
          tittel
          journalposttype
          journalstatus
          tema
          dokumenter {
            dokumentInfoId
            tittel
            brevkode
            dokumentstatus
            datoFerdigstilt
            originalJournalpostId
            skjerming
            logiskeVedlegg {
              logiskVedleggId
              tittel
            }
            dokumentvarianter {
              filnavn
              saksbehandlerHarTilgang
              skjerming
            }
          }
        }
      }
    }
  `;

  const client = new GraphQLClient("https://saf.dev-fss-pub.nais.io/graphql", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Nav-User-Id": navUserId,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
    },
  });

  try {
    logger.info(`Henter dokumenter med call-id: ${callId}`);
    return await client.request(query, variables);
  } catch (error) {
    logger.error(`Feil fra SAF med call-id ${callId}: ${error}`);
    throw new Response("Feil ved henting av dokumenter", { status: 500 });
  }
}
