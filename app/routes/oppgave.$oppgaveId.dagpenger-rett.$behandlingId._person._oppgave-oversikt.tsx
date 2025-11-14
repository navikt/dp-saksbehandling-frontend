import { ActionFunctionArgs, type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { OppgaveStøtteInformasjon } from "~/components/oppgave-støtte-informasjon/OppgaveStøtteInformasjon";
import { OppgaveOversikt } from "~/components/v2/oppgave-oversikt/OppgaveOversikt";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return {
    oppgave,
    journalposterPromises,
  };
}

export default function BehandlingLayout() {
  const { journalposterPromises } = useLoaderData<typeof loader>();
  return (
    <>
      <div className={"main grid grid-cols-[2fr_1fr] gap-4"}>
        <OppgaveOversikt />
        <OppgaveStøtteInformasjon journalposterPromises={journalposterPromises} />
      </div>
      <Outlet />
    </>
  );
}
