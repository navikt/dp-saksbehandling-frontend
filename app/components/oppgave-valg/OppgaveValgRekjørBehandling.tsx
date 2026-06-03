import { ArrowCirclepathIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, ButtonProps, Checkbox, CheckboxGroup, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { useBehandling } from "~/hooks/useBehandling";
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
  const { behandling } = useBehandling();

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
      opplysningerSomSkalOppfriskes: [],
    },
  });

  const opplysningerSomKanOppfriskes =
    behandling.opplysninger
      .filter((opplysning) => opplysning.kanOppfriskes)
      ?.map((opplysning) => ({ label: opplysning.navn, value: opplysning.opplysningTypeId })) ?? [];

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

      <Modal ref={modalRef} header={{ heading: "Kjør behandling på nytt" }}>
        <Modal.Body>
          <BodyShort spacing>Vil du kjøre behandlingen på nytt?</BodyShort>
          {opplysningerSomKanOppfriskes.length > 0 && (
            <>
              <BodyShort spacing>
                Du kan også velge noen opplysninger som skal oppfriskes.
              </BodyShort>
              <CheckboxGroup
                size={"small"}
                legend="Opplysninger som kan oppfriskes"
                onChange={(values) => {
                  rekjørBehandlingForm.field("opplysningerSomSkalOppfriskes").clearError();
                  rekjørBehandlingForm.field("opplysningerSomSkalOppfriskes").setValue(values);
                }}
              >
                {opplysningerSomKanOppfriskes.map((opplysning) => (
                  <Checkbox key={opplysning.value} value={opplysning.value}>
                    {opplysning.label}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            onClick={() => rekjørBehandlingForm.submit()}
            loading={rekjørBehandlingForm.formState.isSubmitting}
          >
            Kjør behandling på nytt
          </Button>

          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Ikke kjør på nytt
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
