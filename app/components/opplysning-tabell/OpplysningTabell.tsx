import React, { useState } from "react";
import { Button, Table } from "@navikt/ds-react";
import { OpplysningInput } from "~/components/opplysning-input/OpplysningInput";
import type { IOpplysning } from "~/models/oppgave.server";

interface IProps {
  opplysninger: IOpplysning[];
}

export function OpplysningTabell(props: IProps) {
  return (
    <Table className="kompakt-tabell">
      <Table.Body>
        {props.opplysninger.map((opplysning) => (
          <OpplysningTabellLinje key={opplysning.opplysningNavn} {...opplysning} />
        ))}
      </Table.Body>
    </Table>
  );
}

function OpplysningTabellLinje(opplysning: IOpplysning) {
  const [kanEndre, setKanEndre] = useState(false);

  return (
    <Table.Row key={opplysning.opplysningNavn}>
      <Table.DataCell scope="row">{opplysning.opplysningNavn}</Table.DataCell>
      <Table.DataCell>
        <OpplysningInput
          name={opplysning.opplysningNavn}
          svartype={opplysning.dataType}
          verdi={opplysning.svar?.verdi}
          skjult={!kanEndre}
        />

        {!kanEndre && <div>{opplysning.svar?.verdi}</div>}
      </Table.DataCell>
      <Table.DataCell>
        <Button
          variant="tertiary"
          type="button"
          size="xsmall"
          onClick={() => setKanEndre(!kanEndre)}
        >
          {kanEndre ? "Lukk" : "Endre"}
        </Button>
      </Table.DataCell>
    </Table.Row>
  );
}
