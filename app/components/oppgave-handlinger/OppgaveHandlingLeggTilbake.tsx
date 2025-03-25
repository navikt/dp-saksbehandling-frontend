import { Button } from "@navikt/ds-react";
import { Form, useNavigation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function OppgaveHandlingLeggTilbake() {
  const { state } = useNavigation();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Form method="post">
      <input name="_action" value="legg-tilbake-oppgave" hidden={true} readOnly={true} />
      <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
      <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
      <Button size="small" variant="tertiary" loading={state !== "idle"}>
        Legg tilbake
      </Button>
    </Form>
  );
}
