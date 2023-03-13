import React from "react";
import { BodyShort, Label } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IFlervalgFaktum } from "~/models/faktum.server";

export function FaktumFlervalg({ faktum }: IFaktum<IFlervalgFaktum>) {
  return (
    <>
      <Label as={"p"}>{faktum.beskrivendeId}</Label>
      {faktum.svar?.map((svar) => (
        <BodyShort key={svar}>{svar}</BodyShort>
      ))}
    </>
  );
}
