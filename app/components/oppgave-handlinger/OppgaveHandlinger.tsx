import { Loader } from "@navikt/ds-react";
import classnames from "classnames";
import { Fragment, useEffect, useState } from "react";

import { KravPaaDagpenger } from "~/components/krav-paa-dagpenger/KravPaaDagpenger";
import { OppgaveHandlingFattVedtak } from "~/components/oppgave-handlinger/OppgaveHandlingFattVedtak";
import { OppgaveHandlingLeggTilbake } from "~/components/oppgave-handlinger/OppgaveHandlingLeggTilbake";
import { OppgaveHandlingRekjorBehandling } from "~/components/oppgave-handlinger/OppgaveHandlingRekjorBehandling";
import { OppgaveHandlingReturnerTilSaksbehandler } from "~/components/oppgave-handlinger/OppgaveHandlingReturnerTilSaksbehandler";
import { OppgaveHandlingSendTilArena } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilArena";
import { OppgaveHandlingSendTilKontroll } from "~/components/oppgave-handlinger/OppgaveHandlingSendTilKontroll";
import { OppgaveHandlingUtsett } from "~/components/oppgave-handlinger/OppgaveHandlingUtsett";
import { useAwaitPromise } from "~/hooks/useResolvedPromise";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components as behandlingComponent } from "../../../openapi/behandling-typer";
import { components as saksbehandlingComponent } from "../../../openapi/saksbehandling-typer";
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
  oppgave: saksbehandlingComponent["schemas"]["Oppgave"],
  behandling?: behandlingComponent["schemas"]["Behandling"],
): IGyldigeOppgaveHandlinger[] {
  const handlinger: IGyldigeOppgaveHandlinger[] = [];

  switch (oppgave.tilstand) {
    case "UNDER_BEHANDLING":
      handlinger.push("rekjor-behandling", "legg-tilbake", "utsett", "send-til-arena");

      if (behandling) {
        handlinger.push("fatt-vedtak");
      }

      if (behandling?.kreverTotrinnskontroll) {
        handlinger.push("send-til-kontroll");
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
}

export function OppgaveHandlinger() {
  const { oppgave, behandlingPromise } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { response, loading } = useAwaitPromise(behandlingPromise);
  const [gyldigeOppgaveValg, setGyldigeOppgaveValg] = useState(() =>
    hentGyldigeOppgaveValg(oppgave),
  );

  useEffect(() => {
    if (response?.data) {
      setGyldigeOppgaveValg(() => hentGyldigeOppgaveValg(oppgave, response.data));
    }
  }, [response]);

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
            {valg === "fatt-vedtak" && (
              <OppgaveHandlingFattVedtak utfall={response?.data?.utfall} />
            )}
          </Fragment>
        ))}
        {loading && <Loader size={"small"} />}
      </div>
    </div>
  );
}
