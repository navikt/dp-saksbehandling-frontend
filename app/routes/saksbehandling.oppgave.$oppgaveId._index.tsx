import { type LoaderArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, `Fant ikke oppgave id: ${params.oppgaveId}`);

  const oppgave = await hentOppgave(params.oppgaveId, request);

  return redirect(`steg/${oppgave.steg[0].uuid}`);
}
