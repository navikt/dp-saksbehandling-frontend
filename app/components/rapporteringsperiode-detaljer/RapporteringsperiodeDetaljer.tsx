import { Table } from "@navikt/ds-react";
import { FormattedDate } from "../FormattedDate";
import { hentAktivitetITimer } from "~/utils/aktivitet.utils";
import {
  type IRapporteringsperiode,
  type IRapporteringsperiodeDag,
} from "~/models/rapporteringsperiode.server";

export default function periodeDetaljer(props: { periode: IRapporteringsperiode }) {
  const { periode } = props;
  return (
    <Table size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>14. dagers periode</Table.HeaderCell>
          <Table.HeaderCell>Jobbet</Table.HeaderCell>
          <Table.HeaderCell>Syk</Table.HeaderCell>
          <Table.HeaderCell>Ferie</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {periode.dager.map((dag: IRapporteringsperiodeDag) => (
          <Table.Row key={dag.dato}>
            <Table.HeaderCell>
              <FormattedDate date={dag.dato} />
            </Table.HeaderCell>
            <Table.DataCell>{hentAktivitetITimer(dag, "Arbeid") || "-"}</Table.DataCell>
            <Table.DataCell>{hentAktivitetITimer(dag, "Sykdom") || "-"}</Table.DataCell>
            <Table.DataCell>{hentAktivitetITimer(dag, "Ferie") || "-"}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
