import { type LoaderFunctionArgs, Outlet } from "react-router";
import invariant from "tiny-invariant";

import { DagpengerRettBehandlingProvider } from "~/context/dagpenger-rett-behandling-context";
import { hentBehandling, hentVurderinger } from "~/models/behandling.server";
import {
  hentOrkestratorBarn,
  hentOrkestratorLandListe,
} from "~/models/orkestrator-opplysning.server";
import { hentOppgave } from "~/models/saksbehandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const behandlingPromise = hentBehandling(request, params.behandlingId);
  const vurderingerPromise = hentVurderinger(request, params.behandlingId);
  const oppgave = await hentOppgave(request, params.oppgaveId);

  let orkestratorBarn;
  let orkestratorLandliste;

  if (oppgave.soknadId) {
    orkestratorBarn = await hentOrkestratorBarn(request, oppgave.soknadId);
    orkestratorLandliste = await hentOrkestratorLandListe(request);
  }

  return {
    behandlingPromise,
    vurderingerPromise,
    orkestratorBarn,
    orkestratorLandliste,
  };
}

export default function Oppgave() {
  return (
    <DagpengerRettBehandlingProvider>
      <Outlet />
    </DagpengerRettBehandlingProvider>
  );
}
