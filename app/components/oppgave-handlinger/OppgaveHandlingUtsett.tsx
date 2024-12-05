import { Alert, Button, Checkbox, DatePicker, Modal } from "@navikt/ds-react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { add, format } from "date-fns";
import { nb } from "date-fns/locale";
import { useRef, useState } from "react";

import styles from "~/components/oppgave-handlinger/OppgaveHandlinger.module.css";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { action } from "~/routes/oppgave.$oppgaveId";
import { isAlert, isFormValidationError } from "~/utils/type-guards";

export function OppgaveHandlingUtsett() {
  const { state } = useNavigation();
  const ref = useRef<HTMLDialogElement>(null);
  const actionData = useActionData<typeof action>();

  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [utsattTilDato, setUtsattTilDato] = useState<Date | undefined>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

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
          <Form method="post">
            <DatePicker.Standalone
              onSelect={(dato) => setUtsattTilDato(dato)}
              fromDate={add(new Date(), { days: 1 })}
              toDate={add(new Date(), { days: 20 })}
            />
            <input name="_action" value="utsett-oppgave" hidden={true} readOnly={true} />
            <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
            <input
              name="utsettTilDato"
              value={utsattTilDato ? format(utsattTilDato, "yyyy-MM-dd", { locale: nb }) : ""}
              hidden={true}
              readOnly={true}
            />

            <Checkbox name="beholdOppgave" size="small">
              Behold oppgave
            </Checkbox>

            <Button size="small" variant="primary" loading={state !== "idle"}>
              Sett på vent
            </Button>

            {isFormValidationError(actionData) && (
              <Alert variant="error" size="small" className="my-2">
                {actionData.message}
              </Alert>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
