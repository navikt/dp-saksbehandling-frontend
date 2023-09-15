import { type LoaderArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { getSession } from "~/models/auth.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, `Fant ikke oppgave id: ${params.oppgaveId}`);
  const session = await getSession(request);

  const oppgave = await hentOppgave(params.oppgaveId, session);
  return redirect(`steg/${oppgave.steg[0].uuid}`);
}
