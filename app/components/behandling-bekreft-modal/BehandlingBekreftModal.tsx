import type { Dispatch, SetStateAction } from "react";
import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { useFetcher } from "@remix-run/react";
import type { action, IModalTilstand } from "~/routes/saksbehandling.oppgave.$oppgaveId.behandling";

interface IProps {
  aktivModalId?: IModalTilstand;
  setAktivModalId: Dispatch<SetStateAction<IModalTilstand | undefined>>;
}

export function BehandlingBekreftModal(props: IProps) {
  const fetcher = useFetcher<typeof action>();
  const { aktivModalId, setAktivModalId } = props;

  return (
    <Modal
      open={!!aktivModalId}
      width="small"
      closeOnBackdropClick={true}
      onClose={() => setAktivModalId(undefined)}
      header={{
        heading: "Er du sikker?",
        size: "small",
        closeButton: false,
      }}
    >
      <Modal.Body>
        <BodyLong>
          Endre oppgave tilstand til: <strong>{aktivModalId}</strong>
        </BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <fetcher.Form method="post">
          {aktivModalId === "lukk" && (
            <Button
              type="submit"
              variant="primary"
              name="variant"
              className="mr-4"
              value={JSON.stringify({ variant: "lukk" })}
            >
              Ja, jeg er sikker
            </Button>
          )}

          {aktivModalId === "avslag" && (
            <Button
              type="submit"
              variant="primary"
              name="variant"
              className="mr-4"
              value={JSON.stringify({ variant: "avslag" })}
            >
              Ja, jeg er sikker
            </Button>
          )}

          <Button type="button" variant="secondary" onClick={() => setAktivModalId(undefined)}>
            Avbryt
          </Button>
        </fetcher.Form>
      </Modal.Footer>
    </Modal>
  );
}
