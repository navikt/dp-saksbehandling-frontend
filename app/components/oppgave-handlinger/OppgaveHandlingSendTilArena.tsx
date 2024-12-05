import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/routes/oppgave.$oppgaveId.se.fullfort-oppgave";
import { isAlert } from "~/utils/type-guards";

export function OppgaveHandlingSendTilArena() {
  const actionData = useActionData<typeof action>();
  const modalRef = useRef<HTMLDialogElement>(null);
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  useEffect(() => {
    if (isAlert(actionData) && actionData.variant === "error") {
      modalRef.current?.close();
    }
  }, [actionData]);

  return (
    <>
      <Button size="small" variant="secondary" onClick={() => modalRef.current?.showModal()}>
        Send til Arena
      </Button>

      <Modal ref={modalRef} header={{ heading: "Send til Arena" }}>
        <Modal.Body>
          <BodyLong>Du er i ferd med å sende oppgaven til Arena</BodyLong>
        </Modal.Body>

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
            <input name="_action" value="send-til-arena" hidden={true} readOnly={true} />
            <input name="behandlingId" value={oppgave.behandlingId} hidden={true} readOnly={true} />
            <input name="personIdent" value={oppgave.person.ident} hidden={true} readOnly={true} />

            <Button size="small" variant="primary">
              Ja
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}
