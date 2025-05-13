import { FilePlusIcon } from "@navikt/aksel-icons";
import { BodyLong, Button, DatePicker, Modal, TextField, useDatepicker } from "@navikt/ds-react";
import { useRef } from "react";
import { useActionData, useNavigation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isFormValidationError } from "~/utils/type-guards";

import styles from "./OpprettKlage.module.css";

export function OpprettKlage() {
  const { oppgave } = useTypedRouteLoaderData("routes/person.$personUuid");
  const actionData = useActionData<typeof handleActions>();
  const { state } = useNavigation();
  const modalRef = useRef<HTMLDialogElement>(null);
  const { datepickerProps, inputProps } = useDatepicker();

  return (
    <div>
      <Button
        variant={"primary"}
        size={"small"}
        icon={<FilePlusIcon />}
        onClick={() => modalRef.current?.showModal()}
        loading={state !== "idle"}
        disabled={state !== "idle"}
      >
        Lag ny klage
      </Button>

      <Modal ref={modalRef} header={{ heading: "Opprett klage" }} className={styles.modal}>
        <Modal.Body>
          <BodyLong>Fyll ut klage data</BodyLong>

          <form method="post">
            <input name="_action" value="opprett-klage" hidden={true} readOnly={true} />
            <input name="personident" value={oppgave.person.ident} hidden={true} readOnly={true} />
            <DatePicker {...datepickerProps}>
              <DatePicker.Input
                {...inputProps}
                label="Velg dato"
                name={"opprettetDato"}
                size={"small"}
                error={
                  isFormValidationError(actionData) &&
                  actionData.field === "opprettetDato" && <>{actionData.message}</>
                }
              />
            </DatePicker>
            <TextField
              name="journalpostId"
              className="mt-4"
              label={"Journalpost Id"}
              size={"small"}
              error={
                isFormValidationError(actionData) &&
                actionData.field === "journalpostId" && <>{actionData.message}</>
              }
            />
            <TextField
              name="sakId"
              className="mt-4"
              label={"Sak Id"}
              size={"small"}
              error={
                isFormValidationError(actionData) &&
                actionData.field === "sakId" && <>{actionData.message}</>
              }
            />

            <div className={styles.buttonContainer}>
              <Button variant={"secondary"} size={"small"} onClick={() => modalRef.current?.close}>
                Avbryt
              </Button>
              <Button variant={"primary"} type={"submit"} size={"small"}>
                Opprett
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
