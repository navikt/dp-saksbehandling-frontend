import { GavelSoundBlockIcon } from "@navikt/aksel-icons";
import { BodyLong, Button, Modal, Select, TextField } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { forwardRef } from "react";
import { useLocation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentValideringForOpprettRevurderingEtterKlage } from "~/utils/validering.util";

export const RevurderingEtterKlageModal = forwardRef<HTMLDialogElement>((props, modalRef) => {
  const { pathname } = useLocation();
  const { personOversikt } = useTypedRouteLoaderData("routes/person.$personUuid");

  function closeModal() {
    if (modalRef && typeof modalRef !== "function" && modalRef.current) {
      modalRef.current.close();
    }
  }

  const opprettRevurderingEtterKlageForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForOpprettRevurderingEtterKlage(),
    onSubmitSuccess: closeModal,
    defaultValues: {
      _action: "opprett-revurdering-etter-klage",
      personIdent: personOversikt.person.ident,
      klageId: "",
      kildesystem: "Førsteinstans",
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

        <Select
          {...opprettRevurderingEtterKlageForm.field("kildesystem").getInputProps()}
          label="Kildesystem"
          error={opprettRevurderingEtterKlageForm.field("kildesystem").error()}
        >
          <option value="Førsteinstans">Førsteinstans</option>
          <option value="Klageinstans">Klageinstans</option>
          <option value="Trygderetten">Trygderetten</option>
        </Select>
      </Modal.Body>

      <Modal.Footer>
        <Button
          size={"small"}
          loading={opprettRevurderingEtterKlageForm.formState.isSubmitting}
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
