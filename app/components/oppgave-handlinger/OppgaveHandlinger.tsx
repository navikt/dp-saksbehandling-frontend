import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import classnames from "classnames";
import styles from "./OppgaveHandlinger.module.css";
import { OppgaveHandlingUtsett } from "~/components/oppgave-handlinger/OppgaveHandlingUtsett";
import { OppgaveHandlingLeggTilbake } from "~/components/oppgave-handlinger/OppgaveHandlingLeggTilbake";
import { OppgaveHandlingSendTilArena } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilArena";
import { OppgaveHandlingSendTilKontroll } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilKontroll";
import { OppgaveHandlingFattVedtak } from "~/components/oppgave-handlinger/OppgaveHandlingFattVedtak";
import { OppgaveHandlingReturnerTilSaksbehandler } from "~/components/oppgave-handlinger/OppgaveHandlingReturnerTilSaksbehandler";
import type { IOppgave } from "~/models/oppgave.server";

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
  | "returner-til-saksbehandler";

function hentGyldigeOppgaveValg(
  oppgave: IOppgave,
  toTrinnsAktiv: boolean,
  kreverBeslutter: boolean,
): IGyldigeOppgaveHandlinger[] {
  switch (oppgave.tilstand) {
    case "UNDER_BEHANDLING":
      return [
        "legg-tilbake",
        "utsett",
        "send-til-arena",

        ...((kreverBeslutter && toTrinnsAktiv
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
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  let kreverBeslutter = oppgave.emneknagger.find((knagg) => knagg === "Totrinnskontroll");

  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(
    oppgave,
    featureFlags.totrinnsKontroll,
    !!kreverBeslutter,
  );

  return (
    <>
      {gyldigeOppgaveValg.length > 0 && (
        <div className={classnames("card", styles.OppgaveHandlingerContainer)}>
          {gyldigeOppgaveValg.map((valg) => (
            <>
              {valg === "legg-tilbake" && <OppgaveHandlingLeggTilbake />}
              {valg === "utsett" && <OppgaveHandlingUtsett />}
              {valg === "send-til-arena" && (
                <OppgaveHandlingSendTilArena oppgaveId={oppgave.oppgaveId} />
              )}
              {valg === "send-til-kontroll" && (
                <OppgaveHandlingSendTilKontroll oppgaveId={oppgave.oppgaveId} />
              )}
              {valg === "returner-til-saksbehandler" && (
                <OppgaveHandlingReturnerTilSaksbehandler oppgaveId={oppgave.oppgaveId} />
              )}
              {valg === "fatt-vedtak" && (
                <OppgaveHandlingFattVedtak oppgaveId={oppgave.oppgaveId} />
              )}
            </>
          ))}
        </div>
      )}
    </>
  );
}
