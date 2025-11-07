import { ActionFunctionArgs, type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentBehandlingV2 } from "~/models/behandling.server";
import { hentRapporteringPersonId } from "~/models/rapportering.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandlingV2(request, params.behandlingId);
  const personIdResponse = await hentRapporteringPersonId(request, oppgave.person.ident);
  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return {
    oppgave,
    behandling,
    journalposterPromises,
    meldekortUrl: `${personIdResponse?.personId ? `${new URL(request.url).origin}/v2.rapportering.saksbehandling/person/${personIdResponse.personId}/meldekort` : null}`,
  };
}

export default function BehandlingLayout() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, meldekortUrl } = useLoaderData<typeof loader>();
  return (
    <OppgaveProvider oppgave={oppgave} saksbehandler={saksbehandler}>
      <BeslutterNotatProvider notat={oppgave.notat}>
        <PersonBoks person={oppgave.person} meldekortUrl={meldekortUrl} />
        <Outlet />
      </BeslutterNotatProvider>
    </OppgaveProvider>
  );
}
