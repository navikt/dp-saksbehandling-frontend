import { ExpansionCard, Table } from "@navikt/ds-react";

import { AvklaringBegrunnelse } from "~/components/avklaring-begrunnelse/AvklaringBegrunnelse";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  avklaringer: components["schemas"]["Avklaring"][];
  readOnly?: boolean;
}

export function BegrunnelseAvklaringer({ avklaringer, readOnly }: IProps) {
  return (
    <ExpansionCard
      className={"expansion--subtil card m-4"}
      aria-label={""}
      defaultOpen={true}
      size={"small"}
    >
      <ExpansionCard.Header>
        <ExpansionCard.Title size={"small"}>Avklaringer</ExpansionCard.Title>
        <ExpansionCard.Description>
          Saksbehandler har skrevet følgende begrunnelser på avklaringer i saken.
        </ExpansionCard.Description>
      </ExpansionCard.Header>

      <ExpansionCard.Content>
        <Table size="small" className={"tabell--subtil"} zebraStripes={true}>
          <Table.Body>
            {avklaringer.map((avklaring) => (
              <Table.Row key={avklaring.id} shadeOnHover={false}>
                <Table.HeaderCell>{avklaring.tittel}</Table.HeaderCell>
                <Table.DataCell>
                  <AvklaringBegrunnelse avklaring={avklaring} readOnly={readOnly} />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}
