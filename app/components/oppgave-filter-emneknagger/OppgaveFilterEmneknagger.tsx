import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

const emneknagger = [
  "Ordinær",
  "Permittering",
  "Gjenopptak",
  "Verneplikt",
  "Fiskeindustri",
  "Lønnsgaranti",
  "EØS",
  "Utland",
  "Innvilget annen ytelse",
];

export function OppgaveFilterEmneknagger() {
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
      <Detail textColor="subtle">Emneknagger</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {emneknagger.map((emneknagg) => (
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
