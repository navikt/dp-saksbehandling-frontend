import React from "react";
import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { INumberFaktum } from "~/models/faktum.server";

export function FaktumNumber({ faktum }: IFaktum<INumberFaktum>) {
  return (
    <div>
      <Label as={"p"}>{faktum.beskrivendeId}</Label>
      <BodyShort>{faktum.svar}</BodyShort>
    </div>
  );
}
