import { BodyShort, ExpansionCard } from "@navikt/ds-react";

import { OpplysningBegrunnelse } from "~/components/opplysning-begrunnelse/OpplysningBegrunnelse";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  opplysninger: components["schemas"]["Opplysning"][];
  readOnly?: boolean;
}

export function BegrunnelseOpplysninger({ opplysninger, readOnly }: IProps) {
  return (
    <ExpansionCard
      className={"card mb-4 border-0!"}
      aria-label={"Opplysninger som er endret"}
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
        <ul>
          {opplysninger.map((opplysning) => (
            <li
              key={opplysning.id}
              className={"mb-4 grid grid-cols-[minmax(auto,550px)_auto] items-start"}
            >
              <BodyShort size={"small"}>
                <b>{opplysning.navn}</b>
                <br />
                {formaterOpplysningVerdi(opplysning)}
              </BodyShort>

              <OpplysningBegrunnelse opplysning={opplysning} readOnly={readOnly} />
            </li>
          ))}
        </ul>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
}
