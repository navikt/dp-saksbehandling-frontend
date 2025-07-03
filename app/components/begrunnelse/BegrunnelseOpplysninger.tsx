import { ExpansionCard, Table } from "@navikt/ds-react";

import { OpplysningBegrunnelse } from "~/components/opplysning-begrunnelse/OpplysningBegrunnelse";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  opplysninger: components["schemas"]["Opplysning"][];
  readOnly?: boolean;
}

export function BegrunnelseOpplysninger({ opplysninger, readOnly }: IProps) {
  return (
    <ExpansionCard
      className={"card expansion--subtil m-4"}
      aria-label={""}
      defaultOpen={true}
      size={"small"}
    >
      <ExpansionCard.Header>
        <ExpansionCard.Title size={"small"}>Opplysninger som er endret</ExpansionCard.Title>
        <ExpansionCard.Description>
          Saksbehandler har gjort følgende endringer i behandlingen. Sørg for at begrunnelse for
          hver endring er lagt til.
        </ExpansionCard.Description>
      </ExpansionCard.Header>

      <ExpansionCard.Content>
        <Table size="small" className={"tabell--subtil"} zebraStripes={true}>
          <Table.Body>
            {opplysninger.map((opplysning) => (
              <Table.Row key={opplysning.id} shadeOnHover={false}>
                <Table.HeaderCell>{opplysning.navn}</Table.HeaderCell>
                <Table.DataCell>{formaterOpplysningVerdi(opplysning)}</Table.DataCell>
                <Table.DataCell>
                  <OpplysningBegrunnelse opplysning={opplysning} readOnly={readOnly} />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}
