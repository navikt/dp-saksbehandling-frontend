import { setTimeout } from "node:timers/promises";

import { type ActionFunctionArgs } from "react-router";
import { z } from "zod";

import { opprettBehandling, opprettRevurderingEtterKlage } from "~/models/behandling.server";
import { hentOppgaveIdForBehandling } from "~/models/saksbehandling.server";
import { hentValideringForOpprettBehandlingApi } from "~/utils/validering.util";

export type OpprettBehandlingPayload = z.infer<
  ReturnType<typeof hentValideringForOpprettBehandlingApi>
>;

export type OpprettBehandlingResponse = { behandlingId: string; oppgaveId: string };

export async function action({ request }: ActionFunctionArgs) {
  const payload = hentValideringForOpprettBehandlingApi().safeParse(
    await request.json().catch(() => null),
  );

  if (!payload.success) {
    return Response.json(
      { error: { title: "Ugyldig behandling", detail: payload.error.issues[0].message } },
      { status: 400 },
    );
  }

  const { personIdent, behandlingstype } = payload.data;
  const result =
    behandlingstype === "OmgjøringEtterKlage"
      ? await opprettRevurderingEtterKlage(
          request,
          personIdent,
          payload.data.klageId,
          "Førsteinstans",
        )
      : await opprettBehandling(request, personIdent, behandlingstype);

  if (result.error) {
    return Response.json({ error: result.error }, { status: result.response.status });
  }

  if (!result.data) {
    throw new Error("Behandling mangler i svaret fra oppretting");
  }

  const { behandlingId } = result.data;
  let oppgave = await hentOppgaveIdForBehandling(request, behandlingId);

  for (let forsøk = 0; oppgave.response.status === 404 && forsøk < 4; forsøk++) {
    await setTimeout(500 * 2 ** forsøk);
    oppgave = await hentOppgaveIdForBehandling(request, behandlingId);
  }

  if (oppgave.error) {
    return Response.json({ error: oppgave.error }, { status: oppgave.response.status });
  }

  if (!oppgave.data) {
    throw new Error("OppgaveId mangler for den opprettede behandlingen");
  }

  return { behandlingId, oppgaveId: oppgave.data.oppgaveId } satisfies OpprettBehandlingResponse;
}
