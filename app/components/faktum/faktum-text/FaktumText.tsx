import React from "react";
import { Textarea } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { ITekstFaktum } from "~/models/faktum.server";

export function FaktumText({ faktum }: IFaktum<ITekstFaktum>) {
  return (
    <>
      <Textarea value={faktum.svar} label={faktum.beskrivendeId} />
    </>
  );
}
