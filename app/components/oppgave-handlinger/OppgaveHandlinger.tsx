import { PadlockLockedIcon } from "@navikt/aksel-icons";
import { Tag } from "@navikt/ds-react";
import { Fragment } from "react";

import { KravPaaDagpenger } from "~/components/krav-paa-dagpenger/KravPaaDagpenger";
import { OppgaveEmneknagger } from "~/components/oppgave-emneknagger/OppgaveEmneknagger";
import { OppgaveHandlingAvbryt } from "~/components/oppgave-handlinger/OppgaveHandlingAvbryt";
import { OppgaveHandlingFattVedtak } from "~/components/oppgave-handlinger/OppgaveHandlingFattVedtak";
import { OppgaveHandlingFerdigstillKlage } from "~/components/oppgave-handlinger/OppgaveHandlingFerdigstillKlage";
import { OppgaveHandlingLeggTilbake } from "~/components/oppgave-handlinger/OppgaveHandlingLeggTilbake";
import { OppgaveHandlingRekjorBehandling } from "~/components/oppgave-handlinger/OppgaveHandlingRekjorBehandling";
import { OppgaveHandlingReturnerTilSaksbehandler } from "~/components/oppgave-handlinger/OppgaveHandlingReturnerTilSaksbehandler";
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
  | "avbryt"
  | "send-til-kontroll"
  | "fatt-vedtak"
  | "rekjor-behandling"
  | "trekk-klage"
  | "ferdigstill-klage"
  | "returner-til-saksbehandler";

function hentGyldigeOppgaveValg(
  minOppgave: boolean,
  oppgave: saksbehandlingComponent["schemas"]["Oppgave"],
  behandling?: behandlingComponent["schemas"]["Behandling"],
): IGyldigeOppgaveHandlinger[] {
  const handlinger: IGyldigeOppgaveHandlinger[] = [];

  if (oppgave.tilstand === "AVBRUTT") {
    return handlinger;
  }

  if (!minOppgave) {
    handlinger.push("legg-tilbake");
    return handlinger;
  }

  switch (oppgave.behandlingType) {
    case "MELDEKORT":
    case "RETT_TIL_DAGPENGER":
      switch (oppgave.tilstand) {
        case "UNDER_BEHANDLING":
          handlinger.push("rekjor-behandling", "legg-tilbake", "utsett", "avbryt");

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

  return [];
}

interface IProps {
  behandling?: behandlingComponent["schemas"]["Behandling"];
}

export function OppgaveHandlinger(props: IProps) {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const minOppgave =
    (oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName &&
      oppgave.tilstand === "UNDER_BEHANDLING") ||
    (oppgave.beslutter?.ident === saksbehandler.onPremisesSamAccountName &&
      oppgave.tilstand === "UNDER_KONTROLL");
  const gyldigeOppgaveValg = hentGyldigeOppgaveValg(minOppgave, oppgave, props.behandling);

  return (
    <div className={"card flex"}>
      {oppgave.behandlingType !== "KLAGE" && <KravPaaDagpenger />}

      <div className={"ml-4 flex items-center gap-2"}>
        <OppgaveEmneknagger oppgave={oppgave} />
      </div>

      <div className={styles.OppgaveHandlinger}>
        {gyldigeOppgaveValg.map((valg) => (
          <Fragment key={valg}>
            {valg === "rekjor-behandling" && <OppgaveHandlingRekjorBehandling />}
            {valg === "legg-tilbake" && <OppgaveHandlingLeggTilbake />}
            {valg === "utsett" && <OppgaveHandlingUtsett />}
            {valg === "avbryt" && <OppgaveHandlingAvbryt />}
            {valg === "send-til-kontroll" && <OppgaveHandlingSendTilKontroll />}
            {valg === "returner-til-saksbehandler" && <OppgaveHandlingReturnerTilSaksbehandler />}
            {valg === "trekk-klage" && <OppgaveHandlingTrekkKlage />}
            {valg === "ferdigstill-klage" && <OppgaveHandlingFerdigstillKlage />}
            {valg === "fatt-vedtak" && props.behandling && (
              <OppgaveHandlingFattVedtak utfall={props.behandling.utfall} />
            )}
          </Fragment>
        ))}

        {!minOppgave && (
          <Tag variant={"neutral"}>
            <PadlockLockedIcon />
            Kun lesetilgang
          </Tag>
        )}
      </div>
    </div>
  );
}
