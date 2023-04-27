import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

export async function loader({ params }: LoaderArgs) {
  invariant(params.journalpostId, `params.journalpostId er påkrevd`);
  invariant(params.dokumentInfoId, `params.dokumentInfoId er påkrevd`);
  invariant(params.variantFormat, `params.variantFormat er påkrevd`);

  const url = `https://saf-q1.dev.intern.nav.no/rest/hentdokument/${params.journalpostId}/${params.dokumentInfoId}/${params.variantFormat}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Response(`Feil ved kall til ${url}`, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response;
}
