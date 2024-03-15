import React, { useState } from "react";
import { Button, Table } from "@navikt/ds-react";
import { Opplysning } from "~/components/opplysning/Opplysning";
import type { IOpplysning } from "~/models/oppgave.server";
import styles from "./OpplysningTabell.module.css";
import classnames from "classnames";

interface IProps {
  opplysninger: IOpplysning[];
}

export function OpplysningTabell(props: IProps) {
  return (
    <Table className={classnames("kompakt-tabell", styles.table)}>
      <Table.Body>
        {props.opplysninger.map((opplysning) => (
          <OpplysningTabellLinje key={opplysning.opplysningNavn} {...opplysning} />
        ))}
      </Table.Body>
    </Table>
  );
}

function OpplysningTabellLinje(opplysning: IOpplysning) {
  const [redigerOpplysning, setredigerOpplysning] = useState(false);

  return (
    <Table.Row key={opplysning.opplysningNavn}>
      <Table.DataCell scope="row">{opplysning.opplysningNavn}</Table.DataCell>
      <Table.DataCell>
        <Opplysning opplysning={opplysning} readonly={!redigerOpplysning} />
      </Table.DataCell>

      <Table.DataCell>
        {opplysning.redigerbar && (
          <Button
            variant="tertiary"
            type="button"
            size="xsmall"
            onClick={() => setredigerOpplysning(!redigerOpplysning)}
          >
            {redigerOpplysning ? "Lukk" : "Endre"}
          </Button>
        )}
      </Table.DataCell>
    </Table.Row>
  );
}
