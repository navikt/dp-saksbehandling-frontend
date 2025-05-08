import classnames from "classnames";
import { Fragment } from "react";

import { KravPaaDagpenger } from "~/components/krav-paa-dagpenger/KravPaaDagpenger";
import { OppgaveHandlingFattVedtak } from "~/components/oppgave-handlinger/OppgaveHandlingFattVedtak";
import { OppgaveHandlingFerdigstillKlage } from "~/components/oppgave-handlinger/OppgaveHandlingFerdigstillKlage";
import { OppgaveHandlingLeggTilbake } from "~/components/oppgave-handlinger/OppgaveHandlingLeggTilbake";
import { OppgaveHandlingRekjorBehandling } from "~/components/oppgave-handlinger/OppgaveHandlingRekjorBehandling";
import { OppgaveHandlingReturnerTilSaksbehandler } from "~/components/oppgave-handlinger/OppgaveHandlingReturnerTilSaksbehandler";
import { OppgaveHandlingSendTilArena } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilArena";
import { OppgaveHandlingSendTilKontroll } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilKontroll";
import { OppgaveHandlingUtsett } from "~/components/oppgave-handlinger/OppgaveHandlingUtsett";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components as behandlingComponent } from "../../../openapi/behandling-typer";
import { components as saksbehandlingComponent } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveHandlinger.module.css";
import { OppgaveHandlingTrekkKlage } from "./OppgaveHandlingTrekkKlage";

export interface IFormValidationError {
  field: string;
  message: string;
}

export type IGyldigeOppgaveHandlinger =
  | "legg-tilbake"
  | "utsett"
  | "send-til-arena"
  | "send-til-kontroll"
  | "fatt-vedtak"
  | "rekjor-behandling"
  | "trekk-klage"
  | "ferdigstill-klage"
  | "returner-til-saksbehandler";

function hentGyldigeOppgaveValg(
  oppgave: saksbehandlingComponent["schemas"]["Oppgave"],
  behandling?: behandlingComponent["schemas"]["Behandling"],
): IGyldigeOppgaveHandlinger[] {
  const handlinger: IGyldigeOppgaveHandlinger[] = [];

  switch (oppgave.behandlingType) {
    case "RETT_TIL_DAGPENGER":
      switch (oppgave.tilstand) {
        case "UNDER_BEHANDLING":
          handlinger.push("rekjor-behandling", "legg-tilbake", "utsett", "send-til-arena");

          if (behandling) {
            handlinger.push(
              behandling.kreverTotrinnskontroll ? "send-til-kontroll" : "fatt-vedtak",
            );
          }

          return handlinger;
        case "UNDER_KONTROLL":
          handlinger.push("legg-tilbake", "returner-til-saksbehandler");

          if (behandling) {
            handlinger.push("fatt-vedtak");
          }

          return handlinger;
        default:
          return [];
      }

    case "KLAGE":
      switch (oppgave.tilstand) {
        case "UNDER_BEHANDLING":
          handlinger.push("legg-tilbake", "utsett", "trekk-klage", "ferdigstill-klage");
          return handlinger;
        default:
          return [];
      }
  }
}

interface IProps {
  behandling?: behandlingComponent["schemas"]["Behandling"];
}

export function OppgaveHandlinger(props: IProps) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(oppgave, props.behandling);

  return (
    <div className={classnames("card", styles.OppgaveHandlingerContainer)}>
      {oppgave.behandlingType === "RETT_TIL_DAGPENGER" && <KravPaaDagpenger />}
      <div className={styles.OppgaveHandlinger}>
        {gyldigeOppgaveValg.map((valg) => (
          <Fragment key={valg}>
            {valg === "rekjor-behandling" && <OppgaveHandlingRekjorBehandling />}
            {valg === "legg-tilbake" && <OppgaveHandlingLeggTilbake />}
            {valg === "utsett" && <OppgaveHandlingUtsett />}
            {valg === "send-til-arena" && <OppgaveHandlingSendTilArena />}
            {valg === "send-til-kontroll" && <OppgaveHandlingSendTilKontroll />}
            {valg === "returner-til-saksbehandler" && <OppgaveHandlingReturnerTilSaksbehandler />}
            {valg === "trekk-klage" && <OppgaveHandlingTrekkKlage />}
            {valg === "ferdigstill-klage" && <OppgaveHandlingFerdigstillKlage />}
            {valg === "fatt-vedtak" && props.behandling && (
              <OppgaveHandlingFattVedtak utfall={props.behandling.utfall} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
