import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

interface IProps {}

const statuser = [
  { id: "KLAR_TIL_BEHANDLING", tekst: "Klar til behandling" },
  { id: "UNDER_BEHANDLING", tekst: "Under Behandling" },
  { id: "FERDIG_BEHANDLET", tekst: "Ferdig behandlet" },
];

export function OppgaveFilterStatus(props: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tilstand = searchParams.getAll("tilstand");

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
      <Detail textColor="subtle">Status</Detail>
      <CheckboxGroup legend="" size="small" className={"kompakt-checkbox"}>
        {statuser.map((status) => (
          <Checkbox
            name="tilstand"
            key={status.id}
            value={status.id}
            defaultChecked={tilstand.includes(status.id)}
            onChange={(event) =>
              updateSearchParams("tilstand", event.currentTarget.value, event.currentTarget.checked)
            }
          >
            {status.tekst}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
