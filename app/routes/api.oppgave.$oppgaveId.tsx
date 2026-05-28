import type { LoaderFunctionArgs } from "react-router";
import invariant from "tiny-invariant";

import { hentOppgave } from "~/models/saksbehandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const data = await hentOppgave(request, params.oppgaveId);
  return Response.json(data);
}
