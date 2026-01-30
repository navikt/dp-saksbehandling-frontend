import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

const søknadResultat = ["Avslag", "Innvilgelse"];

export function OppgaveFilterSøknadresultat() {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const emneknaggerParams = searchParams.getAll("SOKNADSRESULTAT");

  return (
    <div>
      <Detail textColor="subtle">Søknadresultat</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {søknadResultat.map((emneknagg) => (
          <Checkbox
            key={emneknagg}
            name="SOKNADSRESULTAT"
            value={emneknagg}
            defaultChecked={emneknaggerParams.includes(emneknagg)}
            onChange={(event) => toggleSearchParam("SOKNADSRESULTAT", event.currentTarget.value)}
          >
            {emneknagg}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
