import { HourglassTopFilledIcon } from "@navikt/aksel-icons";
import { Alert, Button, ButtonProps, Checkbox, DatePicker, Modal, Select } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { add } from "date-fns";
import { useRef } from "react";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringSettOppgavePåVent } from "~/utils/validering.util";

import { components } from "../../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgSettPåVent({ oppgave, buttonSize, buttonVariant }: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const modalRef = useRef<HTMLDialogElement>(null);

  const utsettOppgaveForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringSettOppgavePåVent(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "sett-oppgave-på-vent",
      oppgaveId: oppgave.oppgaveId,
      aktivtOppgaveSok: aktivtOppgaveSok,
      beholdOppgave: false,
      utsettTilDato: undefined as unknown as string | undefined,
      paaVentAarsak: "" as unknown as components["schemas"]["UtsettOppgaveAarsak"],
    },
  });

  return (
    <>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        icon={<HourglassTopFilledIcon aria-hidden />}
        onClick={() => modalRef.current?.showModal()}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Sett på vent
      </Button>

      <Modal ref={modalRef} header={{ heading: "Sett på vent" }} closeOnBackdropClick>
        <Modal.Body>
          <DatePicker.Standalone
            fromDate={add(new Date(), { days: 1 })}
            toDate={add(new Date(), { days: 20 })}
            onSelect={(dato) => {
              utsettOppgaveForm.field("utsettTilDato").clearError();
              utsettOppgaveForm
                .field("utsettTilDato")
                .setValue(dato ? formaterTilNorskDato(dato) : undefined);
            }}
          />

          {utsettOppgaveForm.error("utsettTilDato") && (
            <Alert variant={"error"} size="small" className={"my-2"}>
              {utsettOppgaveForm.error("utsettTilDato")}
            </Alert>
          )}

          <Select
            label="Velg årsak"
            size="small"
            name="paaVentAarsak"
            onChange={(event) => {
              utsettOppgaveForm.field("paaVentAarsak").clearError();
              utsettOppgaveForm
                .field("paaVentAarsak")
                .setValue(
                  event.currentTarget.value as components["schemas"]["UtsettOppgaveAarsak"],
                );
            }}
          >
            <option hidden={true} value={""}>
              Velg årsak
            </option>

            {oppgave.lovligeEndringer.paaVentAarsaker.map((aarsak) => (
              <option key={aarsak} value={aarsak}>
                {aarsak.charAt(0).toUpperCase() +
                  aarsak.slice(1).replaceAll("_", " ").toLowerCase()}
              </option>
            ))}
          </Select>

          {utsettOppgaveForm.error("paaVentAarsak") && (
            <Alert variant={"error"} size="small" className={"my-2"}>
              {utsettOppgaveForm.error("paaVentAarsak")}
            </Alert>
          )}

          <Checkbox name="beholdOppgave" size="small" className={"mt-2"}>
            Behold oppgave
          </Checkbox>

          <Button
            size="small"
            variant="primary"
            className={"mt-2"}
            onClick={() => utsettOppgaveForm.submit()}
            loading={utsettOppgaveForm.formState.isSubmitting}
          >
            Sett på vent
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
