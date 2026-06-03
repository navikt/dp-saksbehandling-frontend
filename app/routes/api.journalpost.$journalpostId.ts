import { LoaderFunctionArgs } from "react-router";
import invariant from "tiny-invariant";

import { hentJournalpost } from "~/models/saf.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.journalpostId, `params.journalpostId er påkrevd`);

  const data = await hentJournalpost(request, params.journalpostId);
  return Response.json(data);
}
