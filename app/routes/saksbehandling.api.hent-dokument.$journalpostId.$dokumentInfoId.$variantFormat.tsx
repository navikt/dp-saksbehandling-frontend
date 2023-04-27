import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getAzureSession } from "~/utils/auth.utils";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.journalpostId, `params.journalpostId er påkrevd`);
  invariant(params.dokumentInfoId, `params.dokumentInfoId er påkrevd`);
  invariant(params.variantFormat, `params.variantFormat er påkrevd`);

  const url = `https://saf-q1.dev.intern.nav.no/rest/hentdokument/${params.journalpostId}/${params.dokumentInfoId}/${params.variantFormat}`;
  console.log("Hent dokument fra URL: ", url);

  const session = await getAzureSession(request);
  const oboToken = await session.apiToken("api://saf-q1.dev.intern.nav.no");

  console.log(oboToken);
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${oboToken}`,
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
