import { returnerOppgaveTilSaksbehandler } from "~/models/saksbehandling.server";
import { getSession } from "~/sessions";

export async function action({ request }: { request: Request }) {
  const { oppgaveId, årsak } = await request.json();

  const result = await returnerOppgaveTilSaksbehandler(request, oppgaveId, årsak);

  if (result.error) {
    return new Response(JSON.stringify({ error: result.error }), {
      status: result.error.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", {
    variant: "success",
    title: "Oppgave returnert til saksbehandling 📥",
  });

  return result;
}
