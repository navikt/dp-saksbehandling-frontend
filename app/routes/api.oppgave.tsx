import type { LoaderFunctionArgs } from "react-router";

import { hentOppgaver } from "~/models/saksbehandling.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const data = await hentOppgaver(request, url.searchParams);
  return Response.json(data);
}
