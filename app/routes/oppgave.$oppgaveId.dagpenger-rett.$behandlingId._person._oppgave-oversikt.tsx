import { ActionFunctionArgs, Outlet } from "react-router";

import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function BehandlingLayout() {
  const { journalposterPromises } = useOppgave();
  const { behandling } = useBehandling();

  return (
    <div className={"main flex gap-4"}>
      <OppgaveOversikt journalposterPromises={journalposterPromises} behandling={behandling} />
      <div className={"flex-1"}>
        <Outlet />
      </div>
    </div>
  );
}
