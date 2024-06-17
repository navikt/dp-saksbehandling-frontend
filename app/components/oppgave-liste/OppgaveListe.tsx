import { Button, Detail, Skeleton, Table, Tag } from "@navikt/ds-react";
import { hentFormattertDato } from "~/utils/dato.utils";
import type { IOppgave, IOppgaveTilstand } from "~/models/oppgave.server";
import type { action as hentNesteOppgaveAction } from "~/routes/action-hent-neste-oppgave";
import { OppgaveListeValg } from "~/components/oppgave-liste-valg/OppgaveListeValg";
import { useTableSort } from "~/hooks/useTableSort";
import { useFetcher, useLocation, useNavigation } from "@remix-run/react";
import { differenceInCalendarDays } from "date-fns";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import classnames from "classnames";
import styles from "./OppgaveListe.module.css";

interface IProps {
  oppgaver: IOppgave[];
  visNesteOppgaveKnapp?: boolean;
  visAntallOppgaver?: boolean;
}

export function OppgaveListe({ oppgaver, visNesteOppgaveKnapp, visAntallOppgaver }: IProps) {
  const { state } = useNavigation();
  const location = useLocation();
  const nesteFetcher = useFetcher<typeof hentNesteOppgaveAction>();
  useHandleAlertMessages(nesteFetcher.data);

  const loading = state !== "idle";
  const { sortedData, handleSort, sortState } = useTableSort<IOppgave>(oppgaver, {
    orderBy: "tidspunktOpprettet",
    direction: "ascending",
  });

  return (
    <>
      <div className={styles.oppgaveListeInfo}>
        {visNesteOppgaveKnapp && (
          <nesteFetcher.Form
            method="post"
            action="/action-hent-neste-oppgave"
            className={styles.nesteKnapp}
          >
            <Button
              variant="primary"
              size="small"
              loading={state !== "idle"}
              disabled={state !== "idle"}
            >
              Neste oppgave
            </Button>
          </nesteFetcher.Form>
        )}

        {visAntallOppgaver && (
          <Detail textColor="subtle" className={styles.antallOppgaver}>
            {!loading && `Antall oppgaver ${oppgaver.length}`}
            {loading && "Laster oppgaver..."}
          </Detail>
        )}
      </div>

      <Table
        zebraStripes={true}
        sort={sortState}
        size="small"
        className={classnames(styles.oppgaveListe)}
        onSortChange={(sortKey) => sortKey && handleSort(sortKey)}
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader scope="col" sortKey="tidspunktOpprettet" sortable={true}>
              <Detail>Opprettet</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col">
              <Detail>Oppgavetype</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col">
              <Detail>Emne</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col">
              <Detail>Status</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col" sortKey="saksbehandlerIdent" sortable={true}>
              <Detail>Saksbehandler</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col" textSize="small">
              <Detail>Valg</Detail>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sortedData.length === 0 && (
            <Table.Row>
              <Table.DataCell colSpan={6}>Fant ingen oppgaver</Table.DataCell>
            </Table.Row>
          )}

          {sortedData?.map((oppgave) => {
            const { tidspunktOpprettet, tilstand, emneknagger, utsettTilDato } = oppgave;
            const erValgtOppgave = location.pathname.includes(oppgave.oppgaveId);
            const dagerIgjenTilUtsattDato = utsettTilDato
              ? differenceInCalendarDays(utsettTilDato, new Date())
              : undefined;

            return (
              <Table.Row
                key={oppgave.oppgaveId}
                className={classnames({ [styles.valgtOppgaveBackground]: erValgtOppgave })}
              >
                <Table.DataCell
                  className={classnames({ [styles.valgtOppgaveBorder]: erValgtOppgave })}
                >
                  {!loading && (
                    <Detail textColor="subtle">{hentFormattertDato(tidspunktOpprettet)}</Detail>
                  )}
                  {loading && <Skeleton variant="text" width={110} height={35} />}
                </Table.DataCell>

                <Table.DataCell>
                  {!loading && <Detail>Søknad</Detail>}
                  {loading && <Skeleton variant="text" width={80} height={35} />}
                </Table.DataCell>
                <Table.DataCell>
                  {!loading && (
                    <>
                      {emneknagger.map((emneknagg) => (
                        <Tag key={emneknagg} className="mr-2" size={"xsmall"} variant="alt1">
                          <Detail>{emneknagg}</Detail>
                        </Tag>
                      ))}
                      {utsettTilDato && (
                        <Tag className="mr-2" size={"xsmall"} variant="alt2">
                          <Detail>{`${dagerIgjenTilUtsattDato} ${dagerIgjenTilUtsattDato === 1 ? "dag" : "dager"} igjen`}</Detail>
                        </Tag>
                      )}
                    </>
                  )}
                  {loading && <Skeleton variant="text" width={200} height={35} />}
                </Table.DataCell>

                <Table.DataCell>
                  {!loading && <Detail>{getTilstandText(tilstand)}</Detail>}
                  {loading && <Skeleton variant="text" width={150} height={35} />}
                </Table.DataCell>

                <Table.DataCell>
                  {!loading && <Detail>{oppgave.saksbehandlerIdent}</Detail>}
                  {loading && <Skeleton variant="text" width={100} height={35} />}
                </Table.DataCell>

                <Table.DataCell>
                  {!loading && <OppgaveListeValg oppgave={oppgave} />}
                  {loading && <Skeleton variant="text" width={20} height={35} />}
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}

export function getTilstandText(tilstand: IOppgaveTilstand) {
  switch (tilstand) {
    case "PAA_VENT":
      return "På vent";
    case "UNDER_BEHANDLING":
      return "Under behandling";
    case "FERDIG_BEHANDLET":
      return "Ferdig behandlet";
    case "KLAR_TIL_BEHANDLING":
      return "Klar til behandling";
  }
}
