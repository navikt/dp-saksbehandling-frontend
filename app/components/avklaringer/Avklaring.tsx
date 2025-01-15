import {
  CheckmarkCircleFillIcon,
  ExclamationmarkTriangleFillIcon,
  RobotSmileFillIcon,
} from "@navikt/aksel-icons";
import { Button, Detail, ExpansionCard, Heading, TextField } from "@navikt/ds-react";
import { Form, useNavigation } from "@remix-run/react";
import classnames from "classnames";
import { useState } from "react";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IAvklaring } from "~/models/behandling.server";
import { formaterNorskDato } from "~/utils/dato.utils";

import styles from "./Avklaring.module.css";

interface IProps {
  avklaring: IAvklaring;
}

export function Avklaring({ avklaring }: IProps) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { state } = useNavigation();
  const [utvidet, setUtvidet] = useState<boolean>(false);
  const maaKvitteres = avklaring.status === "Åpen";

  return (
    <>
      <ExpansionCard
        size="small"
        aria-label="Small-variant"
        className={styles.alertCard}
        open={utvidet}
        onToggle={() => setUtvidet(!utvidet)}
      >
        <ExpansionCard.Header
          className={classnames(styles.heading, {
            [styles.headingSuccess]:
              avklaring.status === "Avklart" || avklaring.status === "Avbrutt",
            [styles.headingWarning]: avklaring.status === "Åpen",
          })}
        >
          {renderStatusIcon(avklaring.status)}
          <Heading size={"xsmall"}>{avklaring.tittel}</Heading>
        </ExpansionCard.Header>

        <ExpansionCard.Content className={styles.content}>
          {avklaring.beskrivelse}
          {avklaring.status === "Avklart" && (
            <Detail>
              {`${formaterNorskDato(avklaring.sistEndret, true)} av ${avklaring.avklartAv?.ident}`}
            </Detail>
          )}
          {avklaring.status === "Avbrutt" && (
            <Detail>{`${formaterNorskDato(avklaring.sistEndret, true)} av Regelmotor`}</Detail>
          )}

          {maaKvitteres && (
            <Form
              className={styles.buttonContainer}
              method="post"
              onSubmit={() => setUtvidet(!utvidet)}
            >
              <input name="_action" value="kvitter-avklaring" readOnly={true} hidden={true} />
              <input name="avklaring-id" value={avklaring.id} readOnly={true} hidden={true} />
              <input
                name="behandling-id"
                value={oppgave.behandlingId}
                readOnly={true}
                hidden={true}
              />

              <TextField
                className={styles.begrunnelseInput}
                size="small"
                label="Begrunnelse"
                name="begrunnelse"
              />

              <Button
                variant="secondary-neutral"
                size="xsmall"
                loading={state !== "idle"}
                type="button"
                onClick={() => setUtvidet(false)}
              >
                Avbryt
              </Button>

              <Button variant="primary" size="xsmall" loading={state !== "idle"}>
                Lagre
              </Button>
            </Form>
          )}
        </ExpansionCard.Content>
      </ExpansionCard>
    </>
  );
}

function renderStatusIcon(status: IAvklaring["status"]) {
  switch (status) {
    case "Åpen":
      return <ExclamationmarkTriangleFillIcon color={"var(--a-orange-600)"} fontSize={"1.5rem"} />;
    case "Avklart":
      return <CheckmarkCircleFillIcon color={"var(--a-green-500)"} fontSize={"1.5rem"} />;
    case "Avbrutt":
      return <RobotSmileFillIcon color={"var(--a-green-500)"} fontSize={"1.5rem"} />;
    default:
      return null;
  }
}
