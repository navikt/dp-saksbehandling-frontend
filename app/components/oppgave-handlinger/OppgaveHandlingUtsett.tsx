import { Alert, Button, Checkbox, DatePicker, Modal, Select } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { add, format } from "date-fns";
import { useRef, useState } from "react";
import { Form, useNavigation } from "react-router";

import styles from "~/components/oppgave-handlinger/OppgaveHandlinger.module.css";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentValideringUtsettOppgave } from "~/utils/validering.util";

import { components as saksbehandlingComponents } from "../../../openapi/saksbehandling-typer";

export function OppgaveHandlingUtsett() {
  const { state } = useNavigation();
  const ref = useRef<HTMLDialogElement>(null);
  const { aktivtOppgaveSok } = useSaksbehandler();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [utsattTilDato, setUtsattTilDato] = useState<Date | undefined>();

  const validatedForm = useForm({
    schema: hentValideringUtsettOppgave(),
    method: "post",
    defaultValues: {
      oppgaveId: oppgave.oppgaveId,
      beholdOppgave: false,
      utsettTilDato: "",
      // Castingen her gjør at vi kan ha en tom verdi selv om paaVentAarsak er påkrevd i sjemaet
      // https://github.com/colinhacks/zod/discussions/1198#discussioncomment-13070773
      paaVentAarsak: "" as unknown as saksbehandlingComponents["schemas"]["UtsettOppgaveAarsak"],
    },
    validationBehaviorConfig: {
      initial: "onSubmit",
      whenTouched: "onSubmit",
      whenSubmitted: "onChange",
    },
  });

  function oppdaterDato(dato?: Date) {
    setUtsattTilDato(dato);
    if (validatedForm.error("utsettTilDato")) {
      validatedForm.validate();
    }
  }

  return (
    <>
      <Button
        size="small"
        variant="tertiary"
        onClick={() => ref.current?.showModal()}
        loading={state !== "idle"}
      >
        Sett på vent
      </Button>

      <Modal
        ref={ref}
        className={styles.modal}
        header={{ heading: "Sett på vent" }}
        closeOnBackdropClick
      >
        <Modal.Body>
          <Form method="post" {...validatedForm.getFormProps()}>
            <input name="_action" value="utsett-oppgave" hidden={true} readOnly={true} />
            <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
            <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />

            <DatePicker.Standalone
              onSelect={oppdaterDato}
              fromDate={add(new Date(), { days: 1 })}
              toDate={add(new Date(), { days: 20 })}
            />

            {validatedForm.error("utsettTilDato") && (
              <Alert variant={"error"} size="small" className={styles.formError}>
                {validatedForm.error("utsettTilDato")}
              </Alert>
            )}

            <input
              name="utsettTilDato"
              value={utsattTilDato ? format(utsattTilDato, "yyyy-MM-dd") : ""}
              hidden={true}
              readOnly={true}
            />

            <Select label="Velg årsak" size="small" name="paaVentAarsak">
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

            {validatedForm.error("paaVentAarsak") && (
              <Alert variant={"error"} size="small" className={styles.formError}>
                {validatedForm.error("paaVentAarsak")}
              </Alert>
            )}

            <Checkbox name="beholdOppgave" size="small" className={styles.beholdOppgaveCheckbox}>
              Behold oppgave
            </Checkbox>

            <Button size="small" variant="primary" loading={state !== "idle"}>
              Sett på vent
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
