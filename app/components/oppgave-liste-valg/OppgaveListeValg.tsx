import { MenuElipsisHorizontalIcon } from "@navikt/aksel-icons";
import { Button, Popover } from "@navikt/ds-react";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useRef, useState } from "react";

import { RemixLink } from "~/components/RemixLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { IListeOppgave } from "~/models/oppgave.server";
import { action } from "~/routes/_index";
import { isAlert } from "~/utils/type-guards";

import styles from "./OppgaveListeValg.module.css";

export function OppgaveListeValg({ oppgave }: { oppgave: IListeOppgave }) {
  const { state } = useNavigation();
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const [openState, setOpenState] = useState(false);
  const actionData = useActionData<typeof action>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const minSaksbehandlerOppgave = oppgave.behandlerIdent === saksbehandler.onPremisesSamAccountName;
  const minBeslutterOppgaver = oppgave?.behandlerIdent === saksbehandler.onPremisesSamAccountName;

  const kanTildeleOgBehandleOppgave =
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    oppgave.tilstand === "PAA_VENT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && minSaksbehandlerOppgave);

  const kanKontrollereOppgave =
    oppgave.tilstand === "KLAR_TIL_KONTROLL" ||
    (oppgave.tilstand === "UNDER_KONTROLL" && minBeslutterOppgaver);

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
            <Form method="post">
              <input name="_action" value="tildel-oppgave" hidden={true} readOnly={true} />
              <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
              <Button variant="tertiary-neutral" size="xsmall" loading={state !== "idle"}>
                Behandle oppgave
              </Button>
            </Form>
          )}

          {kanKontrollereOppgave && (
            <Form method="post">
              <input name="_action" value="tildel-oppgave" hidden={true} readOnly={true} />
              <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
              <Button variant="tertiary-neutral" size="xsmall" loading={state !== "idle"}>
                Kontroller oppgave
              </Button>
            </Form>
          )}

          {!kanTildeleOgBehandleOppgave && (
            <RemixLink
              to={`/oppgave/${oppgave.oppgaveId}/se`}
              asButtonVariant="tertiary-neutral"
              size="xsmall"
            >
              Se oppgave
            </RemixLink>
          )}

          {minSaksbehandlerOppgave && oppgave.tilstand !== "FERDIG_BEHANDLET" && (
            <Form method="post">
              <input name="_action" value="legg-tilbake-oppgave" hidden={true} readOnly={true} />
              <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
              <Button variant="tertiary-neutral" size="xsmall" loading={state !== "idle"}>
                Legg oppgave tilbake i køen
              </Button>
            </Form>
          )}
        </Popover.Content>
      </Popover>
    </>
  );
}
