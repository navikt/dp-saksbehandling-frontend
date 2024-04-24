import { Button, Detail, Skeleton, Table, Tag } from "@navikt/ds-react";
import { hentFormattertDato } from "~/utils/dato.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import classnames from "classnames";
import type { IOppgave, IOppgaveTilstand } from "~/models/oppgave.server";

import { OppgaveListeValg } from "~/components/oppgave-liste-valg/OppgaveListeValg";
import styles from "./OppgaveListe.module.css";
import { useTableSort } from "~/hooks/useTableSort";
import { useFetcher, useNavigation } from "@remix-run/react";
import type { action } from "~/routes/_index";

export function OppgaveListe() {
  const { state } = useNavigation();
  const fetcher = useFetcher<typeof action>();
  const { oppgaver } = useTypedRouteLoaderData("routes/_index");
  const { sortedData, handleSort, sortState } = useTableSort<IOppgave>(oppgaver, {
    orderBy: "tidspunktOpprettet",
    direction: "ascending",
  });
  const loading = state !== "idle";

  return (
    <>
      <div className={styles.oppgaveListeMeta}>
        <Detail textColor="subtle">
          {!loading && `Antall oppgaver ${oppgaver.length}`}
          {loading && "Laster oppgaver..."}
        </Detail>
        <fetcher.Form method="post">
          <Button
            variant="primary"
            size="small"
            name="aksjon"
            value="tildel-neste-oppave"
            loading={state !== "idle"}
          >
            Tildel neste oppgave
          </Button>
        </fetcher.Form>
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
            const { tidspunktOpprettet, tilstand, emneknagger } = oppgave;
            return (
              <Table.Row key={oppgave.oppgaveId}>
                <Table.DataCell>
                  {!loading && (
                    <Detail textColor="subtle">{hentFormattertDato(tidspunktOpprettet)}</Detail>
                  )}
                  {loading && <Skeleton variant="text" width={110} height={43} />}
                </Table.DataCell>

                <Table.DataCell>
                  {!loading && <Detail>Søknad</Detail>}
                  {loading && <Skeleton variant="text" width={80} height={43} />}
                </Table.DataCell>
                <Table.DataCell>
                  {!loading &&
                    emneknagger.map((emneknagg) => (
                      <Tag key={emneknagg} className="mr-2" size={"xsmall"} variant="alt1">
                        <Detail>{emneknagg}</Detail>
                      </Tag>
                    ))}
                  {loading && <Skeleton variant="text" width={200} height={43} />}
                </Table.DataCell>

                <Table.DataCell>
                  {!loading && <Detail>{getTilstandText(tilstand)}</Detail>}
                  {loading && <Skeleton variant="text" width={150} height={43} />}
                </Table.DataCell>

                <Table.DataCell>
                  {!loading && <Detail>{oppgave.saksbehandlerIdent}</Detail>}
                  {loading && <Skeleton variant="text" width={100} height={43} />}
                </Table.DataCell>

                <Table.DataCell>
                  {!loading && <OppgaveListeValg oppgave={oppgave} />}
                  {loading && <Skeleton variant="text" width={50} height={43} />}
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
    case "OPPRETTET":
      return "Opprettet";
    case "UNDER_BEHANDLING":
      return "Under behandling";
    case "FERDIG_BEHANDLET":
      return "Ferdig behandlet";
    case "KLAR_TIL_BEHANDLING":
      return "Klar til behandling";
  }
}
