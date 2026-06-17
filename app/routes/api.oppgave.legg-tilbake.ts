import { components } from "@/openapi/saksbehandling-typer";
import { leggTilbakeOppgave } from "~/models/saksbehandling.server";
import { getSession } from "~/sessions";

export type LeggTilbakeOppgaveResponse = {
  data: components["schemas"]["LeggTilbakeOppgave"];
};

export async function action({ request }: { request: Request }) {
  const { oppgaveId, årsak } = await request.json();

  const result = await leggTilbakeOppgave(request, oppgaveId, årsak);

  if (result.error) {
    return new Response(JSON.stringify({ error: result.error }), {
      status: result.error.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", {
    variant: "success",
    title: "Oppgave lagt tilbake i køen 📥",
  });

  return result;
}
