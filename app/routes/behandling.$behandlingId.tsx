import { type LoaderFunctionArgs } from "react-router";
import invariant from "tiny-invariant";

import { hentBehandling } from "~/models/behandling.server";
import { hentOppgaveForBehandlingId } from "~/models/saksbehandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const oppgave = await hentOppgaveForBehandlingId(request, params.behandlingId);
  const behandling = await hentBehandling(request, params.behandlingId);

  return { oppgave, behandling };
}
