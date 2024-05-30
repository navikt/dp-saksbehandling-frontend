import React, { useEffect, useRef, useState } from "react";
import { useFetcher } from "@remix-run/react";
import { add, format } from "date-fns";
import { Button, Checkbox, DatePicker, Modal } from "@navikt/ds-react";
import { nb } from "date-fns/locale";
import styles from "./OppgaveMer.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { action as utsettAction } from "~/routes/_oppgaver.a-utsett-oppgave";
import type { action as leggTilbakeAction } from "~/routes/_oppgaver.a-legg-tilbake-oppgave";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import {
  handleLeggTilbakeOppgaveMessages,
  handleUtsettOppgaveMessages,
} from "~/components/alert-messages/handleAlertMessages";

export function OppgaveMer() {
  const { addAlert } = useGlobalAlerts();
  const utsettOppgaveFetcher = useFetcher<typeof utsettAction>();
  const leggTilbakeOppgaveFetcher = useFetcher<typeof leggTilbakeAction>();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const ref = useRef<HTMLDialogElement>(null);
  const [utsattTilDato, setUtsattTilDato] = useState<Date | undefined>();

  useEffect(() => {
    if (utsettOppgaveFetcher.data?.alert) {
      handleUtsettOppgaveMessages(
        utsettOppgaveFetcher.data.httpCode,
        utsettOppgaveFetcher.data.message,
        addAlert,
      );
      ref.current?.close();
    }
    // addAlert i dependency array fører til uendelig loop
  }, [utsettOppgaveFetcher.data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (leggTilbakeOppgaveFetcher.data?.alert) {
      handleLeggTilbakeOppgaveMessages(
        leggTilbakeOppgaveFetcher.data.httpCode,
        leggTilbakeOppgaveFetcher.data.message,
        addAlert,
      );
    }
    // addAlert i dependency array fører til uendelig loop
  }, [leggTilbakeOppgaveFetcher.data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.container}>
      {oppgave.tilstand !== "FERDIG_BEHANDLET" && (
        <>
          <leggTilbakeOppgaveFetcher.Form method="post" action="/a-legg-tilbake-oppgave">
            <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
            <Button
              size="small"
              variant="secondary"
              loading={leggTilbakeOppgaveFetcher.state !== "idle"}
            >
              Legg oppgave tilbake i køen
            </Button>
          </leggTilbakeOppgaveFetcher.Form>

          <Button size="small" variant="secondary" onClick={() => ref.current?.showModal()}>
            Sett på vent
          </Button>

          <Modal
            ref={ref}
            className={styles.modal}
            header={{ heading: "Sett på vent" }}
            closeOnBackdropClick
          >
            <Modal.Body>
              <utsettOppgaveFetcher.Form method="post" action="/a-utsett-oppgave">
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
