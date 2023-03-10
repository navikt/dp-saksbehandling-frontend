import React from "react";
import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IFlervalgFaktum } from "~/models/faktum.server";

export function FaktumFlervalg({ faktum }: IFaktum<IFlervalgFaktum>) {
  return (
    <>
      <CheckboxGroup legend={faktum.beskrivendeId} value={faktum.svar}>
        {faktum.gyldigeValg.map((textId) => (
          <Checkbox key={textId} value={textId}>
            {textId}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </>
  );
}
