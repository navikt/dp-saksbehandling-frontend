import { Detail, Table } from "@navikt/ds-react";

interface IProps {
  visPersonIdent?: boolean;
}

export function SakOppgaveListeHeader({ visPersonIdent }: IProps) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader scope="col">
          <Detail>Dato</Detail>
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
          <Detail>Dager på vent</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col">
          <Detail>Utfall</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col">
          <Detail>Årsak</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col">
          <Detail>Saksbehandler</Detail>
        </Table.ColumnHeader>

        <Table.ColumnHeader scope="col"></Table.ColumnHeader>

        <Table.ColumnHeader scope="col" textSize="small">
          <Detail>Valg</Detail>
        </Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
  );
}
