import { Detail, Switch } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

export function OppgaveFilterMineOppgaver() {
  const { searchParams, setSearchParams } = useToggleSearchParam();
  const mineOppgaver = searchParams.get("mineOppgaver");

  function handleChange(checked: boolean) {
    if (checked) {
      searchParams.set("mineOppgaver", "true");
    } else {
      searchParams.delete("mineOppgaver");
    }
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Detail textColor="subtle">Mine oppgaver</Detail>

      <Switch
        size={"small"}
        checked={mineOppgaver === "true"}
        onChange={(event) => handleChange(event.target.checked)}
      >
        Vis kun mine oppgaver
      </Switch>
    </div>
  );
}
