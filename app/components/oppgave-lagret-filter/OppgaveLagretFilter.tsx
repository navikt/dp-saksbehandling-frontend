import React from "react";
import { Button } from "@navikt/ds-react";

export function OppgaveLagretFilter() {
  return (
    <div>
      <Button variant="tertiary-neutral" size="xsmall">
        Mine saker
      </Button>
      <Button variant="tertiary-neutral" size="xsmall">
        Alle saker
      </Button>

      <Button variant="tertiary-neutral" size="xsmall">
        Minste inntekt
      </Button>
    </div>
  );
}
