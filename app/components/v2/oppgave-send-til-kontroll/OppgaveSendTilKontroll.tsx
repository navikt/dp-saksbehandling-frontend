import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentValideringForSendTilKontroll } from "~/utils/validering.util";

export function OppgaveSendTilKontroll() {
  const { pathname } = useLocation();
  const { oppgaveId } = useTypeSafeParams();
  const modalRef = useRef<HTMLDialogElement>(null);

  const sendTilKontrollForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForSendTilKontroll(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "send-til-kontroll",
      oppgaveId: oppgaveId,
    },
  });
  return (
    <>
      <Button size="small" variant="primary" onClick={() => modalRef.current?.showModal()}>
        Send til kontroll
      </Button>

      <Modal ref={modalRef} header={{ heading: "Send til kontroll" }}>
        <Modal.Body>
          <BodyLong>Du er i ferd med å sende oppgaven til kontroll</BodyLong>
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

          <Button
            size="small"
            variant="primary"
            loading={sendTilKontrollForm.formState.isSubmitting}
            onClick={() => sendTilKontrollForm.submit()}
          >
            Ja
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
