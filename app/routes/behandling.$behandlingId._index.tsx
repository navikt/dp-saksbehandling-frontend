import { redirect } from "react-router";

import { hentOppgaveForBehandlingId } from "~/models/saksbehandling.server";

import type { Route } from "./+types/behandling.$behandlingId._index";

export async function loader({ params, request }: Route.LoaderArgs) {
  const oppgave = await hentOppgaveForBehandlingId(request, params.behandlingId);
  const { oppgaveId, behandlingId, behandlingType } = oppgave;
  const legacyBaseUrl = `/oppgave/${oppgaveId}`;
  const dagpengerFane = oppgave.tilstand === "UNDER_KONTROLL" ? "vedtak" : "vilkar";
  const url = {
    KLAGE: `/behandling/${behandlingId}/klage`,
    RETT_TIL_DAGPENGER: `${legacyBaseUrl}/dagpenger-rett/${behandlingId}/${dagpengerFane}`,
    INNSENDING: `/behandling/${behandlingId}/innsending`,
    TILBAKEKREVING: `/behandling/${behandlingId}/tilbakekreving`,
    OPPFØLGING: `/behandling/${behandlingId}/oppfolging`,
  }[behandlingType];

  return redirect(url);
}
