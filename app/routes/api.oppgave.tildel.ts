import type { components } from "@/openapi/saksbehandling-typer";
import { tildelOppgave } from "~/models/saksbehandling.server";

export type TildelOppgaveResponse = {
  data: components["schemas"]["TildeltOppgave"];
};

export async function action({ request }: { request: Request }) {
  const { oppgaveId } = await request.json();

  const result = await tildelOppgave(request, oppgaveId);

  if (result.error) {
    return new Response(JSON.stringify({ error: result.error }), {
      status: result.error.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return result;
}
