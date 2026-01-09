import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { hentUtløstAvTekstForVisning } from "~/utils/tekst.utils";

import { components } from "../../../openapi/saksbehandling-typer";

const prioriterteUtløstAvTyper: components["schemas"]["UtlostAvType"][] = [
  "MELDEKORT",
  "INNSENDING",
  "KLAGE",
];

const AVSLAGSGRUNNER = ["Minsteinntekt"];

export function OppgaveFilterPrioritert() {
  const [searchParams, setSearchParams] = useSearchParams();
  const utløstAv = searchParams.getAll("utlostAv");
  const emneknaggerParams = searchParams.getAll("emneknagg");

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
      <CheckboxGroup className="checkbox--compact" size="small" legend={""}>
        <Detail textColor="subtle" className="mt-0 mb-1">
          Prioritert
        </Detail>
        {prioriterteUtløstAvTyper.map((type) => (
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
        {AVSLAGSGRUNNER.map((emneknagg) => (
          <Checkbox
            key={emneknagg}
            name="emneknagg"
            value={emneknagg}
            defaultChecked={emneknaggerParams.includes(emneknagg)}
            onChange={(event) =>
              updateSearchParams(
                "emneknagg",
                event.currentTarget.value,
                event.currentTarget.checked,
              )
            }
          >
            {emneknagg}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
