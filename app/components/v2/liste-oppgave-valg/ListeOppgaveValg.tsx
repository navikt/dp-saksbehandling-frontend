import { MenuElipsisHorizontalCircleIcon } from "@navikt/aksel-icons";
import { Button, Popover } from "@navikt/ds-react";
import { useRef, useState } from "react";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { ListeOppgaveValgBehandle } from "~/components/v2/liste-oppgave-valg/ListeOppgaveValgBehandle";
import { ListeOppgaveValgLeggTilbake } from "~/components/v2/liste-oppgave-valg/ListeOppgaveValgLeggTilbake";
import { ListeOppgaveValgRekjørBehandling } from "~/components/v2/liste-oppgave-valg/ListeOppgaveValgRekjørBehandling";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../../openapi/saksbehandling-typer";
import styles from "./ListeOppgaveValg.module.css";

interface IProps {
  listeOppgave: components["schemas"]["OppgaveOversikt"];
}

export function ListeOppgaveValg({ listeOppgave }: IProps) {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const [openState, setOpenState] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const minSaksbehandlerOppgave =
    listeOppgave.behandlerIdent === saksbehandler.onPremisesSamAccountName;

  const minBeslutterOppgaver =
    listeOppgave?.behandlerIdent === saksbehandler.onPremisesSamAccountName;

  const kanTildeleOgBehandleOppgave =
    listeOppgave.tilstand === "KLAR_TIL_BEHANDLING" ||
    listeOppgave.tilstand === "PAA_VENT" ||
    (listeOppgave.tilstand === "UNDER_BEHANDLING" && minSaksbehandlerOppgave);

  const kanKontrollereOppgave =
    listeOppgave.tilstand === "KLAR_TIL_KONTROLL" ||
    (listeOppgave.tilstand === "UNDER_KONTROLL" && minBeslutterOppgaver);

  const kanLeggeTilbakeOppgave =
    listeOppgave.behandlerIdent &&
    listeOppgave.tilstand !== "FERDIG_BEHANDLET" &&
    listeOppgave.tilstand !== "AVBRUTT";

  const kanSeOppgave =
    listeOppgave.tilstand === "FERDIG_BEHANDLET" ||
    listeOppgave.tilstand === "AVBRUTT" ||
    (listeOppgave.tilstand === "UNDER_BEHANDLING" && !minSaksbehandlerOppgave) ||
    (listeOppgave.tilstand === "UNDER_KONTROLL" && !minBeslutterOppgaver);

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
        // className={styles.popover}
        open={openState}
        onClose={() => setOpenState(false)}
        anchorEl={buttonRef.current}
        offset={0}
        arrow={false}
        placement="left-start"
      >
        <Popover.Content className={styles.popoverContent}>
          {kanTildeleOgBehandleOppgave && (
            <>
              <ListeOppgaveValgBehandle listeOppgave={listeOppgave} label={"Behandle oppgave"} />
              <ListeOppgaveValgRekjørBehandling listeOppgave={listeOppgave} />
            </>
          )}

          {kanKontrollereOppgave && (
            <ListeOppgaveValgBehandle listeOppgave={listeOppgave} label={"Kontroller oppgave"} />
          )}

          {kanSeOppgave && (
            <LoadingLink
              to={`${listeOppgave.behandlingType === "RETT_TIL_DAGPENGER" ? `/v2/oppgave/${listeOppgave.oppgaveId}/dagpenger-rett/${listeOppgave.behandlingId}/behandle` : `/oppgave/${listeOppgave.oppgaveId}/klage/${listeOppgave.behandlingId}`}`}
              asButtonVariant="tertiary-neutral"
            >
              Se oppgave
            </LoadingLink>
          )}

          {kanLeggeTilbakeOppgave && <ListeOppgaveValgLeggTilbake listeOppgave={listeOppgave} />}
        </Popover.Content>
      </Popover>
    </>
  );
}
