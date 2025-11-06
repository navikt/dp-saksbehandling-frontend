import { MenuElipsisHorizontalCircleIcon } from "@navikt/aksel-icons";
import { Button, Popover } from "@navikt/ds-react";
import { useRef, useState } from "react";
import { Form, useNavigation } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { RemixLink } from "~/components/RemixLink";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { getEnv } from "~/utils/env.utils";

import { components } from "../../../../openapi/saksbehandling-typer";
import styles from "./OppgaveListeValg.module.css";

interface IProps {
  oppgave: components["schemas"]["OppgaveOversikt"];
}

export function OppgaveListeValg({ oppgave }: IProps) {
  const { state } = useNavigation();
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const [openState, setOpenState] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const minSaksbehandlerOppgave = oppgave.behandlerIdent === saksbehandler.onPremisesSamAccountName;
  const minBeslutterOppgaver = oppgave?.behandlerIdent === saksbehandler.onPremisesSamAccountName;

  const kanTildeleOgBehandleOppgave =
    oppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    oppgave.tilstand === "PAA_VENT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && minSaksbehandlerOppgave);

  const kanKontrollereOppgave =
    oppgave.tilstand === "KLAR_TIL_KONTROLL" ||
    (oppgave.tilstand === "UNDER_KONTROLL" && minBeslutterOppgaver);

  const kanLeggeTilbakeOppgave =
    oppgave.behandlerIdent &&
    oppgave.tilstand !== "FERDIG_BEHANDLET" &&
    oppgave.tilstand !== "AVBRUTT";

  const kanSeOppgave =
    oppgave.tilstand === "FERDIG_BEHANDLET" ||
    oppgave.tilstand === "AVBRUTT" ||
    (oppgave.tilstand === "UNDER_BEHANDLING" && !minSaksbehandlerOppgave) ||
    (oppgave.tilstand === "UNDER_KONTROLL" && !minBeslutterOppgaver);

  return (
    <>
      <Button
        ref={buttonRef}
        size="small"
        variant="tertiary"
        onClick={() => setOpenState(!openState)}
        aria-expanded={openState}
        icon={<MenuElipsisHorizontalCircleIcon />}
        title={"Valg"}
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
            <>
              <Form method="post">
                <input name="_action" value="tildel-oppgave" hidden={true} readOnly={true} />
                <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
                <input
                  name="behandlingId"
                  value={oppgave.behandlingId}
                  hidden={true}
                  readOnly={true}
                />
                <Button variant="tertiary-neutral" size="xsmall" loading={state !== "idle"}>
                  Behandle oppgave
                </Button>
              </Form>

              {oppgave.behandlingType !== "KLAGE" && (
                <Form method="post">
                  <input name="_action" value="rekjor-behandling" hidden={true} readOnly={true} />
                  <input
                    name="behandlingId"
                    value={oppgave.behandlingId}
                    hidden={true}
                    readOnly={true}
                  />
                  <input name="ident" value={oppgave.personIdent} hidden={true} readOnly={true} />
                  <Button size="xsmall" variant="tertiary-neutral" loading={state !== "idle"}>
                    Kjør behandling på nytt
                  </Button>
                </Form>
              )}
            </>
          )}

          {kanKontrollereOppgave && (
            <Form method="post">
              <input name="_action" value="tildel-oppgave" hidden={true} readOnly={true} />
              <input name="oppgaveId" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
              <input
                name="behandlingId"
                value={oppgave.behandlingId}
                hidden={true}
                readOnly={true}
              />
              <Button variant="tertiary-neutral" size="xsmall" loading={state !== "idle"}>
                Kontroller oppgave
              </Button>
            </Form>
          )}

          {kanSeOppgave && (
            <RemixLink
              to={`${oppgave.behandlingType !== "KLAGE" ? `/oppgave/${oppgave.oppgaveId}/dagpenger-rett/${oppgave.behandlingId}/behandle` : `/oppgave/${oppgave.oppgaveId}/klage/${oppgave.behandlingId}`}`}
              asButtonVariant="tertiary-neutral"
              size="xsmall"
            >
              Se oppgave
            </RemixLink>
          )}

          {getEnv("GCP_ENV") === "dev" && (
            <LoadingLink
              asButtonVariant={"tertiary-neutral"}
              to={`/v2/oppgave/${oppgave.oppgaveId}/dagpenger-rett/${oppgave.behandlingId}/behandle`}
            >
              Se oppgave V2
            </LoadingLink>
          )}

          {kanLeggeTilbakeOppgave && (
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
