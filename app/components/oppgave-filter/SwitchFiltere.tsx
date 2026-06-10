import { Switch } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

export function SwitchFiltere() {
  const { searchParams, setSearchParams } = useToggleSearchParam();
  const mineOppgaver = searchParams.get("mineOppgaver");
  const harDpSak = searchParams.get("harDpSak");

  function handleChange(param: string, checked: boolean) {
    if (checked) {
      searchParams.set(param, "true");
    } else {
      searchParams.delete(param);
    }
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Switch
        size={"small"}
        checked={mineOppgaver === "true"}
        onChange={(event) => handleChange("mineOppgaver", event.target.checked)}
      >
        Vis kun mine oppgaver
      </Switch>

      <Switch
        size={"small"}
        checked={harDpSak === "true"}
        onChange={(event) => handleChange("harDpSak", event.target.checked)}
      >
        Vis kun DP-saker
      </Switch>
    </div>
  );
}
