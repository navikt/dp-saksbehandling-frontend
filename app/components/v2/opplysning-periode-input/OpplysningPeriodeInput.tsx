import type { FormScope } from "@rvf/react-router";

import { OpplysningPeriodeBoolean } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeBoolean";
import { OpplysningPeriodeDato } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeDato";
import { OpplysningPeriodeDouble } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeDouble";
import { OpplysningPeriodeInt } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInt";
import { OpplysningPeriodePenger } from "~/components/v2/opplysning-periode-input/OpplysningPeriodePenger";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../../../openapi/behandling-typer";

export interface IOpplysningPeriodeProps {
  opplysning: components["schemas"]["RedigerbareOpplysninger"];
  datatype: components["schemas"]["DataType"];
  formScope: FormScope<string>;
  readonly?: boolean;
}

export function OpplysningPeriodeInput({
  opplysning,
  datatype,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  switch (datatype) {
    case "tekst":
      break;
    case "inntekt":
      break;
    case "ulid":
      break;
    case "periode":
      break;
    case "barn":
      break;
    case "heltall":
      return (
        <OpplysningPeriodeInt opplysning={opplysning} formScope={formScope} readonly={readonly} />
      );

    case "penger":
      return (
        <OpplysningPeriodePenger
          opplysning={opplysning}
          formScope={formScope}
          readonly={readonly}
        />
      );

    case "desimaltall":
      return (
        <OpplysningPeriodeDouble
          opplysning={opplysning}
          formScope={formScope}
          readonly={readonly}
        />
      );

    case "boolsk":
      return (
        <OpplysningPeriodeBoolean
          opplysning={opplysning}
          formScope={formScope}
          readonly={readonly}
        />
      );

    case "dato":
      return (
        <OpplysningPeriodeDato opplysning={opplysning} formScope={formScope} readonly={readonly} />
      );

    default:
      // @ts-expect-error I tillfelle det kommer noe nytt fra backend
      return <div>{formaterOpplysningVerdi(periodeVerdi.verdi)}</div>;
  }
}
