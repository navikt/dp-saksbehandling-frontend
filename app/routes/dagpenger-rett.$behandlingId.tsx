import { type LoaderFunctionArgs } from "react-router";
import invariant from "tiny-invariant";

import { hentOppgaveIdForBehandlingId } from "~/models/saksbehandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  return await hentOppgaveIdForBehandlingId(request, params.behandlingId);
}
