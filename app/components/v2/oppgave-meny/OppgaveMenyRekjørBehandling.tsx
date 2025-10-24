import { ArrowCirclepathIcon } from "@navikt/aksel-icons";
import { Button, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { hentValideringForRekjørBehandling } from "~/utils/validering.util";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
}

export function OppgaveMenyRekjørBehandling({ oppgave }: IProps) {
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
      behandlingId: oppgave.behandlingId,
      ident: oppgave.person.ident,
    },
  });

  return (
    <>
      <Button
        size="xsmall"
        variant="tertiary-neutral"
        icon={<ArrowCirclepathIcon aria-hidden />}
        onClick={() => modalRef.current?.showModal()}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Kjør behandling på nytt
      </Button>

      <Modal ref={modalRef} header={{ heading: "Kjør behandling på nytt" }}>
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
            onClick={() => rekjørBehandlingForm.submit()}
            loading={rekjørBehandlingForm.formState.isSubmitting}
          >
            Ja
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
