import type { components } from "@/openapi/saksbehandling-typer";
import { hentNesteOppgave } from "~/models/saksbehandling.server";

export type NesteOppgaveResponse = {
  data: components["schemas"]["NesteOppgave"];
};

export async function action({ request }: { request: Request }) {
  const { aktivtOppgaveSok } = await request.json();

  const result = await hentNesteOppgave(request, aktivtOppgaveSok);

  if (result.error) {
    return new Response(JSON.stringify({ error: result.error }), {
      status: result.error.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return result;
}
