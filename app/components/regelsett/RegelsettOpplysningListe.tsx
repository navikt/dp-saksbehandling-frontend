import { Heading } from "@navikt/ds-react";

import { RegelsettOpplysningListeElement } from "~/components/regelsett/RegelsettOpplysningListeElement";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  tittel: string;
  opplysninger: components["schemas"]["Opplysningsgruppe"][];
  readonly?: boolean;
}

export function RegelsettOpplysningListe({ tittel, opplysninger, readonly }: IProps) {
  return (
    <div className={"card m-4"}>
      <Heading size={"small"} className={"pt-4 pl-6"}>
        {tittel}
      </Heading>

      <ul className={"pb-4"}>
        {opplysninger.map((opplysningGruppe) => (
          <RegelsettOpplysningListeElement
            key={opplysningGruppe.opplysningTypeId}
            opplysningGruppe={opplysningGruppe}
            readonly={readonly}
          />
        ))}
      </ul>
    </div>
  );
}
