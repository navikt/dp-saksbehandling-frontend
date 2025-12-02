import { Checkbox, CheckboxGroup, ReadMore } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

const rettighetstype = ["Ordinær", "Verneplikt", "Permittert"];

export function OppgaveFilterRettighetstype() {
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
    <ReadMore size="small" header="Rettighetstype" className="readmore--with-checkboxes">
      <CheckboxGroup legend="" size="small" className={"checkbox--compact checkbox--in-readmore"}>
        {rettighetstype.map((emneknagg) => (
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
    </ReadMore>
  );
}
