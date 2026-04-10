import { ActionFunctionArgs, Outlet } from "react-router";

import { LinkTabs } from "~/components/link-tabs/LinkTabs";
import { OppgaveMeny } from "~/components/oppgave-meny/OppgaveMeny";
import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { useOppgave } from "~/hooks/useOppgave";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function BehandlingLayout() {
  const { journalposterPromises } = useOppgave();

  return (
    <div className={"main flex gap-4"}>
      <OppgaveOversikt journalposterPromises={journalposterPromises} />
      <div className={"flex-1"}>
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
