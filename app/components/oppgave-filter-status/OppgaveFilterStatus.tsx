import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";

interface IProps {}

const statuser = ["Klar til behandling", "Under Behandling", "Ferdig behandlet"];

export function OppgaveFilterStatus(props: IProps) {
  return (
    <div>
      <Detail textColor="subtle">Status</Detail>
      <CheckboxGroup legend="" size="small" onChange={console.log} className={"kompakt-checkbox"}>
        {statuser.map((status) => (
          <Checkbox key={status} value={status}>
            {status}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
