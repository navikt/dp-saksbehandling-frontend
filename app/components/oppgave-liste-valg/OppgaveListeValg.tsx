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
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
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
        open={openState}
        onClose={() => setOpenState(false)}
        anchorEl={buttonRef.current}
        offset={0}
        arrow={false}
        placement="bottom"
      >
        <Popover.Content className={styles.container}>
          {kanTildeleOppgave && (
            <RemixLink
              to={`/oppgave/${oppgave.oppgaveId}/behandle`}
              asButtonVariant="primary"
              size="xsmall"
            >
              {minOppgave ? "Behandle oppgave" : "Tildel oppgave"}
            </RemixLink>
          )}

          {!kanTildeleOppgave && (
            <RemixLink to={`/oppgave/${oppgave.oppgaveId}`} asButtonVariant="primary" size="xsmall">
              Se oppgave
            </RemixLink>
          )}

          {minOppgave && oppgave.tilstand !== "FERDIG_BEHANDLET" && (
            <fetcher.Form method="post">
              <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
              <Button
                variant="secondary"
                size="small"
                name="aksjon"
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
