import { Table } from "@navikt/ds-react";
import type { IOpplysning } from "~/models/behandling.server";
import { OpplysningTabellLinje } from "~/components/opplysning-tabell/OpplysningTabellLinje";
import classnames from "classnames";
import styles from "./OpplysningTabell.module.css";

interface IProps {
  opplysninger: IOpplysning[];
  readonly: boolean;
}

export function OpplysningTabell(props: IProps) {
  return (
    <Table className={classnames("kompakt-tabell", styles.table)}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
          <Table.HeaderCell scope="col">Verdi</Table.HeaderCell>
          {!props.readonly && <Table.HeaderCell scope="col">Endre</Table.HeaderCell>}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.opplysninger.map((opplysning) => (
          <OpplysningTabellLinje
            key={opplysning.navn}
            opplysning={opplysning}
            readonly={props.readonly}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
