import { type LoaderFunctionArgs, redirect } from "react-router";
import invariant from "tiny-invariant";

import { hentOppgaveForBehandlingId } from "~/models/saksbehandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const oppgave = await hentOppgaveForBehandlingId(request, params.behandlingId);
  const { oppgaveId, behandlingId, behandlingType } = oppgave;
  const legacyBaseUrl = `/oppgave/${oppgaveId}`;
  const dagpengerFane = oppgave.tilstand === "UNDER_KONTROLL" ? "vedtak" : "vilkar";
  const url = {
    KLAGE: `/behandling/${behandlingId}/klage`,
    RETT_TIL_DAGPENGER: `${legacyBaseUrl}/dagpenger-rett/${behandlingId}/${dagpengerFane}`,
    INNSENDING: `${legacyBaseUrl}/innsending/${behandlingId}`,
    TILBAKEKREVING: `${legacyBaseUrl}/tilbakekreving/${behandlingId}`,
    OPPFØLGING: `${legacyBaseUrl}/oppfolging/${behandlingId}`,
  }[behandlingType];

  return redirect(url);
}
