import React from "react";

import type { IFaktum } from "../Faktum";
import type { ILandFaktum } from "~/models/faktum.server";
import { getCountryName } from "~/utils/country.utils";
import { BodyShort, Label } from "@navikt/ds-react";

export function FaktumLand({ faktum }: IFaktum<ILandFaktum>) {
  return (
    <div>
      <Label as={"p"}>{faktum.beskrivendeId}</Label>
      {faktum.svar && <BodyShort>{getCountryName(faktum.svar, "nb")}</BodyShort>}
    </div>
  );
}
