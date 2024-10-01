import { BodyLong, BodyShort, Detail } from "@navikt/ds-react";
import classnames from "classnames";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import styles from "./OppgaveHistorikk.module.css";

export interface IOppgaveHistorikk {
  type: "ny-status" | "notat" | "endre-opplysning" | "melding";
  tittel: string;
  body?: string;
  tidspunkt: string;
  behandler: IBehandler;
}

interface IBehandler {
  rolle: "system" | "saksbehandler" | "beslutter";
  navn: string;
}

export function OppgaveHistorikk() {
  return (
    <>
      {mockHistorikk.map((hendelse, index) => (
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
                  <Detail textColor="subtle">Beslytter</Detail>
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

const mockHistorikk: IOppgaveHistorikk[] = [
  {
    type: "melding",
    tittel: "Melding om vedtak sendt",
    tidspunkt: "2024-09-18T16:43:00",
    behandler: { navn: "dp-saksbehandling", rolle: "system" },
  },
  {
    type: "melding",
    tittel: "Vedtak lagret i Arena",
    tidspunkt: "2024-09-18T15:43:00",
    behandler: { navn: "dp-behandling", rolle: "system" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: " Ferdig behandlet",
    tidspunkt: "2024-09-18T14:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: " Under kontroll",
    tidspunkt: "2024-09-18T13:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: " Sendt til kontroll",
    tidspunkt: "2024-09-18T12:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: " Under behandling",
    tidspunkt: "2024-09-18T11:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: " Klar til behandling",
    tidspunkt: "2024-09-18T10:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "notat",
    tittel: "Notat",
    body: "Denne ble returnert fordi det var for mange skrivefeil i notatet som ble levert når man sendte denne i retur. Dette ble begrunnet med at det var for mange skrivefeil i notatet som ble levert når man sendte denne i retur.",
    tidspunkt: "2024-09-18T09:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: " Under kontroll",
    tidspunkt: "2024-09-18T08:43:00",
    behandler: { navn: "Bodill Åpersille", rolle: "beslutter" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: " Sendt til kontroll",
    tidspunkt: "2024-09-18T07:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "endre-opplysning",
    tittel: "Endret opplysning",
    body: "Arbeidsinntekt siste 12 mnd: 185 300 kr → 189 800 kr",
    tidspunkt: "2024-09-18T06:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: "Under behandling",
    tidspunkt: "2024-09-18T05:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: "Satt på vent frem til 26.09.24",
    tidspunkt: "2024-09-18T04:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "endre-opplysning",
    tittel: "Endret opplysning",
    body: "Beregningregel: Arbeidstid siste 6 måneder: Ja → Nei",
    tidspunkt: "2024-09-18T03:43:00",
    behandler: { navn: "dp-behandling", rolle: "system" },
  },
  {
    type: "endre-opplysning",
    tittel: "Endret opplysning",
    body: "Beregnet vanlig arbeidstid per uke før tap: 37,5 t → 22,5 t",
    tidspunkt: "2024-09-18T02:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "ny-status",
    tittel: "Ny status:",
    body: "Under behandling",
    tidspunkt: "2024-09-18T08:43:00",
    behandler: { navn: "Truls Trubadur", rolle: "saksbehandler" },
  },
  {
    type: "melding",
    tittel: "Oppgave opprettet",
    tidspunkt: "2024-09-18T01:43:00",
    behandler: { navn: "dp-saksbehandling", rolle: "system" },
  },
];
