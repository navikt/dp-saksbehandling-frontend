import { PaperplaneIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { hentValideringForSendTilKontroll } from "~/utils/validering.util";

interface IProps {
  oppgaveId: string;
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgSendTilKontroll({ oppgaveId, buttonSize, buttonVariant }: IProps) {
  const { pathname } = useLocation();
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
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        icon={<PaperplaneIcon aria-hidden />}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => modalRef.current?.showModal()}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Send til kontroll
      </Button>

      <Modal ref={modalRef} header={{ heading: "Vil du kjøre behandlingen på nytt?" }}>
        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            onClick={() => sendTilKontrollForm.submit()}
            loading={sendTilKontrollForm.formState.isSubmitting}
          >
            Ja
          </Button>

          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Avbryt
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
