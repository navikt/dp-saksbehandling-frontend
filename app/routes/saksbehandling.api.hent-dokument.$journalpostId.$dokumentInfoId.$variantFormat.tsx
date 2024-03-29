import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getAzureSession } from "~/utils/auth.utils.server";
import { v4 as uuidv4 } from "uuid";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.journalpostId, `params.journalpostId er påkrevd`);
  invariant(params.dokumentInfoId, `params.dokumentInfoId er påkrevd`);
  invariant(params.variantFormat, `params.variantFormat er påkrevd`);

  const url = `https://saf.dev-fss-pub.nais.io/rest/hentdokument/${params.journalpostId}/${params.dokumentInfoId}/${params.variantFormat}`;
  const audience = `api://dev-fss.teamdokumenthandtering.saf-q1/.default`;
  const session = await getAzureSession(request);
  const oboToken = await session.apiToken(audience);

  const callId = uuidv4();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${oboToken}`,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
    },
  });

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response;
}
