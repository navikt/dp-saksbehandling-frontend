import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getAzureSession } from "~/utils/auth.utils";
import { v4 as uuidv4 } from "uuid";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.journalpostId, `params.journalpostId er påkrevd`);
  invariant(params.dokumentInfoId, `params.dokumentInfoId er påkrevd`);
  invariant(params.variantFormat, `params.variantFormat er påkrevd`);

  const url = `https://saf.dev-fss-pub.nais.io/rest/hentdokument/${params.journalpostId}/${params.dokumentInfoId}/${params.variantFormat}`;
  console.log("Hent dokument fra URL: ", url);

  const audience = `api://dev-fss.teamdokumenthandtering.saf-q1/.default`;
  const session = await getAzureSession(request);
  const oboToken = await session.apiToken(audience);

  // console.log(oboToken);
  const callId = uuidv4();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${oboToken}`,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
    },
  });

  console.log("Status text fra SAF: ", response.statusText);
  console.log("callId", callId);

  if (!response.ok) {
    console.log(response.statusText);
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response;
}
