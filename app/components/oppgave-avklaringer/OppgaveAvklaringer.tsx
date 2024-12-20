import { CheckmarkCircleIcon } from "@navikt/aksel-icons";
import { Alert, Button } from "@navikt/ds-react";
import { Form, useNavigation } from "@remix-run/react";
import classnames from "classnames";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IAvklaring } from "~/models/behandling.server";

import styles from "./OppgaveAvklaringer.module.css";

interface IProps {
  avklaringer: IAvklaring[];
}

export function OppgaveAvklaringer(props: IProps) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { state } = useNavigation();

  const avklaringer = props.avklaringer.filter((avklaring) => !avklaring.maskinelt);

  return (
    <>
      {avklaringer.map((avklaring) => {
        const maaKvitteres = avklaring.status === "Åpen";
        return (
          <Alert
            key={avklaring.tittel}
            className={classnames("alert--compact", styles.alert)}
            variant={maaKvitteres ? "warning" : "success"}
            fullWidth={true}
            size={"small"}
          >
            {avklaring.beskrivelse}
            {maaKvitteres && (
              <Form className={styles.buttonContainer} method="post">
                <input name="_action" value="kvitter-avklaring" readOnly={true} hidden={true} />
                <input name="avklaring-id" value={avklaring.id} readOnly={true} hidden={true} />
                <input
                  name="behandling-id"
                  value={oppgave.behandlingId}
                  readOnly={true}
                  hidden={true}
                />
                <Button variant="tertiary-neutral" size="xsmall" loading={state !== "idle"}>
                  <CheckmarkCircleIcon title="Godkjenn" />
                </Button>
              </Form>
            )}
          </Alert>
        );
      })}
    </>
  );
}
