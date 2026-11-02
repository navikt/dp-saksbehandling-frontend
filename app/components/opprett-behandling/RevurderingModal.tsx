import { FilePlusIcon } from "@navikt/aksel-icons";
import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { forwardRef } from "react";

import { useOpprettBehandlingMutation } from "~/api/behandling-hooks";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export const RevurderingModal = forwardRef<HTMLDialogElement>((props, modalRef) => {
  const { personOversikt } = useTypedRouteLoaderData("routes/person.$personUuid");
  const { mutate: opprettBehandling, isPending } = useOpprettBehandlingMutation();

  function closeModal() {
    if (modalRef && typeof modalRef !== "function" && modalRef.current) {
      modalRef.current.close();
    }
  }

  return (
    <Modal
      ref={modalRef}
      header={{
        icon: <FilePlusIcon aria-hidden />,
        heading: "Opprett revurdering for å revurdere en behandling",
      }}
      width={620}
    >
      <Modal.Body className={"flex flex-col gap-2"}>
        <BodyLong>
          Den nye behandlingen er basert på opplysninger i siste fullførte behandling. Du kan endre
          opplysninger tilbake i tid for å revurdere og omgjøre vedtaket.
        </BodyLong>

        <BodyLong>
          Hvis du i stedet vil endre opplysninger fram i tid for å lage et nytt vedtak, må du velge
          &#34;Ny manuell behandling&#34; istedenfor &#34;Revurdering&#34;.
        </BodyLong>

        <BodyLong>Du kan avbryte, men ikke slette den nye behandlingen.</BodyLong>

        <BodyLong>Er du sikker på at du vil opprette en ny behandling?</BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <Button
          size={"small"}
          loading={isPending}
          onClick={() =>
            opprettBehandling(
              { personIdent: personOversikt.person.ident, behandlingstype: "Revurdering" },
              { onSuccess: closeModal },
            )
          }
        >
          Opprett revurdering
        </Button>

        <Button size={"small"} type="button" variant="secondary" onClick={closeModal}>
          Ikke opprett behandling
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

RevurderingModal.displayName = "RevurderingModal";
