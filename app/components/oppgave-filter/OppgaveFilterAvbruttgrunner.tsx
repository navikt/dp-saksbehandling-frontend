import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

const AVBRUTTGRUNNER = [
  "Behandles i Arena",
  "Flere søknader",
  "Trukket søknad",
  "Annen avbruddsårsak",
];

export function OppgaveFilterAvbruttgrunner() {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const emneknaggerParams = searchParams.getAll("AVBRUTTGRUNNER");

  return (
    <div>
      <Detail textColor="subtle">Avbruttgrunner</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {AVBRUTTGRUNNER.map((emneknagg) => (
          <Checkbox
            key={emneknagg}
            name="AVBRUTTGRUNNER"
            value={emneknagg}
            defaultChecked={emneknaggerParams.includes(emneknagg)}
            onChange={(event) => toggleSearchParam("AVBRUTTGRUNNER", event.currentTarget.value)}
          >
            {emneknagg}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
