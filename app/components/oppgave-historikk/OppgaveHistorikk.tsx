import { BodyLong, BodyShort, Detail } from "@navikt/ds-react";
import classnames from "classnames";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "./OppgaveHistorikk.module.css";

export function OppgaveHistorikk() {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  return (
    <>
      {oppgave.historikk.map((hendelse, index) => (
        <div key={index} className={styles.hendelse}>
          <Detail className={styles.hendelseTidspunkt} textColor="subtle">
            {format(new Date(hendelse.tidspunkt), "dd.MM.yy\n 'kl' HH:mm", {
              locale: nb,
            })}
          </Detail>

          <div
            className={classnames(styles.hendelseMelding, {
              [styles.hendelseMeldingNyStatus]: hendelse.type === "ny-status",
              [styles.hendelseMeldingNotat]: hendelse.type === "notat",
              [styles.hendelseMeldingEndreOpplysning]: hendelse.type === "endre-opplysning",
              [styles.hendelseMeldingMelding]: hendelse.type === "melding",
            })}
          >
            {hendelse.type === "ny-status" && (
              <BodyShort>
                <strong>{hendelse.tittel}</strong> {hendelse.body}
              </BodyShort>
            )}

            {hendelse.type !== "ny-status" && (
              <>
                <BodyShort weight="semibold">{hendelse.tittel}</BodyShort>
                {hendelse.body && <BodyLong>{hendelse.body}</BodyLong>}
              </>
            )}

            <>
              {hendelse.behandler.rolle === "saksbehandler" && (
                <>
                  <Detail textColor="subtle">Saksbehandler</Detail>
                  <Detail textColor="subtle">{hendelse.behandler.navn}</Detail>
                </>
              )}

              {hendelse.behandler.rolle === "beslutter" && (
                <>
                  <Detail textColor="subtle">Beslutter</Detail>
                  <Detail textColor="subtle">{hendelse.behandler.navn}</Detail>
                </>
              )}

              {hendelse.behandler.rolle === "system" && (
                <>
                  <Detail textColor="subtle">System</Detail>
                  <Detail textColor="subtle">{hendelse.behandler.navn}</Detail>
                </>
              )}
            </>
          </div>
        </div>
      ))}
    </>
  );
}
