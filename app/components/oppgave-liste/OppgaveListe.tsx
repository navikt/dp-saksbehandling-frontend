import { Button, Detail, Table, Tag } from "@navikt/ds-react";
import { hentFormattertDato } from "~/utils/dato.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import classnames from "classnames";
import type { IOppgave, IOppgaveTilstand } from "~/models/oppgave.server";

import { OppgaveListeValg } from "~/components/oppgave-liste-valg/OppgaveListeValg";
import styles from "./OppgaveListe.module.css";
import { useTableSort } from "~/hooks/useTableSort";
import { useFetcher } from "@remix-run/react";
import type { action } from "~/routes/_index";

export function OppgaveListe() {
  const fetcher = useFetcher<typeof action>();
  const { oppgaver } = useTypedRouteLoaderData("routes/_index");
  const { sortedData, handleSort, sortState } = useTableSort<IOppgave>(oppgaver, {
    orderBy: "tidspunktOpprettet",
    direction: "ascending",
  });

  return (
    <>
      <div className={styles.oppgaveListeMeta}>
        <Detail textColor="subtle">Antall oppgaver {oppgaver.length}</Detail>
        <fetcher.Form method="post">
          <Button
            variant="primary"
            size="small"
            name="aksjon"
            value="tildel-neste-oppave"
            loading={fetcher.state !== "idle"}
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

            <Table.ColumnHeader scope="col">
              <Detail>Saksbehandler</Detail>
            </Table.ColumnHeader>

            <Table.ColumnHeader scope="col" textSize="small">
              <Detail>Valg</Detail>
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sortedData?.map((oppgave) => {
            const { tidspunktOpprettet, tilstand, emneknagger } = oppgave;
            return (
              <Table.Row key={oppgave.oppgaveId}>
                <Table.DataCell>
                  <Detail textColor="subtle">{hentFormattertDato(tidspunktOpprettet)}</Detail>
                </Table.DataCell>

                <Table.DataCell>
                  <Detail>Søknad</Detail>
                </Table.DataCell>
                <Table.DataCell>
                  {emneknagger.map((emneknagg) => (
                    <Tag key={emneknagg} className="mr-2" size={"xsmall"} variant="alt1">
                      <Detail>{emneknagg}</Detail>
                    </Tag>
                  ))}
                </Table.DataCell>

                <Table.DataCell>
                  <Detail>{getTilstandText(tilstand)}</Detail>
                </Table.DataCell>

                <Table.DataCell>
                  <Detail>{oppgave.saksbehandlerIdent}</Detail>
                </Table.DataCell>

                <Table.DataCell>
                  <OppgaveListeValg oppgave={oppgave} />
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

    case "FERDIG_BEHANDLET":
      return "Ferdig Behandlet";

    case "UNDER_BEHANDLING":
      return "Tildelt saksbehandler";

    case "OPPRETTET":
      return "Ikke klar til behandling";
  }
}
