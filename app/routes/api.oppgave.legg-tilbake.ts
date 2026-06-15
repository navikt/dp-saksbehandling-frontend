import { components } from "@/openapi/saksbehandling-typer";
import { leggTilbakeOppgave } from "~/models/saksbehandling.server";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;
  const årsak = formData.get("årsak") as components["schemas"]["LeggTilbakeAarsak"];

  const { error } = await leggTilbakeOppgave(request, oppgaveId, årsak);

  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return {
    success: true,
    data: {
      oppgaveId,
    },
  };
}
