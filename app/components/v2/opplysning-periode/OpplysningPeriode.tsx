import type { FormScope } from "@rvf/react-router";

import { OpplysningPeriodeBoolean } from "~/components/v2/opplysning-periode/OpplysningPeriodeBoolean";
import { OpplysningPeriodeDato } from "~/components/v2/opplysning-periode/OpplysningPeriodeDato";
import { OpplysningPeriodeDouble } from "~/components/v2/opplysning-periode/OpplysningPeriodeDouble";
import { OpplysningPeriodeInt } from "~/components/v2/opplysning-periode/OpplysningPeriodeInt";
import { OpplysningPeriodePenger } from "~/components/v2/opplysning-periode/OpplysningPeriodePenger";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

import { components } from "../../../../openapi/behandling-typer";

export interface IOpplysningPeriodeProps {
  opplysning: components["schemas"]["Opplysningsperiode"];
  formScope: FormScope<string>;
  readonly?: boolean;
}

export function OpplysningPeriode({ opplysning, formScope, readonly }: IOpplysningPeriodeProps) {
  console.log(opplysning);
  switch (opplysning.verdi.datatype) {
    case "heltall":
      return (
        <OpplysningPeriodeInt readonly={readonly} opplysning={opplysning} formScope={formScope} />
      );

    case "penger":
      return (
        <OpplysningPeriodePenger
          readonly={readonly}
          opplysning={opplysning}
          formScope={formScope}
        />
      );

    case "desimaltall":
      return (
        <OpplysningPeriodeDouble
          readonly={readonly}
          opplysning={opplysning}
          formScope={formScope}
        />
      );

    case "boolsk":
      return (
        <OpplysningPeriodeBoolean
          readonly={readonly}
          opplysning={opplysning}
          formScope={formScope}
        />
      );

    case "dato":
      return (
        <OpplysningPeriodeDato readonly={readonly} opplysning={opplysning} formScope={formScope} />
      );

    default:
      return <div>{formaterOpplysningVerdiV2(opplysning.verdi)}</div>;
  }
}
