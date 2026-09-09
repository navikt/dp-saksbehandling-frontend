import { XMarkIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps, Modal, Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { hentTekstForAvbrytKlageÅrsak } from "~/utils/tekst.utils";
import { hentValideringAvbrytKlage } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  behandlingId: string;
  lovligeAvbrytAarsaker: components["schemas"]["AvbrytKlageAarsak"][];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgAvbrytKlage({
  behandlingId,
  lovligeAvbrytAarsaker,
  buttonSize,
  buttonVariant,
}: IProps) {
  const { pathname } = useLocation();
  const modalRef = useRef<HTMLDialogElement>(null);

  const avbrytKlageForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringAvbrytKlage(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "avbryt-klage",
      behandlingId,
      // Castingen her gjør at vi kan ha en tom verdi selv om årsak er påkrevd i sjemaet
      // https://github.com/colinhacks/zod/discussions/1198#discussioncomment-13070773
      årsak: "" as unknown as components["schemas"]["AvbrytKlageAarsak"],
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => modalRef.current?.showModal()}
        loading={avbrytKlageForm.formState.isSubmitting}
        icon={<XMarkIcon aria-hidden />}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Avbryt klage
      </Button>

      <Modal ref={modalRef} header={{ heading: "Avbryt klage" }}>
        <Modal.Body>
          <RadioGroup
            {...avbrytKlageForm.getInputProps("årsak")}
            size="small"
            error={avbrytKlageForm.field("årsak").error()}
            legend="Velg årsak"
          >
            {lovligeAvbrytAarsaker.map((årsak) => (
              <Radio key={årsak} value={årsak}>
                {hentTekstForAvbrytKlageÅrsak(årsak)}
              </Radio>
            ))}
          </RadioGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            type={"button"}
            loading={avbrytKlageForm.formState.isSubmitting}
            onClick={() => avbrytKlageForm.submit()}
          >
            Avbryt klage
          </Button>

          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Behold klage
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
