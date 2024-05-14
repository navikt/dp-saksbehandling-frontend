import { useRef, useState } from "react";
import { useFetcher } from "@remix-run/react";
import { add, format } from "date-fns";
import { Button, DatePicker, Modal } from "@navikt/ds-react";
import { nb } from "date-fns/locale";
import styles from "./OppgaveMer.module.css";

export function OppgaveMer() {
  const fetcher = useFetcher();
  const ref = useRef<HTMLDialogElement>(null);
  const [utsattTilDato, setUtsattTilDato] = useState<Date | undefined>();

  return (
    <div className={styles.container}>
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
        Utsett oppgave
      </Button>

      <Modal ref={ref} header={{ heading: "Utsett oppgave" }} closeOnBackdropClick>
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

            <Button
              size="small"
              variant="primary"
              name="_action"
              value="utsett-oppgave"
              loading={fetcher.state !== "idle"}
            >
              Utsett oppgave
            </Button>
          </fetcher.Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
