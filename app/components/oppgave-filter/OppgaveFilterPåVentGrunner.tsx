import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

const PAA_VENT_GRUNNER = [
  "Avvent svar",
  "Avvent dokumentasjon",
  "Avvent meldekort",
  "Avvent permitteringsårsak",
  "Avvent rapporteringsfrist",
  "Sendt forespørsel",
  "Utsatt annen årsak",
  "Tidligere utsatt",
];

export function OppgaveFilterPåVentGrunner() {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const emneknaggerParams = searchParams.getAll("PAA_VENT");

  return (
    <div>
      <Detail textColor="subtle">På vent-grunner</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {PAA_VENT_GRUNNER.map((emneknagg) => (
          <Checkbox
            key={emneknagg}
            name="PAA_VENT"
            value={emneknagg}
            defaultChecked={emneknaggerParams.includes(emneknagg)}
            onChange={(event) => toggleSearchParam("PAA_VENT", event.currentTarget.value)}
          >
            {emneknagg}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
