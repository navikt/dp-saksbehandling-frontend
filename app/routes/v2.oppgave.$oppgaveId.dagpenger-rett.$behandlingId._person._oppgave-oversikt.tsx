import { ActionFunctionArgs, Outlet } from "react-router";

import { OppgaveStøtteInformasjon } from "~/components/oppgave-støtte-informasjon/OppgaveStøtteInformasjon";
import { OppgaveOversikt } from "~/components/v2/oppgave-oversikt/OppgaveOversikt";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function BehandlingLayout() {
  return (
    <>
      <div className={"main grid grid-cols-[2fr_1fr] gap-4"}>
        <OppgaveOversikt />
        <OppgaveStøtteInformasjon />
      </div>
      <Outlet />
    </>
  );
}
