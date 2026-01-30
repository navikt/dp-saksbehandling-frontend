import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

const AVSLAGSGRUNNER = ["Minsteinntekt", "Reell arbeidssøker"];

export function OppgaveFilterAvslagsgrunner() {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const emneknaggerParams = searchParams.getAll("AVSLAGSGRUNN");

  return (
    <div>
      <Detail textColor="subtle">Avslagsgrunner</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {AVSLAGSGRUNNER.map((emneknagg) => (
          <Checkbox
            key={emneknagg}
            name="AVSLAGSGRUNN"
            value={emneknagg}
            defaultChecked={emneknaggerParams.includes(emneknagg)}
            onChange={(event) => toggleSearchParam("AVSLAGSGRUNN", event.currentTarget.value)}
          >
            {emneknagg}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
