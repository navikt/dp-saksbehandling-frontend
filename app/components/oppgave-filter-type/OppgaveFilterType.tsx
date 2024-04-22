import React from "react";
import { Checkbox, CheckboxGroup, Detail } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";

const oppgavetyper = ["Søknad", "Klage & Anke"];

export function OppgaveFilterType() {
  const [searchParams] = useSearchParams();
  const oppgavetype = searchParams.getAll("oppgavetype");

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
          >
            {type}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
