import { BodyLong, Button, InlineMessage, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef, useState } from "react";
import { useLocation } from "react-router";

import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForSendTilKontroll } from "~/utils/validering.util";

export function OppgaveSendTilKontroll() {
  const { pathname } = useLocation();
  const { oppgaveId } = useTypeSafeParams();
  const { meldingOmVedtak } = useMeldingOmVedtak();
  const { oppgave } = useOppgave();
  const [visFeilmelding, setVisFeilmelding] = useState(false);
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
      årsak: undefined,
    },
  });

  function handleOnClick() {
    if (oppgave.meldingOmVedtakKilde === "DP_SAK" && !isAlert(meldingOmVedtak)) {
      modalRef.current?.showModal();
    }

    setVisFeilmelding(true);
  }

  return (
    <>
      <div>
        <Button size="small" variant="primary" onClick={() => handleOnClick()}>
          Send til kontroll
        </Button>

        {visFeilmelding && (
          <InlineMessage status="error" className={"mt-4"}>
            Kan ikke sende oppgave til kontroll fordi melding om vedtak feiler. Endre melding om
            vedtak kilde og prøv igjen.
          </InlineMessage>
        )}
      </div>

      <Modal ref={modalRef} header={{ heading: "Send til kontroll" }}>
        <Modal.Body>
          <BodyLong>Du er i ferd med å sende oppgaven til kontroll</BodyLong>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            loading={sendTilKontrollForm.formState.isSubmitting}
            onClick={() => sendTilKontrollForm.submit()}
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
    </>
  );
}
