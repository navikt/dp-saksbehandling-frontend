import type { FormScope } from "@rvf/react-router";

import { OpplysningPeriodeBoolean } from "~/components/opplysning-periode-input/OpplysningPeriodeBoolean";
import { OpplysningPeriodeDato } from "~/components/opplysning-periode-input/OpplysningPeriodeDato";
import { OpplysningPeriodeDouble } from "~/components/opplysning-periode-input/OpplysningPeriodeDouble";
import { OpplysningPeriodeInt } from "~/components/opplysning-periode-input/OpplysningPeriodeInt";
import { OpplysningPeriodePenger } from "~/components/opplysning-periode-input/OpplysningPeriodePenger";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../../openapi/behandling-typer";

export interface IOpplysningPeriodeProps {
  opplysning: components["schemas"]["RedigerbareOpplysninger"];
  formScope: FormScope<string>;
  readonly?: boolean;
  hideLabel?: boolean;
}

export function OpplysningPeriodeInput({
  opplysning,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  switch (opplysning.datatype) {
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
          hideLabel={true}
        />
      );

    case "desimaltall":
      return (
        <OpplysningPeriodeDouble
          opplysning={opplysning}
          formScope={formScope}
          readonly={readonly}
          hideLabel={true}
        />
      );

    case "boolsk":
      return (
        <OpplysningPeriodeBoolean
          opplysning={opplysning}
          formScope={formScope}
          readonly={readonly}
          hideLabel={true}
        />
      );

    case "dato":
      return (
        <OpplysningPeriodeDato
          opplysning={opplysning}
          formScope={formScope}
          readonly={readonly}
          hideLabel={true}
        />
      );

    default:
      // @ts-expect-error I tilfelle det kommer noe nytt fra backend
      return <div>{formaterOpplysningVerdi(periodeVerdi.verdi)}</div>;
  }
}
