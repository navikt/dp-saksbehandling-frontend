import { Detail, Table } from "@navikt/ds-react";

import { ISortState } from "~/hooks/useTableSort";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  visPersonIdent?: boolean;
  sortState?: ISortState<components["schemas"]["OppgaveOversikt"]>;
}

export function OppgaveListeHeader({ visPersonIdent, sortState }: IProps) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader scope="col" sortKey="tidspunktOpprettet" sortable={!!sortState}>
          <Detail>Opprettet</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col">
          <Detail>Utløst av</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col">
          <Detail>Rettighet</Detail>
        </Table.ColumnHeader>

        {visPersonIdent && (
          <Table.ColumnHeader scope="col">
            <Detail>Fødselsnummer</Detail>
          </Table.ColumnHeader>
        )}

        <Table.ColumnHeader scope="col">
          <Detail>Status</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col">
          <Detail>Søknadsresultat</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col">
          <Detail>Årsak</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col">
          <Detail>Saksbehandler</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col" textSize="small">
          <Detail>Valg</Detail>
        </Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
  );
}
