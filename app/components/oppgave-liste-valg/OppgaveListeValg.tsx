import { useRef, useState } from "react";
import type { IOppgave } from "~/models/oppgave.server";
import { Button, Popover } from "@navikt/ds-react";
import { MenuElipsisHorizontalIcon } from "@navikt/aksel-icons";
import { RemixLink } from "~/components/RemixLink";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useFetcher } from "@remix-run/react";
import type { action as leggTilbakeAction } from "~/routes/action-legg-tilbake-oppgave";
import type { action as tildelOppgaveAction } from "~/routes/action-tildel-oppgave";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import styles from "./OppgaveListeValg.module.css";

export function OppgaveListeValg({ oppgave }: { oppgave: IOppgave }) {
  const leggTilbakeFetcher = useFetcher<typeof leggTilbakeAction>();
  useHandleAlertMessages(leggTilbakeFetcher.data);
  const tildelOppgaveFetcher = useFetcher<typeof tildelOppgaveAction>();
  useHandleAlertMessages(tildelOppgaveFetcher.data);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const [openState, setOpenState] = useState(false);

  const minOppgave = oppgave.saksbehandlerIdent === saksbehandler.onPremisesSamAccountName;
  const kanTildeleOgBehandleOppgave =
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    oppgave.tilstand === "PAA_VENT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && minOppgave);

  return (
    <>
      <Button
        ref={buttonRef}
        size="small"
        variant="tertiary-neutral"
        onClick={() => setOpenState(!openState)}
        aria-expanded={openState}
        icon={<MenuElipsisHorizontalIcon />}
      />
      <Popover
        className={styles.popover}
        open={openState}
        onClose={() => setOpenState(false)}
        anchorEl={buttonRef.current}
        offset={0}
        arrow={false}
        placement="left-start"
      >
        <Popover.Content className={styles.container}>
          {kanTildeleOgBehandleOppgave && (
            <tildelOppgaveFetcher.Form method="post" action="/action-tildel-oppgave">
              <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
              <Button
                variant="tertiary-neutral"
                size="xsmall"
                loading={tildelOppgaveFetcher.state !== "idle"}
              >
                Behandle oppgave
              </Button>
            </tildelOppgaveFetcher.Form>
          )}

          {!kanTildeleOgBehandleOppgave && (
            <RemixLink
              to={`/oppgave/${oppgave.oppgaveId}`}
              asButtonVariant="tertiary-neutral"
              size="xsmall"
            >
              Se oppgave
            </RemixLink>
          )}

          {minOppgave && oppgave.tilstand !== "FERDIG_BEHANDLET" && (
            <leggTilbakeFetcher.Form method="post" action="/action-legg-tilbake-oppgave">
              <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
              <Button
                variant="tertiary-neutral"
                size="xsmall"
                loading={leggTilbakeFetcher.state !== "idle"}
              >
                Legg oppgave tilbake i køen
              </Button>
            </leggTilbakeFetcher.Form>
          )}
        </Popover.Content>
      </Popover>
    </>
  );
}
