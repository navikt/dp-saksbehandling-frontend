import { BodyLong, BodyShort, Detail } from "@navikt/ds-react";
import classnames from "classnames";
import { format } from "date-fns";
import { nb } from "date-fns/locale";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./OppgaveHistorikk.module.css";

export function OppgaveHistorikk() {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <>
      {/*// @ts-expect-error TODO: Type skal endres i DP-saksbehandling*/}
      {oppgave.historikk.map((hendelse, index) => (
        <div key={index} className={styles.hendelse}>
          <Detail className={styles.hendelseTidspunkt} textColor="subtle">
            {format(new Date(hendelse.tidspunkt), "dd.MM.yy\n 'kl' HH:mm", {
              locale: nb,
            })}
          </Detail>

          <div
            className={classnames(styles.hendelseMelding, {
              [styles.hendelseMeldingStatusendring]: hendelse.type === "statusendring",
              [styles.hendelseMeldingNotat]: hendelse.type === "notat",
              // @ts-expect-error // TODO: Dette er midlertidig for mockdata, finnes ikke i dp-saksbehandling enda.
              [styles.hendelseMeldingEndreOpplysning]: hendelse.type === "endre-opplysning",
              // @ts-expect-error // TODO: Dette er midlertidig for mockdata, finnes ikke i dp-saksbehandling enda.
              [styles.hendelseMeldingMelding]: hendelse.type === "melding",
            })}
          >
            {hendelse.type === "statusendring" && (
              <BodyShort>
                <strong>Ny status:</strong> {hendelse.tittel}
              </BodyShort>
            )}

            {hendelse.type !== "statusendring" && (
              <>
                <BodyShort weight="semibold">{hendelse.tittel}</BodyShort>
                {hendelse.body && <BodyLong>{hendelse.body}</BodyLong>}
              </>
            )}

            {hendelse.behandler.rolle !== "system" && (
              <>
                {hentRolleTekst(hendelse.behandler.rolle)}
                <Detail textColor="subtle">{hendelse.behandler.navn}</Detail>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

function hentRolleTekst(rolle: components["schemas"]["OppgaveHistorikk"]["behandler"]["rolle"]) {
  switch (rolle) {
    case "system":
      return <Detail textColor="subtle">System</Detail>;
    case "saksbehandler":
      return <Detail textColor="subtle">Saksbehandler</Detail>;
    case "beslutter":
      return <Detail textColor="subtle">Beslutter</Detail>;
    default:
      return undefined;
  }
}
