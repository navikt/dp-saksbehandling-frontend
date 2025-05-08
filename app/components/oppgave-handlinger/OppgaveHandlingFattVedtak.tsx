import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { useEffect, useRef } from "react";
import { Form, useActionData, useNavigation } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  utfall: components["schemas"]["Behandling"]["utfall"];
}

export function OppgaveHandlingFattVedtak(props: IProps) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const fattVedtakModalRef = useRef<HTMLDialogElement>(null);
  const { state } = useNavigation();
  const actionData = useActionData<typeof handleActions>();

  useEffect(() => {
    if (isAlert(actionData) && actionData.variant === "error") {
      fattVedtakModalRef.current?.close();
    }
  }, [actionData]);

  return (
    <>
      <Button
        size="small"
        onClick={() => fattVedtakModalRef.current?.showModal()}
        loading={state !== "idle"}
      >
        Fatt vedtak
      </Button>

      <Modal ref={fattVedtakModalRef} header={{ heading: "Fatt vedtak" }}>
        <Modal.Body>
          <BodyLong>
            Ønsker du å fatte vedtak med utfall{" "}
            <strong>{props.utfall ? "innvilget" : "avslag"}</strong>
          </BodyLong>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => fattVedtakModalRef.current?.close()}
          >
            Avbryt
          </Button>

          <Form method="post">
            <input name="_action" value="fatt-vedtak" hidden={true} readOnly={true} />
            <input name="behandlingId" value={oppgave.behandlingId} hidden={true} readOnly={true} />
            <Button size="small" variant="primary" disabled={state !== "idle"}>
              Ja
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}
