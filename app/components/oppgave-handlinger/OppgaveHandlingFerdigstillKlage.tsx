import { Button } from "@navikt/ds-react";
import { Form, useNavigation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function OppgaveHandlingFerdigstillKlage() {
  const { state } = useNavigation();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Form method="post">
      <input name="_action" value="ferdigstill-klage" hidden={true} readOnly={true} />
      <input name="behandlingId" value={oppgave.behandlingId} hidden={true} readOnly={true} />
      <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
      <input name="ident" value={oppgave.person.ident} hidden={true} readOnly={true} />
      <Button size="small" variant="primary" loading={state !== "idle"}>
        Ferdigstill
      </Button>
    </Form>
  );
}
