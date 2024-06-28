import type { IOpplysning } from "~/models/behandling.server";
import { useState } from "react";
import { Button, Table } from "@navikt/ds-react";
import { Opplysning } from "~/components/opplysning/Opplysning";

interface IProps {
  opplysning: IOpplysning;
  readonly: boolean;
}

export function OpplysningTabellLinje({ opplysning, readonly }: IProps) {
  const [redigerOpplysning, setredigerOpplysning] = useState(false);

  return (
    <Table.Row key={opplysning.navn}>
      <Table.DataCell scope="row">{opplysning.navn}</Table.DataCell>
      <Table.DataCell>
        <Opplysning opplysning={opplysning} readonly={readonly || !redigerOpplysning} />
      </Table.DataCell>

      {!readonly && opplysning.redigerbar && (
        <Table.DataCell>
          <Button
            variant="tertiary"
            type="button"
            size="xsmall"
            onClick={() => setredigerOpplysning(!redigerOpplysning)}
          >
            {redigerOpplysning ? "Lukk" : "Endre"}
          </Button>
        </Table.DataCell>
      )}
    </Table.Row>
  );
}
