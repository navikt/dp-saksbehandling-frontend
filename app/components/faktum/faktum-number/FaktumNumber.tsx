import { TextField } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { INumberFaktum } from "~/models/faktum.server";

export function FaktumNumber({ faktum }: IFaktum<INumberFaktum>) {
  return (
    <>
      <TextField
        value={faktum.svar}
        label={faktum.beskrivendeId}
        size="medium"
        type="text"
        maxLength={9}
        inputMode="decimal"
      />
    </>
  );
}
