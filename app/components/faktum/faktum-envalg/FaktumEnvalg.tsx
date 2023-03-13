import React from "react";
import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IEnvalgFaktum } from "~/models/faktum.server";

export function FaktumEnvalg({ faktum }: IFaktum<IEnvalgFaktum>) {
  return (
    <div>
      <Label as={"p"}>{faktum.beskrivendeId}</Label>
      <BodyShort>{faktum.svar}</BodyShort>
    </div>
  );
}
