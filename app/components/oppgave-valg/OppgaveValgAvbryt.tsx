import { XMarkIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps, Modal, Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { hentTekstForAvbrytÅrsak } from "~/utils/tekst.utils";
import { hentValideringAvbrytOppgave } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgaveId: string;
  lovligeEndringer: components["schemas"]["LovligeEndringer"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgAvbryt({
  oppgaveId,
  lovligeEndringer,
  buttonSize,
  buttonVariant,
}: IProps) {
  const { pathname } = useLocation();
  const modalRef = useRef<HTMLDialogElement>(null);

  const avbrytOppgaveForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringAvbrytOppgave(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "avbryt-oppgave",
      oppgaveId: oppgaveId,
      // Castingen her gjør at vi kan ha en tom verdi selv om paaVentAarsak er påkrevd i sjemaet
      // https://github.com/colinhacks/zod/discussions/1198#discussioncomment-13070773
      årsak: "" as unknown as components["schemas"]["AvbrytOppgaveAarsak"],
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => modalRef.current?.showModal()}
        loading={avbrytOppgaveForm.formState.isSubmitting}
        icon={<XMarkIcon aria-hidden />}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Avbryt oppgave
      </Button>

      <Modal ref={modalRef} header={{ heading: "Avbryt" }}>
        <Modal.Body>
          <RadioGroup
            {...avbrytOppgaveForm.getInputProps("årsak")}
            size="small"
            error={avbrytOppgaveForm.field("årsak").error()}
            legend="Velg årsak"
          >
            {lovligeEndringer.avbrytAarsaker.map((årsak) => (
              <Radio key={årsak} value={årsak}>
                {hentTekstForAvbrytÅrsak(årsak)}
              </Radio>
            ))}
          </RadioGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            type={"button"}
            loading={avbrytOppgaveForm.formState.isSubmitting}
            onClick={() => avbrytOppgaveForm.submit()}
          >
            Avbryt oppgave
          </Button>

          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Behold oppgave
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
