import { ActionFunctionArgs, type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentBehandlingV2 } from "~/models/behandling.server";
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
  // const { personId } = await hentRapporteringPersonId(request, oppgave.person.ident);
  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );
  return {
    oppgave,
    behandling,
    journalposterPromises,
    // meldekortUrl: `${getEnv("DP_RAPPORTERING_SAKSBEHANDLING_FRONTEND_URL")}/person/${personId}`,
    meldekortUrl: ``,
  };
}

export default function BehandlingLayout() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, meldekortUrl } = useLoaderData<typeof loader>();
  return (
    <OppgaveProvider oppgave={oppgave} saksbehandler={saksbehandler}>
      <BeslutterNotatProvider notat={oppgave.notat}>
        <PersonBoks person={oppgave.person} meldekortUrl={meldekortUrl} />
        {/*<div className={"main grid grid-cols-[2fr_1fr] gap-4"}>*/}
        {/*<OppgaveOversikt />*/}
        {/*<OppgaveStøtteInformasjon />*/}
        {/*</div>*/}
        <Outlet />
      </BeslutterNotatProvider>
    </OppgaveProvider>
  );
}
