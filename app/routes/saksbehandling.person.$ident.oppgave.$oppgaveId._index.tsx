import { type LoaderArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { hentOppgaver } from "~/models/oppgave.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, `Fant ikke oppgave id: ${params.oppgaveId}`);

  const oppgaver = await hentOppgaver(request);
  const forsteBehandlingStegUuid = oppgaver.find((oppgave) => oppgave.uuid === params.oppgaveId)
    ?.steg[0].uuid;

  return redirect(`steg/${forsteBehandlingStegUuid}`);
}
