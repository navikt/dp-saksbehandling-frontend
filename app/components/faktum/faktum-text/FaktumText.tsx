import React from "react";
import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { ITekstFaktum } from "~/models/faktum.server";

export function FaktumText({ faktum }: IFaktum<ITekstFaktum>) {
  return (
    <div>
      <Label as={"p"}>{faktum.beskrivendeId}</Label>
      <BodyShort>{faktum.svar}</BodyShort>
    </div>
  );
}
