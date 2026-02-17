import { ArrowCirclepathIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { hentValideringForRekjørBehandling } from "~/utils/validering.util";

interface IProps {
  behandlingId: string;
  personIdent: string;
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgRekjørBehandling({
  behandlingId,
  personIdent,
  buttonSize,
  buttonVariant,
}: IProps) {
  const { pathname } = useLocation();
  const modalRef = useRef<HTMLDialogElement>(null);

  const rekjørBehandlingForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForRekjørBehandling(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "rekjor-behandling",
      behandlingId: behandlingId,
      ident: personIdent,
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        icon={<ArrowCirclepathIcon aria-hidden />}
        onClick={() => modalRef.current?.showModal()}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Kjør behandling på nytt
      </Button>

      <Modal ref={modalRef} header={{ heading: "Vil du kjøre behandlingen på nytt?" }}>
        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            onClick={() => rekjørBehandlingForm.submit()}
            loading={rekjørBehandlingForm.formState.isSubmitting}
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
