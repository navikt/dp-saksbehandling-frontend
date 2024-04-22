import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

const emneknagger = ["EØS", "Minsteinntekt"];

export function OppgaveFilterEmneknagger() {
  const [searchParams] = useSearchParams();
  const tilstand = searchParams.getAll("tilstand");

  return (
    <div>
      <Detail textColor="subtle">Emneknagger</Detail>
      <CheckboxGroup legend="" size="small" className={"kompakt-checkbox"}>
        {emneknagger.map((status) => (
          <Checkbox
            key={status}
            name="tilstand"
            value={status}
            defaultChecked={tilstand.includes(status)}
          >
            {status}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
