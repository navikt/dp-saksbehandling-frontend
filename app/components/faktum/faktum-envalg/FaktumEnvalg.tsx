import React from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IEnvalgFaktum } from "~/models/faktum.server";

export function FaktumEnvalg({ faktum }: IFaktum<IEnvalgFaktum>) {
  return (
    <>
      <RadioGroup legend={faktum.beskrivendeId} value={faktum.svar}>
        {faktum.gyldigeValg.map((textId) => {
          return (
            <Radio key={textId} value={textId}>
              {textId}
            </Radio>
          );
        })}
      </RadioGroup>
    </>
  );
}
