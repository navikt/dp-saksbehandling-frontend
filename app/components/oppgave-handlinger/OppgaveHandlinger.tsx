import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import classnames from "classnames";
import styles from "./OppgaveHandlinger.module.css";
import { OppgaveHandlingUtsett } from "~/components/oppgave-handlinger/OppgaveHandlingUtsett";
import { OppgaveHandlingLeggTilbake } from "~/components/oppgave-handlinger/OppgaveHandlingLeggTilbake";
import { OppgaveHandlingSendTilArena } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilArena";
import { OppgaveHandlingSendTilKontroll } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilKontroll";
import { OppgaveHandlingFattVedtak } from "~/components/oppgave-handlinger/OppgaveHandlingFattVedtak";
import { OppgaveHandlingReturnerTilSaksbehandler } from "~/components/oppgave-handlinger/OppgaveHandlingReturnerTilSaksbehandler";

export interface IFormValidationError {
  field: string;
  message: string;
}

export function OppgaveHandlinger() {
  const { featureFlags } = useTypedRouteLoaderData("root");
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  let kreverBeslutter = oppgave.emneknagger.find((knagg) => knagg === "Totrinnskontroll");

  return (
    <div className={classnames("card", styles.OppgaveHandlingerContainer)}>
      {oppgave.tilstand !== "FERDIG_BEHANDLET" && (
        <>
          <OppgaveHandlingLeggTilbake />
          {oppgave.tilstand === "UNDER_BEHANDLING" && (
            <>
              <OppgaveHandlingUtsett />
              <OppgaveHandlingSendTilArena oppgaveId={oppgave.oppgaveId} />
              {kreverBeslutter && featureFlags.totrinnsKontroll && (
                <OppgaveHandlingSendTilKontroll oppgaveId={oppgave.oppgaveId} />
              )}

              {(!kreverBeslutter || !featureFlags.totrinnsKontroll) && (
                <OppgaveHandlingFattVedtak oppgaveId={oppgave.oppgaveId} />
              )}
            </>
          )}

          {oppgave.tilstand === "UNDER_KONTROLL" && (
            <>
              <OppgaveHandlingReturnerTilSaksbehandler oppgaveId={oppgave.oppgaveId} />
              <OppgaveHandlingFattVedtak oppgaveId={oppgave.oppgaveId} />
            </>
          )}
        </>
      )}
    </div>
  );
}
