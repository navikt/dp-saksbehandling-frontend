import { Button } from "@navikt/ds-react";
import { Form, useActionData, useNavigation } from "@remix-run/react";

import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/root";
import { isAlert } from "~/utils/type-guards";

export function OppgaveHandlingLeggTilbake() {
  const { state } = useNavigation();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <Form method="post">
      <input name="_action" value="legg-tilbake-oppgave" hidden={true} readOnly={true} />
      <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
      <Button size="small" variant="tertiary" loading={state !== "idle"}>
        Legg tilbake
      </Button>
    </Form>
  );
}
