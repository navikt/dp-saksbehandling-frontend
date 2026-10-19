import { ActionFunctionArgs, Outlet } from "react-router";

import { LinkTabs } from "~/components/link-tabs/LinkTabs";
import { OppgaveMeny } from "~/components/oppgave-meny/OppgaveMeny";
import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { useBehandling } from "~/hooks/useBehandling";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function BehandlingLayout() {
  const { behandling } = useBehandling();
  return (
    <div className="flex h-full min-h-0 gap-4">
      <div
        role="region"
        aria-label="Oppgaveoversikt"
        tabIndex={0}
        className="relative h-full min-h-0 shrink-0"
      >
        <OppgaveOversikt opprettetAv={behandling.opprettetAv} visKontroll={false} />
      </div>
      <div className="min-h-0 min-w-0 flex-1 overflow-auto">
        <main>
          <div className={"card p-4"}>
            <div className="flex justify-between gap-6">
              <LinkTabs className="flex-1" />
              <OppgaveMeny />
            </div>
            <div className="mt-4">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
