import { Table } from "@navikt/ds-react";

import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";

export const ANTALL_PERIODER_SOM_VISES = 5;

interface IProps {
  perioder: components["schemas"]["Opplysningsperiode"][];
  utvidet: boolean;
}

export function PerioderTabell({ perioder, utvidet }: IProps) {
  const synligePerioder = utvidet ? perioder : perioder.slice(0, ANTALL_PERIODER_SOM_VISES);

  return (
    <Table size={"small"} zebraStripes={true}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
          <Table.HeaderCell scope="col">Utbetales</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {synligePerioder.map((periode) => (
          <Table.Row key={periode.id}>
            <Table.DataCell>
              {periode.gyldigFraOgMed ? formaterTilNorskDato(periode.gyldigFraOgMed) : "--"} –{" "}
              {periode.gyldigTilOgMed ? formaterTilNorskDato(periode.gyldigTilOgMed) : "--"}
            </Table.DataCell>
            <Table.DataCell>{formaterOpplysningVerdi(periode.verdi)}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
