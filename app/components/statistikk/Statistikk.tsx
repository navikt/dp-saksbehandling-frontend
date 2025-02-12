import { Table } from "@navikt/ds-react";

import { IStatistikk } from "~/models/statistikk.server";

interface IProps {
  statistikk: IStatistikk;
}

export function Statistikk({ statistikk }: IProps) {
  const individuellStatistikk = statistikk.IndividuellStatistikk;
  const generellStatistikk = statistikk.GenerellStatistikk;
  const beholdningsinfo = statistikk.Beholdningsinfo;

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col"></Table.HeaderCell>
            <Table.HeaderCell scope="col">Mine fullførte vedtak.</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell scope="row">{"I dag"}</Table.HeaderCell>
            <Table.DataCell>{individuellStatistikk.dag}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">{"Denne uken"}</Table.HeaderCell>
            <Table.DataCell>{individuellStatistikk.uke}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">{"Totalt"}</Table.HeaderCell>
            <Table.DataCell>{individuellStatistikk.totalt}</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col"></Table.HeaderCell>
            <Table.HeaderCell scope="col">Alle fullførte vedtak.</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell scope="row">{"I dag"}</Table.HeaderCell>
            <Table.DataCell>{generellStatistikk.dag}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">{"Denne uken"}</Table.HeaderCell>
            <Table.DataCell>{generellStatistikk.uke}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">{"Totalt"}</Table.HeaderCell>
            <Table.DataCell>{generellStatistikk.totalt}</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col"></Table.HeaderCell>
            <Table.HeaderCell scope="col">Beholdning.</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell scope="row">{"Klar til behandling"}</Table.HeaderCell>
            <Table.DataCell>{beholdningsinfo.antallOppgaverKlarTilBehandling}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">{"Klar til kontroll"}</Table.HeaderCell>
            <Table.DataCell>{beholdningsinfo.antallOppgaverKlarTilKontroll}</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">{"Eldste ubehandlede oppgave"}</Table.HeaderCell>
            <Table.DataCell>{beholdningsinfo.datoEldsteUbehandledeOppgave}</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
