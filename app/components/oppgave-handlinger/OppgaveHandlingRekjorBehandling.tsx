import { Button, Modal } from "@navikt/ds-react";
import { useEffect, useRef } from "react";
import { Form, useActionData, useNavigation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/routes/oppgave.$oppgaveId.klage.$behandlingId";
import { isAlert } from "~/utils/type-guards";

export function OppgaveHandlingRekjorBehandling() {
  const { state } = useNavigation();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const actionData = useActionData<typeof action>();
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isAlert(actionData) && actionData.variant === "error") {
      modalRef.current?.close();
    }
  }, [actionData]);

  return (
    <>
      <Button
        size="small"
        variant="tertiary"
        onClick={() => modalRef.current?.showModal()}
        loading={state !== "idle"}
      >
        Kjør behandling på nytt
      </Button>

      <Modal ref={modalRef} header={{ heading: "Kjør behandling på nytt" }}>
        <Modal.Footer>
          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Avbryt
          </Button>
          <Form method="post">
            <input name="_action" value="rekjor-behandling" hidden={true} readOnly={true} />
            <input name="behandlingId" value={oppgave.behandlingId} hidden={true} readOnly={true} />
            <input name="ident" value={oppgave.person.ident} hidden={true} readOnly={true} />

            <Button size="small" variant="primary" onClick={() => modalRef.current?.close()}>
              Ja
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}
