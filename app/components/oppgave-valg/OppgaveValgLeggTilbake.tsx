import { ArrowUndoIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps, Modal, Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { z } from "zod";

import { useLeggTilbakeOppgaveMutation } from "~/api/oppgave-hooks";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentTekstForLeggTilbakeÅrsak } from "~/utils/tekst.utils";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"] | components["schemas"]["OppgaveOversikt"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgLeggTilbake({ oppgave, buttonSize, buttonVariant }: IProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const params = useParams();
  const navigate = useNavigate();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const { mutate, isPending } = useLeggTilbakeOppgaveMutation();

  const leggTilbakeForm = useForm({
    schema: z.object({
      årsak: z.enum(["MANGLER_KOMPETANSE", "FRAVÆR", "INHABILITET", "ANNET"], {
        message: "Du må velge en årsak",
      }),
    }),
    defaultValues: {
      årsak: "" as unknown as components["schemas"]["LeggTilbakeAarsak"], // Start with an empty value to force selection
    },
    submitSource: "state",
    resetAfterSubmit: true,
    handleSubmit: (data) => {
      mutate(
        { oppgaveId: oppgave.oppgaveId, årsak: data.årsak },
        {
          onSuccess: () => {
            // If returning the task being viewed, redirect to the list
            if (params.oppgaveId === oppgave.oppgaveId && aktivtOppgaveSok) {
              navigate(`/?${aktivtOppgaveSok}`);
            }
            // Close modal
            modalRef.current?.close();
          },
        },
      );
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => modalRef.current?.showModal()}
        loading={isPending}
        icon={<ArrowUndoIcon aria-hidden />}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Legg tilbake
      </Button>

      <Modal ref={modalRef} header={{ heading: "Legg tilbake" }}>
        <Modal.Body>
          <RadioGroup
            {...leggTilbakeForm.getInputProps("årsak")}
            size="small"
            error={leggTilbakeForm.field("årsak").error()}
            legend="Velg årsak"
          >
            {oppgave.lovligeEndringer.leggTilbakeAarsaker.map((årsak) => (
              <Radio key={årsak} value={årsak}>
                {hentTekstForLeggTilbakeÅrsak(årsak)}
              </Radio>
            ))}
          </RadioGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            type="button"
            loading={isPending}
            onClick={() => leggTilbakeForm.submit()}
          >
            Legg tilbake
          </Button>

          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
            disabled={isPending}
          >
            Ikke legg tilbake
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
