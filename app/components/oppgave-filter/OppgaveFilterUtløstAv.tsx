import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";
import { hentUtløstAvTekstForVisning } from "~/utils/tekst.utils";

import { components } from "../../../openapi/saksbehandling-typer";

const utløstAvTyper: components["schemas"]["UtlostAvType"][] = [
  "SØKNAD",
  "MANUELL",
  "MELDEKORT",
  "KLAGE",
  "INNSENDING",
  "OMGJØRING",
];

export function OppgaveFilterUtløstAv() {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const utløstAv = searchParams.getAll("utlostAv");

  return (
    <div>
      <Detail textColor="subtle">Utløst av</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {utløstAvTyper.map((type) => (
          <Checkbox
            key={type}
            name="utløstAv"
            value={type}
            defaultChecked={utløstAv.includes(type)}
            onChange={(event) => toggleSearchParam("utlostAv", event.currentTarget.value)}
          >
            {hentUtløstAvTekstForVisning(type)}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
