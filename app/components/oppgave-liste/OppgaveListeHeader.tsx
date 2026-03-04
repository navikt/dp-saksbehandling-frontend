import { Detail, Table } from "@navikt/ds-react";

interface IProps {
  visPersonIdent?: boolean;
}

export function OppgaveListeHeader({ visPersonIdent }: IProps) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader scope="col">
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
