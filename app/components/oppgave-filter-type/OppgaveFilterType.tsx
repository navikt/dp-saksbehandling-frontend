import React from "react";
import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

const oppgavetyper = [
  "Søknad",
  "Feilutbetaling",
  "Klage",
  "Meldekort",
  "To-trinns kontroll",
  "Endret arbeidsituasjon",
  "Søknad om utdanning",
  "Søknad om etablering av egen virksomhet",
  "Samordning",
];

export function OppgaveFilterType() {
  const [searchParams, setSearchParams] = useSearchParams();
  const oppgavetype = searchParams.getAll("oppgavetype");

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
      <Detail textColor="subtle">Oppgavetype</Detail>
      <CheckboxGroup className="kompakt-checkbox" size="small" legend={""}>
        {oppgavetyper.map((type) => (
          <Checkbox
            key={type}
            name="oppgavetype"
            value={type}
            defaultChecked={oppgavetype.includes(type)}
            onChange={(event) =>
              updateSearchParams(
                "oppgavetype",
                event.currentTarget.value,
                event.currentTarget.checked,
              )
            }
          >
            {type}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
