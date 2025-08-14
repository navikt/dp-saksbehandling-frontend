import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { components } from "../../../openapi/saksbehandling-typer";

const TILSTANDER: ITilstander[] = [
  { id: "KLAR_TIL_KONTROLL", tekst: "Klar til kontroll" },
  { id: "UNDER_KONTROLL", tekst: "Under kontroll" },
  { id: "KLAR_TIL_BEHANDLING", tekst: "Klar til behandling" },
  { id: "UNDER_BEHANDLING", tekst: "Under behandling" },
  { id: "FERDIG_BEHANDLET", tekst: "Ferdig behandlet" },
  { id: "PAA_VENT", tekst: "På vent" },
  { id: "BEHANDLES_I_ARENA", tekst: "Sendt til Arena" },
];

interface IProps {
  tilgjengeligTilstander?: components["schemas"]["OppgaveTilstand"][];
}

interface ITilstander {
  id: components["schemas"]["OppgaveTilstand"];
  tekst: string;
}

export function OppgaveFilterStatus({ tilgjengeligTilstander }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tilstand = searchParams.getAll("tilstand");

  const tilstander =
    tilgjengeligTilstander && tilgjengeligTilstander.length > 0
      ? TILSTANDER.filter((tilstand) => tilgjengeligTilstander.includes(tilstand.id))
      : TILSTANDER;

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
      <CheckboxGroup legend="" size="small" className={"checkbox--compact"}>
        {tilstander.map((status) => (
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
