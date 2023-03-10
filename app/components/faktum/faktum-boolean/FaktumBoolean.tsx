import React from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IBooleanFaktum } from "~/models/faktum.server";

export function FaktumBoolean({ faktum }: IFaktum<IBooleanFaktum>) {
  return (
    <>
      <RadioGroup legend={faktum.beskrivendeId} value={faktum.svar}>
        {faktum.gyldigeValg?.map((textId) => (
          <div key={textId}>
            <Radio value={textId}>{textId}</Radio>
          </div>
        ))}
      </RadioGroup>
    </>
  );
}
