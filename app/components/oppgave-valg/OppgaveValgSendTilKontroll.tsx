import { PaperplaneIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps, Modal, Select } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { hentTekstForSendTilKontrollÅrsak } from "~/utils/tekst.utils";
import { hentValideringForSendTilKontroll } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"] | components["schemas"]["OppgaveOversikt"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgSendTilKontroll({ oppgave, buttonSize, buttonVariant }: IProps) {
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
      oppgaveId: oppgave.oppgaveId,
      årsak: "" as unknown as components["schemas"]["KvalitetskontrollAarsak"],
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

      <Modal ref={modalRef} header={{ heading: "Vil du sende oppgaven til kontroll?" }}>
        <Modal.Body>
          <Select
            {...sendTilKontrollForm.getInputProps("årsak")}
            className={"mt-8"}
            label="Årsak"
            size="small"
            error={sendTilKontrollForm.field("årsak").error()}
          >
            <option value={""}>- Velg årsak -</option>
            {oppgave.lovligeEndringer.kvalitetskontrollAarsaker.map((årsak) => (
              <option key={årsak} value={årsak}>
                {hentTekstForSendTilKontrollÅrsak(årsak)}
              </option>
            ))}
          </Select>
        </Modal.Body>

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
