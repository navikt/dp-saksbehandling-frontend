import type { LoaderFunctionArgs } from "react-router";
import invariant from "tiny-invariant";

import { hentVurderinger } from "~/models/behandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const data = await hentVurderinger(request, params.behandlingId);
  return Response.json(data);
}
