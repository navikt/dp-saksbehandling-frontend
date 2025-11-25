import { ActionFunctionArgs, type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { hentBehandling } from "~/models/behandling.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const [oppgave, behandling] = await Promise.all([
    hentOppgave(request, params.oppgaveId),
    hentBehandling(request, params.behandlingId),
  ]);

  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return {
    oppgave,
    behandling,
    journalposterPromises,
  };
}

export default function BehandlingLayout() {
  const { behandling, journalposterPromises } = useLoaderData<typeof loader>();

  return (
    <div className={"main flex gap-4"}>
      <OppgaveOversikt journalposterPromises={journalposterPromises} behandling={behandling} />
      <div className={"flex-1"}>
        <Outlet />
      </div>
    </div>
  );
}
