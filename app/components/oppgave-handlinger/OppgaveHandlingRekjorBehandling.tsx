import { Button } from "@navikt/ds-react";
import { Form, useNavigation } from "@remix-run/react";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function OppgaveHandlingRekjorBehandling() {
  const { state } = useNavigation();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Form method="post">
      <input name="_action" value="rekjor-behandling" hidden={true} readOnly={true} />
      <input name="behandlingId" value={oppgave.behandlingId} hidden={true} readOnly={true} />
      <input name="ident" value={oppgave.person.ident} hidden={true} readOnly={true} />
      <Button size="small" variant="tertiary" loading={state !== "idle"}>
        Kjør behandling på nytt
      </Button>
    </Form>
  );
}
