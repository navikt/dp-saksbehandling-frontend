import { Outlet, useActionData } from "react-router";

import { DagpengerRettBehandlingProvider } from "~/context/dagpenger-rett-behandling-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { action } from "~/routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle";
import { isAlert } from "~/utils/type-guards";

export default function DagpengerRettRoute() {
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <DagpengerRettBehandlingProvider>
      <Outlet />
    </DagpengerRettBehandlingProvider>
  );
}
