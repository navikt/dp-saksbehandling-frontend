import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { v4 as uuidv4 } from "uuid";

import { getSAFOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.journalpostId, `params.journalpostId er påkrevd`);
  invariant(params.dokumentInfoId, `params.dokumentInfoId er påkrevd`);
  invariant(params.variantFormat, `params.variantFormat er påkrevd`);

  const url = `${getEnv("SAF_URL")}/rest/hentdokument/${params.journalpostId}/${params.dokumentInfoId}/${params.variantFormat}`;
  const oboToken = await getSAFOboToken(request);

  const callId = uuidv4();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${oboToken}`,
      connection: "keep-alive",
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
