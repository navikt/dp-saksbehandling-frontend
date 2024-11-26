import { Alert, Button, Checkbox, DatePicker, Modal } from "@navikt/ds-react";
import { useFetcher, useNavigate } from "@remix-run/react";
import { add, format } from "date-fns";
import { nb } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";

import styles from "~/components/oppgave-handlinger/OppgaveHandlinger.module.css";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { action as utsettAction } from "~/routes/action-utsett-oppgave";
import { isAlertResponse, isFormValidationErrorResponse } from "~/utils/type-guards";

export function OppgaveHandlingUtsett() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDialogElement>(null);
  const utsettOppgaveFetcher = useFetcher<typeof utsettAction>();

  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [utsattTilDato, setUtsattTilDato] = useState<Date | undefined>();

  useHandleAlertMessages(
    isAlertResponse(utsettOppgaveFetcher?.data) ? utsettOppgaveFetcher?.data : undefined,
  );

  useEffect(() => {
    if (utsettOppgaveFetcher.data && isAlertResponse(utsettOppgaveFetcher.data)) {
      ref?.current?.close();
      navigate("/");
    }
  }, [utsettOppgaveFetcher.data, navigate]);

  return (
    <>
      <Button size="small" variant="tertiary" onClick={() => ref.current?.showModal()}>
        Sett på vent
      </Button>
      <Modal
        ref={ref}
        className={styles.modal}
        header={{ heading: "Sett på vent" }}
        closeOnBackdropClick
      >
        <Modal.Body>
          <utsettOppgaveFetcher.Form method="post" action="/action-utsett-oppgave">
            <DatePicker.Standalone
              onSelect={(dato) => setUtsattTilDato(dato)}
              fromDate={add(new Date(), { days: 1 })}
              toDate={add(new Date(), { days: 20 })}
            />
            <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
            <input
              hidden
              readOnly
              name="utsettTilDato"
              value={utsattTilDato ? format(utsattTilDato, "yyyy-MM-dd", { locale: nb }) : ""}
            />

            <Checkbox name="beholdOppgave" size="small">
              Behold oppgave
            </Checkbox>

            <Button
              size="small"
              variant="primary"
              name="_action"
              value="utsett-oppgave"
              loading={utsettOppgaveFetcher.state !== "idle"}
            >
              Sett på vent
            </Button>

            {isFormValidationErrorResponse(utsettOppgaveFetcher.data) && (
              <Alert variant="error" size="small" className="my-2">
                {utsettOppgaveFetcher.data.message}
              </Alert>
            )}
          </utsettOppgaveFetcher.Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
