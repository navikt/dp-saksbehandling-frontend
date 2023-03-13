import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IDatoFaktum } from "~/models/faktum.server";
import React from "react";

export function FaktumDato({ faktum }: IFaktum<IDatoFaktum>) {
  return (
    <div>
      <Label as={"p"}>{faktum.beskrivendeId}</Label>
      <BodyShort>{faktum.svar}</BodyShort>
    </div>
  );
}
