import React from "react";
import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

export function OppgaveFilterMineOppgaver() {
  const [searchParams] = useSearchParams();
  const mineOppgaver = searchParams.get("mine");

  return (
    <div>
      <Detail textColor="subtle">Status</Detail>
      <CheckboxGroup legend="" size="small" className={"kompakt-checkbox"}>
        <Checkbox name="mine" value={"true"} defaultChecked={mineOppgaver === "true"}>
          Se kun mine oppgaver
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
}
