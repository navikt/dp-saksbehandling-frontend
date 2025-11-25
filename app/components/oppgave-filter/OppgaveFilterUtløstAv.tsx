import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { hentUtløstAvTekstForVisning } from "~/utils/tekst.utils";

import { components } from "../../../openapi/saksbehandling-typer";

const utløstAvTyper: components["schemas"]["UtlostAvType"][] = [
  "SØKNAD",
  "KLAGE",
  "MELDEKORT",
  "MANUELL",
];

export function OppgaveFilterUtløstAv() {
  const [searchParams, setSearchParams] = useSearchParams();
  const utløstAv = searchParams.getAll("utlostAv");

  function updateSearchParams(key: string, value: string, checked: boolean) {
    if (!checked) {
      searchParams.delete(key, value);
    } else {
      searchParams.append(key, value);
    }
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Detail textColor="subtle">Utløst av</Detail>
      <CheckboxGroup className="checkbox--compact" size="small" legend={""}>
        {utløstAvTyper.map((type) => (
          <Checkbox
            key={type}
            name="utløstAv"
            value={type}
            defaultChecked={utløstAv.includes(type)}
            onChange={(event) =>
              updateSearchParams("utlostAv", event.currentTarget.value, event.currentTarget.checked)
            }
          >
            {hentUtløstAvTekstForVisning(type)}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
