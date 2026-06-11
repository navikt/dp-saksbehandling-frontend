import { tildelOppgave } from "~/models/saksbehandling.server";

export async function action(request: Request) {
  const formData = await request.formData();
  const oppgaveId = formData.get("oppgaveId") as string;
  const behandlingId = formData.get("behandlingId") as string;

  const { data, error } = await tildelOppgave(request, oppgaveId);

  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return {
    success: true,
    data: {
      behandlingType: data.behandlingType,
      utlostAv: data.utlostAv,
      nyTilstand: data.nyTilstand,
      oppgaveId,
      behandlingId,
    },
  };
}
