import { components } from "@/openapi/saksbehandling-typer";
import { leggTilbakeOppgave } from "~/models/saksbehandling.server";

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
  return result;
}
