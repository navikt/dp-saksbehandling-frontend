import { FilePlusIcon } from "@navikt/aksel-icons";
import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { forwardRef } from "react";
import { useLocation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentValideringForOpprettBehandling } from "~/utils/validering.util";

export const ManuellBehandlingModal = forwardRef<HTMLDialogElement>((props, modalRef) => {
  const { pathname } = useLocation();
  const { personOversikt } = useTypedRouteLoaderData("routes/person.$personUuid");

  function closeModal() {
    if (modalRef && typeof modalRef !== "function" && modalRef.current) {
      modalRef.current.close();
    }
  }

  const opprettManuellBehandlingForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForOpprettBehandling(),
    onSubmitSuccess: closeModal,
    defaultValues: {
      _action: "opprett-behandling",
      personIdent: personOversikt.person.ident,
      behandlingstype: "Manuell",
    },
  });

  return (
    <Modal
      ref={modalRef}
      header={{
        icon: <FilePlusIcon aria-hidden />,
        heading: "Opprett ny manuell behandling av rett til dagpenger",
      }}
      width={620}
    >
      <Modal.Body className={"flex flex-col gap-4"}>
        <BodyLong>
          Den nye behandlingen er basert på opplysninger i siste fullførte behandling av rett til
          dagpenger. Du kan endre opplysninger fram i tid for å lage et nytt vedtak.
        </BodyLong>
        <BodyLong>
          Hvis du i stedet vil endre opplysninger tilbake i tid for å omgjøre vedtaket, må du velge
          &#34;Revurdering&#34; istedenfor &#34;Ny manuell behandling&#34;.
        </BodyLong>
        <BodyLong>Du kan avbryte, men ikke slette den nye behandlingen.</BodyLong>
        <BodyLong>Er du sikker på at du vil opprette en ny behandling?</BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <Button
          size={"small"}
          loading={opprettManuellBehandlingForm.formState.isSubmitting}
          onClick={() => opprettManuellBehandlingForm.submit()}
        >
          Opprett ny manuell behandling
        </Button>

        <Button size={"small"} type="button" variant="secondary" onClick={closeModal}>
          Ikke opprett behandling
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

ManuellBehandlingModal.displayName = "ManuellBehandlingModal";
