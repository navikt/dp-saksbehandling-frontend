import type { Dispatch, SetStateAction } from "react";
import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { useFetcher } from "@remix-run/react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { action as godkjennBehandlingAction } from "~/routes/action-godkjenn-behandling";
import type { action as avbrytBehandlingAction } from "~/routes/action-avbryt-behandling";

interface IProps {
  aktivModalId?: IBehandlingValg;
  setAktivModalId: Dispatch<SetStateAction<IBehandlingValg | undefined>>;
}

export type IBehandlingValg = "godkjenn-behandling" | "avbryt-behandling";

export function BehandlingBekreftModal({ aktivModalId, setAktivModalId }: IProps) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const godkjennBehandlingFetcher = useFetcher<typeof godkjennBehandlingAction>();
  const avbrytBehandlingFetcher = useFetcher<typeof avbrytBehandlingAction>();

  return (
    <Modal
      open={!!aktivModalId}
      width="small"
      closeOnBackdropClick={true}
      onClose={() => setAktivModalId(undefined)}
      header={{
        heading: "Er du sikker?",
        size: "medium",
        closeButton: false,
      }}
    >
      <Modal.Body>
        <BodyLong>{aktivModalId && getBehandlingTekst(aktivModalId)}</BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <Button
          size="small"
          type="button"
          variant="secondary"
          onClick={() => setAktivModalId(undefined)}
          loading={avbrytBehandlingFetcher.state !== "idle"}
        >
          Avbryt
        </Button>

        {aktivModalId === "avbryt-behandling" && (
          <avbrytBehandlingFetcher.Form method="post" action="/action-avbryt-behandling">
            <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
            <input hidden={true} readOnly={true} name="personIdent" value={oppgave.personIdent} />

            <Button
              size="small"
              variant="primary"
              loading={avbrytBehandlingFetcher.state !== "idle"}
            >
              Ja
            </Button>
          </avbrytBehandlingFetcher.Form>
        )}

        {aktivModalId === "godkjenn-behandling" && (
          <godkjennBehandlingFetcher.Form method="post" action="/action-godkjenn-behandling">
            <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
            <input hidden={true} readOnly={true} name="personIdent" value={oppgave.personIdent} />

            <Button
              size="small"
              variant="primary"
              loading={godkjennBehandlingFetcher.state !== "idle"}
            >
              Ja
            </Button>
          </godkjennBehandlingFetcher.Form>
        )}
      </Modal.Footer>
    </Modal>
  );
}

function getBehandlingTekst(behandlingValg: IBehandlingValg) {
  switch (behandlingValg) {
    case "godkjenn-behandling":
      return "Du er i ferd med å sende oppgaven til automatisk avslag";
    case "avbryt-behandling":
      return "Du er i ferd med å sende oppgaven til manuell behandling i arena";
  }
}
