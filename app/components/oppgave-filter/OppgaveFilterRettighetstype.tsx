import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

const rettighetstype = ["Ordinær", "Verneplikt", "Permittert", "Permittert fisk", "Konkurs"];

export function OppgaveFilterRettighetstype() {
  const { searchParams, toggleSearchParam } = useToggleSearchParam();
  const emneknaggerParams = searchParams.getAll("RETTIGHET");

  return (
    <div>
      <Detail textColor="subtle">Rettighet</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact checkbox--in-readmore"}>
        {rettighetstype.map((emneknagg) => (
          <Checkbox
            key={emneknagg}
            name="RETTIGHET"
            value={emneknagg}
            defaultChecked={emneknaggerParams.includes(emneknagg)}
            onChange={(event) => toggleSearchParam("RETTIGHET", event.currentTarget.value)}
          >
            {emneknagg}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
