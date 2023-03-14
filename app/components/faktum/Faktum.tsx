import type { Faktum, IGeneratorFaktum } from "~/models/faktum.server";
import { FaktumBoolean } from "./faktum-boolean/FaktumBoolean";
import { FaktumDato } from "./faktum-dato/FaktumDato";
import { FaktumEnvalg } from "./faktum-envalg/FaktumEnvalg";
import { FaktumFlervalg } from "./faktum-flervalg/FaktumFlervalg";
import { FaktumGenerator } from "./faktum-generator/FaktumGenerator";
import { FaktumLand } from "./faktum-land/FaktumLand";
import { FaktumNumber } from "./faktum-number/FaktumNumber";
import { FaktumPeriode } from "./faktum-periode/FaktumPeriode";
import { FaktumText } from "./faktum-text/FaktumText";

export interface IFaktum<P> {
  faktum: P;
}

export function FaktumComponent(props: IFaktum<Faktum | IGeneratorFaktum>) {
  const { faktum } = props;

  function renderFaktumType() {
    switch (faktum.type) {
      case "boolean":
        return <FaktumBoolean faktum={faktum} />;

      case "envalg":
        return <FaktumEnvalg faktum={faktum} />;

      case "flervalg":
        return <FaktumFlervalg faktum={faktum} />;

      case "tekst":
        return <FaktumText faktum={faktum} />;

      case "double":
      case "int":
        return <FaktumNumber faktum={faktum} />;

      case "land":
        return <FaktumLand faktum={faktum} />;

      case "localdate":
        return <FaktumDato faktum={faktum} />;

      case "periode":
        return <FaktumPeriode faktum={faktum} />;

      case "generator":
        return <FaktumGenerator faktum={faktum as IGeneratorFaktum} />;
    }
  }

  return <>{renderFaktumType()}</>;
}
