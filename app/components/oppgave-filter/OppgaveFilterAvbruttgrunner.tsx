import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

const AVBRUTT_GRUNN = [
  "Behandles i Arena",
  "Flere søknader",
  "Trukket søknad",
  "Annen avbruddsårsak",
];

export function OppgaveFilterAvbruttgrunner() {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const emneknaggerParams = searchParams.getAll("AVBRUTT_GRUNN");

  return (
    <div>
      <Detail textColor="subtle">Avbruttgrunner</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {AVBRUTT_GRUNN.map((emneknagg) => (
          <Checkbox
            key={emneknagg}
            name="AVBRUTT_GRUNN"
            value={emneknagg}
            defaultChecked={emneknaggerParams.includes(emneknagg)}
            onChange={(event) => toggleSearchParam("AVBRUTT_GRUNN", event.currentTarget.value)}
          >
            {emneknagg}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
