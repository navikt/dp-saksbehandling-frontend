import type { LoaderFunctionArgs } from "react-router";

import { hentAlleEmneknagger } from "~/models/saksbehandling.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const data = await hentAlleEmneknagger(request);
  return Response.json(data);
}
