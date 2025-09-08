import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "react-router";

import { components } from "../../../openapi/saksbehandling-typer";

const behandlingTyper: components["schemas"]["BehandlingType"][] = ["RETT_TIL_DAGPENGER", "KLAGE"];

export function OppgaveFilterBehandlingType() {
  const [searchParams, setSearchParams] = useSearchParams();
  const behandlingType = searchParams.getAll("behandlingType");

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
      <Detail textColor="subtle">Behandlingstype</Detail>
      <CheckboxGroup className="checkbox--compact" size="small" legend={""}>
        {behandlingTyper.map((type) => (
          <Checkbox
            key={type}
            name="behandlingType"
            value={type}
            defaultChecked={behandlingType.includes(type)}
            onChange={(event) =>
              updateSearchParams(
                "behandlingType",
                event.currentTarget.value,
                event.currentTarget.checked,
              )
            }
          >
            {hentBehandlingTypeTekstForVisning(type)}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}

export function hentBehandlingTypeTekstForVisning(
  behandlingType: components["schemas"]["BehandlingType"],
) {
  switch (behandlingType) {
    case "RETT_TIL_DAGPENGER":
      return "Rett til dagpenger";
    case "KLAGE":
      return "Klage";
    case "MELDEKORT":
      return "Meldekort";

    default:
      return behandlingType;
  }
}
