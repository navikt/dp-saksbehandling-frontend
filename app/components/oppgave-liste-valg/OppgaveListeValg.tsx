import React, { useRef, useState } from "react";
import type { IOppgave } from "~/models/oppgave.server";
import { Button, Popover } from "@navikt/ds-react";
import { MenuElipsisHorizontalIcon } from "@navikt/aksel-icons";
import { RemixLink } from "~/components/RemixLink";
import styles from "./OppgaveListeValg.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useFetcher } from "@remix-run/react";

export function OppgaveListeValg({ oppgave }: { oppgave: IOppgave }) {
  const fetcher = useFetcher();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const [openState, setOpenState] = useState(false);

  const minOppgave = oppgave.saksbehandlerIdent === saksbehandler.onPremisesSamAccountName;
  const kanTildeleOppgave =
    oppgave.tilstand.type === "KLAR_TIL_BEHANDLING" ||
    (oppgave.tilstand.type === "UNDER_BEHANDLING" && minOppgave);

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
          {kanTildeleOppgave && (
            <RemixLink
              to={`/oppgave/${oppgave.oppgaveId}/behandle`}
              asButtonVariant="tertiary-neutral"
              size="xsmall"
            >
              {minOppgave ? "Behandle oppgave" : "Tildel oppgave"}
            </RemixLink>
          )}

          {!kanTildeleOppgave && (
            <RemixLink
              to={`/oppgave/${oppgave.oppgaveId}`}
              asButtonVariant="tertiary-neutral"
              size="xsmall"
            >
              Se oppgave
            </RemixLink>
          )}

          {minOppgave && oppgave.tilstand.type !== "FERDIG_BEHANDLET" && (
            <fetcher.Form method="post">
              <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
              <Button
                variant="tertiary-neutral"
                size="xsmall"
                name="_action"
                value="legg-tilbake"
                loading={fetcher.state !== "idle"}
              >
                Legg oppgave tilbake i køen
              </Button>
            </fetcher.Form>
          )}
        </Popover.Content>
      </Popover>
    </>
  );
}
