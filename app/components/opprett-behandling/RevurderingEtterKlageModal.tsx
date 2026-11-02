import { GavelSoundBlockIcon } from "@navikt/aksel-icons";
import { BodyLong, Button, Modal, TextField } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { forwardRef } from "react";

import { useOpprettBehandlingMutation } from "~/api/behandling-hooks";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentValideringForOpprettRevurderingEtterKlage } from "~/utils/validering.util";

export const RevurderingEtterKlageModal = forwardRef<HTMLDialogElement>((props, modalRef) => {
  const { personOversikt } = useTypedRouteLoaderData("routes/person.$personUuid");
  const { mutateAsync: opprettBehandling, isPending } = useOpprettBehandlingMutation();

  function closeModal() {
    if (modalRef && typeof modalRef !== "function" && modalRef.current) {
      modalRef.current.close();
    }
  }

  const opprettRevurderingEtterKlageForm = useForm({
    submitSource: "state",
    schema: hentValideringForOpprettRevurderingEtterKlage(),
    handleSubmit: async (values) => {
      await opprettBehandling({
        ...values,
        personIdent: personOversikt.person.ident,
        behandlingstype: "OmgjøringEtterKlage",
      });
    },
    onSubmitSuccess: closeModal,
    defaultValues: {
      klageId: "",
    },
  });

  return (
    <Modal
      ref={modalRef}
      header={{
        icon: <GavelSoundBlockIcon aria-hidden />,
        heading: "Opprett revurdering etter klage",
      }}
      width={620}
    >
      <Modal.Body className={"flex flex-col gap-4"}>
        <BodyLong>
          Lim inn klage-ID-en for den ferdigstilte klagebehandlingen (medhold eller delvis medhold).
        </BodyLong>

        <TextField
          {...opprettRevurderingEtterKlageForm.field("klageId").getInputProps()}
          label="Klage-ID"
          description="Kopiert fra den ferdigstilte klagebehandlingen"
          error={opprettRevurderingEtterKlageForm.field("klageId").error()}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button
          size={"small"}
          loading={isPending || opprettRevurderingEtterKlageForm.formState.isSubmitting}
          onClick={() => opprettRevurderingEtterKlageForm.submit()}
        >
          Opprett revurdering etter klage
        </Button>

        <Button size={"small"} type="button" variant="secondary" onClick={closeModal}>
          Ikke opprett behandling
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

RevurderingEtterKlageModal.displayName = "RevurderingEtterKlageModal";
