import { useEffect, useRef, useState } from "react";
import { useFetcher } from "@remix-run/react";
import { add, format } from "date-fns";
import { Button, Checkbox, DatePicker, Modal } from "@navikt/ds-react";
import { nb } from "date-fns/locale";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { action as utsettAction } from "~/routes/action-utsett-oppgave";
import type { action as leggTilbakeAction } from "~/routes/action-legg-tilbake-oppgave";
import styles from "./OppgaveHandlinger.module.css";

import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";

export function OppgaveHandlinger() {
  const utsettOppgaveFetcher = useFetcher<typeof utsettAction>();
  const leggTilbakeOppgaveFetcher = useFetcher<typeof leggTilbakeAction>();
  useHandleAlertMessages(utsettOppgaveFetcher.data);
  useHandleAlertMessages(leggTilbakeOppgaveFetcher.data);
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const ref = useRef<HTMLDialogElement>(null);
  const [utsattTilDato, setUtsattTilDato] = useState<Date | undefined>();

  useEffect(() => {
    if (utsettOppgaveFetcher.data) {
      ref.current?.close();
    }
  }, [utsettOppgaveFetcher.data]);

  return (
    <div className={styles.container}>
      {oppgave.tilstand !== "FERDIG_BEHANDLET" && (
        <>
          <leggTilbakeOppgaveFetcher.Form method="post" action="/action-legg-tilbake-oppgave">
            <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
            <Button
              size="small"
              variant="tertiary"
              loading={leggTilbakeOppgaveFetcher.state !== "idle"}
            >
              Legg tilbake
            </Button>
          </leggTilbakeOppgaveFetcher.Form>

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
                  fromDate={new Date()}
                  toDate={add(new Date(), { days: 19 })}
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
                  loading={leggTilbakeOppgaveFetcher.state !== "idle"}
                >
                  Sett på vent
                </Button>
              </utsettOppgaveFetcher.Form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
}
