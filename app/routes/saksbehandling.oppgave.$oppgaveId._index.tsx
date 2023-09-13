import { type LoaderArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { getAzureSession } from "~/utils/auth.utils.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, `Fant ikke oppgave id: ${params.oppgaveId}`);
  const session = await getAzureSession(request);

  if (!session) {
    throw new Response(null, { status: 500, statusText: "Feil ved henting av sesjon" });
  }

  const oppgave = await hentOppgave(params.oppgaveId, session);
  return redirect(`steg/${oppgave.steg[0].uuid}`);
}
