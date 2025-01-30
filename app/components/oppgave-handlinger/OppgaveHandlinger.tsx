import classnames from "classnames";
import { Fragment } from "react";

import { KravPaaDagpenger } from "~/components/krav-paa-dagpenger/KravPaaDagpenger";
import { OppgaveHandlingFattVedtak } from "~/components/oppgave-handlinger/OppgaveHandlingFattVedtak";
import { OppgaveHandlingLeggTilbake } from "~/components/oppgave-handlinger/OppgaveHandlingLeggTilbake";
import { OppgaveHandlingRekjorBehandling } from "~/components/oppgave-handlinger/OppgaveHandlingRekjorBehandling";
import { OppgaveHandlingReturnerTilSaksbehandler } from "~/components/oppgave-handlinger/OppgaveHandlingReturnerTilSaksbehandler";
import { OppgaveHandlingSendTilArena } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilArena";
import { OppgaveHandlingSendTilKontroll } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilKontroll";
import { OppgaveHandlingUtsett } from "~/components/oppgave-handlinger/OppgaveHandlingUtsett";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { IOppgave } from "~/models/oppgave.server";

import styles from "./OppgaveHandlinger.module.css";

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
  | "returner-til-saksbehandler";

function hentGyldigeOppgaveValg(
  oppgave: IOppgave,
  toTrinnsAktiv: boolean,
  kreverTotrinnskontroll: boolean,
): IGyldigeOppgaveHandlinger[] {
  switch (oppgave.tilstand) {
    case "UNDER_BEHANDLING":
      return [
        "rekjor-behandling",
        "legg-tilbake",
        "utsett",
        "send-til-arena",

        ...((kreverTotrinnskontroll && toTrinnsAktiv
          ? ["send-til-kontroll"]
          : ["fatt-vedtak"]) as IGyldigeOppgaveHandlinger[]),
      ];
    case "UNDER_KONTROLL":
      return ["legg-tilbake", "returner-til-saksbehandler", "fatt-vedtak"];
    default:
      return [];
  }
}

export function OppgaveHandlinger() {
  const { featureFlags } = useTypedRouteLoaderData("root");
  const { oppgave, behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(
    oppgave,
    featureFlags.totrinnsKontroll,
    behandling.kreverTotrinnskontroll,
  );

  return (
    <div className={classnames("card", styles.OppgaveHandlingerContainer)}>
      <KravPaaDagpenger />
      <div className={styles.OppgaveHandlinger}>
        {gyldigeOppgaveValg.map((valg) => (
          <Fragment key={valg}>
            {valg === "rekjor-behandling" && <OppgaveHandlingRekjorBehandling />}
            {valg === "legg-tilbake" && <OppgaveHandlingLeggTilbake />}
            {valg === "utsett" && <OppgaveHandlingUtsett />}
            {valg === "send-til-arena" && <OppgaveHandlingSendTilArena />}
            {valg === "send-til-kontroll" && <OppgaveHandlingSendTilKontroll />}
            {valg === "returner-til-saksbehandler" && <OppgaveHandlingReturnerTilSaksbehandler />}
            {valg === "fatt-vedtak" && <OppgaveHandlingFattVedtak />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
