import { SkipBackwardIcon } from "@navikt/aksel-icons";
import { Button, ButtonProps } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { z } from "zod";

import { useReturnerTilSaksbehandlerMutation } from "~/api/oppgave-hooks";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"] | components["schemas"]["OppgaveOversikt"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgReturnerTilMeg({ oppgave, buttonSize, buttonVariant }: IProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const params = useParams();
  const navigate = useNavigate();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const { mutate, isPending } = useReturnerTilSaksbehandlerMutation();

  const leggTilbakeForm = useForm({
    schema: z.object({
      årsak: z.enum(["ANNET"], {
        message: "Du må velge en årsak",
      }),
    }),
    defaultValues: {
      årsak: "ANNET" as components["schemas"]["LeggTilbakeAarsak"], // Start with an empty value to force selection
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
        onClick={() => leggTilbakeForm.submit()}
        loading={isPending}
        icon={<SkipBackwardIcon aria-hidden />}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Returner til meg
      </Button>
    </div>
  );
}
