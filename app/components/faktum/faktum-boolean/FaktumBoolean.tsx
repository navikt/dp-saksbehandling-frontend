import React from "react";
import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IBooleanFaktum } from "~/models/faktum.server";

export function FaktumBoolean({ faktum }: IFaktum<IBooleanFaktum>) {
  return (
    <div>
      <Label as={"p"}>{faktum.beskrivendeId}</Label>
      <BodyShort>{booleanTilBeskrivendeId(faktum)}</BodyShort>
    </div>
  );
}

export function beskrivendeIdTilBoolean(beskrivendeId: string): boolean | undefined {
  if (beskrivendeId.match(".*.svar.ja")) {
    return true;
  }

  if (beskrivendeId.match(".*.svar.nei")) {
    return false;
  }

  return undefined;
}

export function booleanTilBeskrivendeId(faktum: IBooleanFaktum): string | undefined {
  if (faktum.svar === undefined) {
    return undefined;
  }

  return faktum.gyldigeValg.find((valg) => {
    if (faktum.svar) {
      return valg.match(".*.svar.ja");
    }

    return valg.match(".*.svar.nei");
  });
}
