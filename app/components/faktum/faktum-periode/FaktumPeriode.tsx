import React from "react";
import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IPeriodeFaktum } from "~/models/faktum.server";

export function FaktumPeriode({ faktum }: IFaktum<IPeriodeFaktum>) {
  return (
    <div>
      <Label as={"p"}>{faktum.beskrivendeId}</Label>
      {faktum.svar?.fom && <BodyShort>Fra: {faktum.svar.fom}</BodyShort>}
      {faktum.svar?.tom && <BodyShort>Til: {faktum.svar.tom}</BodyShort>}
    </div>
  );
}
