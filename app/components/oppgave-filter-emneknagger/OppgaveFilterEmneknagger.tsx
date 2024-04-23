import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

const emneknagger = ["EØS", "Minsteinntekt"];

export function OppgaveFilterEmneknagger() {
  const [searchParams] = useSearchParams();
  const tilstand = searchParams.getAll("emneknagg");

  return (
    <div>
      <Detail textColor="subtle">Emneknagger</Detail>
      <CheckboxGroup legend="" size="small" className={"kompakt-checkbox"}>
        {emneknagger.map((emneknagg) => (
          <Checkbox
            key={emneknagg}
            name="emneknagg"
            value={emneknagg}
            defaultChecked={tilstand.includes(emneknagg)}
          >
            {emneknagg}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
