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
  lasterOppgaver?: boolean;
  visNesteOppgaveKnapp?: boolean;
  visAntallOppgaver?: boolean;
}

export function OppgaveListe({
  oppgaver,
  visNesteOppgaveKnapp,
  visAntallOppgaver,
  lasterOppgaver,
}: IProps) {
  const { state } = useNavigation();
  const location = useLocation();
  const nesteFetcher = useFetcher<typeof hentNesteOppgaveAction>();
  useHandleAlertMessages(nesteFetcher.data);

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
            {!lasterOppgaver && `Antall oppgaver ${oppgaver.length}`}
            {lasterOppgaver && "Laster oppgaver..."}
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
            const { tidspunktOpprettet, tilstand, emneknagger, utsattTilDato } = oppgave;
            const erValgtOppgave = location.pathname.includes(oppgave.oppgaveId);
            const dagerIgjenTilUtsattDato = utsattTilDato
              ? differenceInCalendarDays(utsattTilDato, new Date())
              : undefined;

            return (
              <>
                {lasterOppgaver && (
                  <Table.Row>
                    <Table.DataCell>
                      <Skeleton variant="text" width={90} height={33} />
                    </Table.DataCell>
                    <Table.DataCell>
                      <Skeleton variant="text" width={60} height={33} />
                    </Table.DataCell>
                    <Table.DataCell>
                      <Skeleton variant="text" width={250} height={33} />
                    </Table.DataCell>
                    <Table.DataCell>
                      <Skeleton variant="text" width={150} height={33} />
                    </Table.DataCell>
                    <Table.DataCell>
                      <Skeleton variant="text" width={100} height={33} />
                    </Table.DataCell>
                    <Table.DataCell>
                      <Skeleton variant="text" width={20} height={33} />
                    </Table.DataCell>
                  </Table.Row>
                )}

                {!lasterOppgaver && (
                  <Table.Row
                    key={oppgave.oppgaveId}
                    className={classnames({ [styles.valgtOppgaveBackground]: erValgtOppgave })}
                  >
                    <Table.DataCell
                      className={classnames({ [styles.valgtOppgaveBorder]: erValgtOppgave })}
                    >
                      <Detail textColor="subtle">{hentFormattertDato(tidspunktOpprettet)}</Detail>
                    </Table.DataCell>

                    <Table.DataCell>
                      <Detail>Søknad</Detail>
                    </Table.DataCell>

                    <Table.DataCell>
                      <>
                        {emneknagger.map((emneknagg) => (
                          <Tag key={emneknagg} className="mr-2" size={"xsmall"} variant="info">
                            <Detail>{emneknagg}</Detail>
                          </Tag>
                        ))}

                        {utsattTilDato && (
                          <Tag className="mr-2" size={"xsmall"} variant="warning">
                            <Detail>{`${dagerIgjenTilUtsattDato} ${dagerIgjenTilUtsattDato === 1 ? "dag" : "dager"} igjen`}</Detail>
                          </Tag>
                        )}
                      </>
                    </Table.DataCell>

                    <Table.DataCell>{<Detail>{getTilstandText(tilstand)}</Detail>}</Table.DataCell>
                    <Table.DataCell>{<Detail>{oppgave.saksbehandlerIdent}</Detail>}</Table.DataCell>
                    <Table.DataCell>{<OppgaveListeValg oppgave={oppgave} />}</Table.DataCell>
                  </Table.Row>
                )}
              </>
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
