import {
  ExclamationmarkTriangleFillIcon,
  PersonPencilIcon,
  RobotSmileIcon,
} from "@navikt/aksel-icons";
import { BodyShort, Button, Detail, ExpansionCard, Skeleton, TextField } from "@navikt/ds-react";
import classnames from "classnames";
import { useEffect, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router";

import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../../openapi/behandling-typer";
import styles from "./Avklaring.module.css";

interface IProps {
  avklaring: components["schemas"]["Avklaring"];
  behandlingId: string;
  readonly?: boolean;
}

export function Avklaring({ avklaring, behandlingId, readonly }: IProps) {
  const actionData = useActionData<typeof handleActions>();
  const { state } = useNavigation();
  const [visBeskrivelse, setVisBeskrivelse] = useState<boolean>(false);

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
          <BodyShort
            className={"flex items-center"}
            size="small"
            weight="semibold"
            as={state === "loading" ? Skeleton : "p"}
          >
            {renderStatusIcon(avklaring.status, avklaring.maskinelt)}
            {avklaring.tittel}
          </BodyShort>
        </ExpansionCard.Header>
        <ExpansionCard.Content className={styles.content}>
          {avklaring.beskrivelse}

          {avklaring.kanKvitteres && (
            <Form method="post">
              <input name="_action" value="kvitter-avklaring" readOnly={true} hidden={true} />
              <input name="avklaring-id" value={avklaring.id} readOnly={true} hidden={true} />
              <input name="behandling-id" value={behandlingId} readOnly={true} hidden={true} />

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
                  Sist endret {formaterTilNorskDato(avklaring.sistEndret, true)} {avklartAv}
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

function renderStatusIcon(
  status: components["schemas"]["Avklaring"]["status"],
  maskinelt: boolean,
) {
  switch (status) {
    case "Åpen":
      return (
        <ExclamationmarkTriangleFillIcon
          color={"var(--ax-bg-warning-strong)"}
          fontSize={"1.5rem"}
        />
      );
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
