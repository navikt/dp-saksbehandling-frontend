import { ArrowUndoIcon } from "@navikt/aksel-icons";
import { BodyLong, Button, ButtonProps, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentValideringForLeggTilbakeOppgave } from "~/utils/validering.util";

interface IProps {
  oppgaveId: string;
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgLeggTilbake({ oppgaveId, buttonSize, buttonVariant }: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const modalRef = useRef<HTMLDialogElement>(null);

  const leggTilbakeForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForLeggTilbakeOppgave(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "legg-tilbake-oppgave",
      oppgaveId,
      aktivtOppgaveSok,
      // aarsak: "",
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => modalRef.current?.showModal()}
        loading={leggTilbakeForm.formState.isSubmitting}
        icon={<ArrowUndoIcon aria-hidden />}
        className={"aksel--font-regular"}
      >
        Legg tilbake
      </Button>

      <Modal ref={modalRef} header={{ heading: "Legg tilbake" }}>
        <Modal.Body className={"pt-0"}>
          <BodyLong> Du er i ferd med å legge tilbake oppgaven</BodyLong>
          {/* <TextField
            {...leggTilbakeForm.getInputProps("aarsak")}
            className={"mt-2"}
            label="Årsak"
            size="small"
          />

          {leggTilbakeForm.error("aarsak") && (
            <Alert variant={"error"} size="small" className={"mt-2"}>
              {leggTilbakeForm.error("aarsak")}
            </Alert>
          )} */}
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            type={"button"}
            loading={leggTilbakeForm.formState.isSubmitting}
            onClick={() => leggTilbakeForm.submit()}
          >
            Ja, legg tilbake oppgaven
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
