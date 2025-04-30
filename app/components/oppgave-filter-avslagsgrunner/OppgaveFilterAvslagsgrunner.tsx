import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

const avslagsgrunner = ["Minsteinntekt", "Streik"];

export function OppgaveFilterAvslagsgrunner() {
  const [searchParams, setSearchParams] = useSearchParams();
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
      <Detail textColor="subtle">Avslagsgrunner</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {avslagsgrunner.map((emneknagg) => (
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
