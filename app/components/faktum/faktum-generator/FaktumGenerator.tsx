import React from "react";
import type { IFaktum } from "../Faktum";
import type { IGeneratorFaktum } from "~/models/faktum.server";
import { FaktumComponent } from "../Faktum";

export function FaktumGenerator(props: IFaktum<IGeneratorFaktum>) {
  switch (props.faktum.beskrivendeId) {
    default:
      return <StandardGenerator {...props} />;
  }
}

function StandardGenerator({ faktum }: IFaktum<IGeneratorFaktum>) {
  return (
    <div>
      {faktum?.svar?.map((fakta) => {
        return (
          <div key={faktum.id}>
            {fakta.map((faktum) => (
              <FaktumComponent key={faktum.id} faktum={faktum} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
