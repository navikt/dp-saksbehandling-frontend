import type { Dispatch, SetStateAction } from "react";
import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { useFetcher } from "@remix-run/react";
import type { action, IFerdigstillValg } from "~/routes/oppgave.$oppgaveId.behandle";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

interface IProps {
  aktivModalId?: IFerdigstillValg;
  setAktivModalId: Dispatch<SetStateAction<IFerdigstillValg | undefined>>;
}

export function BehandlingBekreftModal(props: IProps) {
  const fetcher = useFetcher<typeof action>({ key: "ferdigstill-behandling" });
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
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
          <strong className="capitalize">{aktivModalId}</strong> behandlig
        </BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <fetcher.Form method="post">
          <Button
            type="submit"
            variant="primary"
            name="skjemadata"
            className="mr-4"
            loading={fetcher.state !== "idle"}
            value={JSON.stringify({
              ferdigstillValg: aktivModalId,
              personIdent: oppgave.personIdent,
              behandlingId: oppgave.behandlingId,
            })}
          >
            Ja, jeg er sikker
          </Button>

          <Button
            type="button"
            variant="secondary"
            onClick={() => setAktivModalId(undefined)}
            loading={fetcher.state !== "idle"}
          >
            Avbryt
          </Button>
        </fetcher.Form>
      </Modal.Footer>
    </Modal>
  );
}
