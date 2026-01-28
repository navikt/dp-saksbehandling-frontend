import { Detail, Switch } from "@navikt/ds-react";

import { useToggleSearchParam } from "~/hooks/useToggleSearchParam";

export function OppgaveFilterGjenopptak() {
  const { toggleSearchParam } = useToggleSearchParam();

  return (
    <div>
      <Detail textColor="subtle">Gjenopptak</Detail>

      <Switch
        size={"small"}
        value={"Gjenopptak"}
        onChange={(event) => toggleSearchParam("GJENOPPTAK", event.target.value)}
      >
        Vis gjenopptak
      </Switch>
    </div>
  );
}
