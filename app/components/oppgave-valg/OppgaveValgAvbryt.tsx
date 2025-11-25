import { XMarkIcon } from "@navikt/aksel-icons";
import { Alert, BodyLong, Button, ButtonProps, Modal, Select } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { hentTekstForAvbrytÅrsak } from "~/utils/tekst.utils";
import { hentValideringAvbrytOppgave } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgAvbryt({ oppgave, buttonSize, buttonVariant }: IProps) {
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
      oppgaveId: oppgave.oppgaveId,
      // Castingen her gjør at vi kan ha en tom verdi selv om paaVentAarsak er påkrevd i sjemaet
      // https://github.com/colinhacks/zod/discussions/1198#discussioncomment-13070773
      avbrytAarsak: "" as unknown as components["schemas"]["AvbrytOppgaveAarsak"],
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
        className={"aksel--font-regular"}
      >
        Avbryt oppgave
      </Button>

      <Modal ref={modalRef} header={{ heading: "Avbryt" }}>
        <Modal.Body className={"pt-0"}>
          <BodyLong> Du er i ferd med å avbryte oppgaven</BodyLong>
          <Select
            {...avbrytOppgaveForm.getInputProps("avbrytAarsak")}
            className={"mt-2"}
            label="Velg årsak"
            size="small"
          >
            <option hidden={true} value={""}>
              Velg årsak
            </option>

            {oppgave.lovligeEndringer.avbrytAarsaker.map((årsak) => (
              <option key={årsak} value={årsak}>
                {hentTekstForAvbrytÅrsak(årsak)}
              </option>
            ))}
          </Select>

          {avbrytOppgaveForm.error("avbrytAarsak") && (
            <Alert variant={"error"} size="small" className={"mt-2"}>
              {avbrytOppgaveForm.error("avbrytAarsak")}
            </Alert>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Nei, behold oppgaven
          </Button>

          <Button
            size="small"
            variant="primary"
            type={"button"}
            loading={avbrytOppgaveForm.formState.isSubmitting}
            onClick={() => avbrytOppgaveForm.submit()}
          >
            Ja, avbryt oppgaven
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
