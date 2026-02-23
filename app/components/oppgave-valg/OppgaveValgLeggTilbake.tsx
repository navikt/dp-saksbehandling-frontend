import { ArrowUndoIcon } from "@navikt/aksel-icons";
import { BodyLong, Button, ButtonProps, Modal, Select } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentTekstForLeggTilbakeÅrsak } from "~/utils/tekst.utils";
import { hentValideringForLeggTilbakeOppgave } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  oppgave: components["schemas"]["Oppgave"] | components["schemas"]["OppgaveOversikt"];
  buttonSize?: ButtonProps["size"];
  buttonVariant?: ButtonProps["variant"];
}

export function OppgaveValgLeggTilbake({ oppgave, buttonSize, buttonVariant }: IProps) {
  const { pathname } = useLocation();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const modalRef = useRef<HTMLDialogElement>(null);

  const leggTilbakeForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForLeggTilbakeOppgave(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "legg-tilbake-oppgave",
      oppgaveId: oppgave.oppgaveId,
      årsak: "" as unknown as components["schemas"]["LeggTilbakeAarsak"],
      aktivtOppgaveSok,
    },
  });

  return (
    <div>
      <Button
        size={buttonSize ? buttonSize : "xsmall"}
        variant={buttonVariant ? buttonVariant : "tertiary-neutral"}
        onClick={() => modalRef.current?.showModal()}
        loading={leggTilbakeForm.formState.isSubmitting}
        icon={<ArrowUndoIcon aria-hidden />}
        className={"aksel--font-regular aksel--full-bredde"}
      >
        Legg tilbake
      </Button>

      <Modal ref={modalRef} header={{ heading: "Legg tilbake" }}>
        <Modal.Body className={"pt-0"}>
          <BodyLong> Du er i ferd med å legge tilbake oppgaven</BodyLong>

          <Select label={"Velg årsak"} size={"small"} className={"mt-4"}>
            {oppgave.lovligeEndringer?.leggTilbakeAarsaker.map((årsak) => (
              <option key={årsak}>{hentTekstForLeggTilbakeÅrsak(årsak)}</option>
            ))}
          </Select>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            type={"button"}
            loading={leggTilbakeForm.formState.isSubmitting}
            onClick={() => leggTilbakeForm.submit()}
          >
            Ja, legg tilbake oppgaven
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
