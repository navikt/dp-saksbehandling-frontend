import React, { useEffect, useRef, useState } from "react";
import type { IOppgave } from "~/models/oppgave.server";
import { Button, Popover } from "@navikt/ds-react";
import { MenuElipsisHorizontalIcon } from "@navikt/aksel-icons";
import { RemixLink } from "~/components/RemixLink";
import styles from "./OppgaveListeValg.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useFetcher } from "@remix-run/react";
import type { action } from "~/routes/_oppgaver.a-legg-tilbake-oppgave";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { handleLeggTilbakeOppgaveMessages } from "~/components/alert-messages/handleAlertMessages";

export function OppgaveListeValg({ oppgave }: { oppgave: IOppgave }) {
  const fetcher = useFetcher<typeof action>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { addAlert } = useGlobalAlerts();
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const [openState, setOpenState] = useState(false);

  const minOppgave = oppgave.saksbehandlerIdent === saksbehandler.onPremisesSamAccountName;
  const kanTildeleOgBehandleOppgave =
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    oppgave.tilstand === "PAA_VENT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && minOppgave);

  useEffect(() => {
    if (fetcher.data?.alert)
      handleLeggTilbakeOppgaveMessages(fetcher.data.httpCode, fetcher.data.message, addAlert);
    // addAlert i dependency array fører til uendelig loop
  }, [fetcher.data]); // eslint-disable-line react-hooks/exhaustive-deps

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
            <RemixLink
              to={`/oppgave/${oppgave.oppgaveId}/behandle`}
              asButtonVariant="tertiary-neutral"
              size="xsmall"
            >
              Behandle oppgave
            </RemixLink>
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
            <fetcher.Form method="post" action="/a-legg-tilbake-oppgave">
              <input hidden={true} readOnly={true} name="oppgaveId" value={oppgave.oppgaveId} />
              <Button variant="tertiary-neutral" size="xsmall" loading={fetcher.state !== "idle"}>
                Legg oppgave tilbake i køen
              </Button>
            </fetcher.Form>
          )}
        </Popover.Content>
      </Popover>
    </>
  );
}
