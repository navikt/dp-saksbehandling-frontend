import type { FormScope } from "@rvf/react-router";

import { OpplysningPeriodeBoolean } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeBoolean";
import { OpplysningPeriodeDato } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeDato";
import { OpplysningPeriodeDouble } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeDouble";
import { OpplysningPeriodeInt } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInt";
import { OpplysningPeriodePenger } from "~/components/v2/opplysning-periode-input/OpplysningPeriodePenger";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

import { components } from "../../../../openapi/behandling-typer";

export interface IOpplysningPeriodeProps {
  periodeVerdi: components["schemas"]["Opplysningsverdi"];
  formScope: FormScope<string>;
  readonly?: boolean;
}

export function OpplysningPeriodeInput({
  periodeVerdi,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  switch (periodeVerdi.datatype) {
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
        <OpplysningPeriodeInt
          readonly={readonly}
          periodeVerdi={periodeVerdi}
          formScope={formScope}
        />
      );

    case "penger":
      return (
        <OpplysningPeriodePenger
          readonly={readonly}
          periodeVerdi={periodeVerdi}
          formScope={formScope}
        />
      );

    case "desimaltall":
      return (
        <OpplysningPeriodeDouble
          readonly={readonly}
          periodeVerdi={periodeVerdi}
          formScope={formScope}
        />
      );

    case "boolsk":
      return (
        <OpplysningPeriodeBoolean
          readonly={readonly}
          periodeVerdi={periodeVerdi}
          formScope={formScope}
        />
      );

    case "dato":
      return (
        <OpplysningPeriodeDato
          readonly={readonly}
          periodeVerdi={periodeVerdi}
          formScope={formScope}
        />
      );

    default:
      // @ts-expect-error I tillfelle det kommer noe nytt fra backend
      return <div>{formaterOpplysningVerdiV2(periodeVerdi.verdi)}</div>;
  }
}
