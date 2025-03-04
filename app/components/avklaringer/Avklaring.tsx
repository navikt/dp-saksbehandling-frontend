import {
  ExclamationmarkTriangleFillIcon,
  PersonPencilIcon,
  RobotSmileIcon,
} from "@navikt/aksel-icons";
import { BodyShort, Button, Detail, ExpansionCard, TextField } from "@navikt/ds-react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import classnames from "classnames";
import { useEffect, useState } from "react";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IAvklaring } from "~/models/behandling.server";
import { action } from "~/routes/oppgave.$oppgaveId.se.fullfort-oppgave";
import { formaterNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

import styles from "./Avklaring.module.css";

interface IProps {
  avklaring: IAvklaring;
  readonly?: boolean;
  defaultOpen?: boolean;
}

export function Avklaring({ avklaring, readonly, defaultOpen }: IProps) {
  const actionData = useActionData<typeof action>();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { state } = useNavigation();
  const [visBeskrivelse, setVisBeskrivelse] = useState<boolean>(defaultOpen ?? false);

  let avklartAv = "";
  if (avklaring.maskinelt) avklartAv = "av regelmotor";
  if (avklaring.avklartAv?.ident) avklartAv = `av ${avklaring.avklartAv?.ident}`;

  useEffect(() => {
    if (isAlert(actionData)) {
      setVisBeskrivelse(false);
    }
  }, [actionData]);

  return (
    <>
      <ExpansionCard
        size="small"
        aria-label=""
        className={styles.alertCard}
        open={visBeskrivelse}
        onToggle={() => setVisBeskrivelse(!visBeskrivelse)}
      >
        <ExpansionCard.Header
          className={classnames(styles.heading, {
            [styles.headingWarning]: avklaring.status === "Åpen",
          })}
        >
          {renderStatusIcon(avklaring.status, avklaring.maskinelt)}
          <BodyShort size="small" weight="semibold">
            {avklaring.tittel}
          </BodyShort>
        </ExpansionCard.Header>

        <ExpansionCard.Content className={styles.content}>
          {avklaring.beskrivelse}

          {avklaring.kanKvitteres && (
            <Form method="post">
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
                defaultValue={avklaring.begrunnelse ?? ""}
                readOnly={readonly}
              />

              {avklaring.sistEndret && (
                <Detail>
                  Sist endret {formaterNorskDato(avklaring.sistEndret, true)} {avklartAv}
                </Detail>
              )}

              {!readonly && (
                <>
                  <Button
                    variant="secondary-neutral"
                    size="xsmall"
                    loading={state !== "idle"}
                    type="button"
                  >
                    Lukk
                  </Button>

                  <Button
                    variant="primary"
                    size="xsmall"
                    loading={state !== "idle"}
                    type="submit"
                    onClick={() => setVisBeskrivelse(true)}
                  >
                    Lagre
                  </Button>
                </>
              )}
            </Form>
          )}
        </ExpansionCard.Content>
      </ExpansionCard>
    </>
  );
}

function renderStatusIcon(status: IAvklaring["status"], maskinelt: boolean) {
  switch (status) {
    case "Åpen":
      return <ExclamationmarkTriangleFillIcon color={"var(--a-orange-600)"} fontSize={"1.5rem"} />;
    case "Avklart":
      return maskinelt ? (
        <RobotSmileIcon fontSize={"1.5rem"} />
      ) : (
        <PersonPencilIcon fontSize="1.5rem" />
      );
    case "Avbrutt":
      return <RobotSmileIcon fontSize="1.5rem" />;
    default:
      return null;
  }
}
