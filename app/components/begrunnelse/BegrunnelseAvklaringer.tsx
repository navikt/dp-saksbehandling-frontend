import { BodyShort, ExpansionCard } from "@navikt/ds-react";

import { AvklaringBegrunnelse } from "~/components/avklaring-begrunnelse/AvklaringBegrunnelse";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  avklaringer: components["schemas"]["Avklaring"][];
  readOnly?: boolean;
}

export function BegrunnelseAvklaringer({ avklaringer, readOnly }: IProps) {
  return (
    <ExpansionCard
      className={"card mb-4 border-0!"}
      aria-label={"Avklaringer"}
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
        <ul>
          {avklaringer.map((avklaring) => (
            <li
              key={avklaring.id}
              className={"mb-4 grid grid-cols-[minmax(auto,550px)_auto] items-start"}
            >
              <BodyShort weight={"semibold"} size={"small"}>
                {avklaring.tittel}
              </BodyShort>
              <AvklaringBegrunnelse avklaring={avklaring} readOnly={readOnly} />
            </li>
          ))}
        </ul>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}
