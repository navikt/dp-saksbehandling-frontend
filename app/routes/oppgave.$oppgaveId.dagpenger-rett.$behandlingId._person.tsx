import { ActionFunctionArgs, type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { BehandlingProvider } from "~/context/behandling-context";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentBehandling, hentVurderinger } from "~/models/behandling.server";
import { hentRapporteringPersonId } from "~/models/rapportering.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { getEnv } from "~/utils/env.utils";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const [oppgave, behandling, vurderinger] = await Promise.all([
    hentOppgave(request, params.oppgaveId),
    hentBehandling(request, params.behandlingId),
    hentVurderinger(request, params.behandlingId),
  ]);

  const personIdResponse = await hentRapporteringPersonId(request, oppgave.person.ident);
  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return {
    oppgave,
    behandling,
    vurderinger,
    journalposterPromises,
    meldekortUrl: `${personIdResponse?.personId ? `${getEnv("DP_RAPPORTERING_SAKSBEHANDLING_FRONTEND_URL")}/person/${personIdResponse.personId}` : null}`,
  };
}

export default function BehandlingLayout() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, behandling, vurderinger, meldekortUrl, journalposterPromises } =
    useLoaderData<typeof loader>();
  return (
    <OppgaveProvider
      oppgave={oppgave}
      saksbehandler={saksbehandler}
      journalposterPromises={journalposterPromises}
    >
      <BeslutterNotatProvider notat={oppgave.notat}>
        <BehandlingProvider behandling={behandling} vurderinger={vurderinger}>
          <PersonBoks person={oppgave.person} meldekortUrl={meldekortUrl} oppgave={oppgave} />
          <Outlet />
        </BehandlingProvider>
      </BeslutterNotatProvider>
    </OppgaveProvider>
  );
}
