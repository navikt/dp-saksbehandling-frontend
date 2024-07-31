import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

export function OppgaveFilterMineOppgaver() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mineOppgaver = searchParams.get("mineOppgaver");

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
      <Detail textColor="subtle">Mine oppgaver</Detail>
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        <Checkbox
          name="mineOppgaver"
          value="true"
          defaultChecked={mineOppgaver === "true"}
          onChange={(event) =>
            updateSearchParams(
              "mineOppgaver",
              event.currentTarget.value,
              event.currentTarget.checked,
            )
          }
        >
          Se kun mine oppgaver
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
}
