import { useRef, useState } from "react";
import { useFetcher } from "@remix-run/react";
import { add, format } from "date-fns";
import { Button, Checkbox, DatePicker, Modal } from "@navikt/ds-react";
import { nb } from "date-fns/locale";
import styles from "./OppgaveMer.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export function OppgaveMer() {
  const fetcher = useFetcher();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const ref = useRef<HTMLDialogElement>(null);
  const [utsattTilDato, setUtsattTilDato] = useState<Date | undefined>();

  return (
    <div className={styles.container}>
      {oppgave.tilstand !== "FERDIG_BEHANDLET" && (
        <>
          <fetcher.Form method="post">
            <Button
              size="small"
              variant="secondary"
              name="_action"
              value="legg-tilbake-oppgave"
              loading={fetcher.state !== "idle"}
            >
              Legg oppgave tilbake i køen
            </Button>
          </fetcher.Form>

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
              <fetcher.Form method="post">
                <DatePicker.Standalone
                  onSelect={(dato) => setUtsattTilDato(dato)}
                  fromDate={new Date()}
                  toDate={add(new Date(), { days: 19 })}
                />

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
                  loading={fetcher.state !== "idle"}
                >
                  Sett på vent
                </Button>
              </fetcher.Form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
}
