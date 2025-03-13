import type { FormScope } from "@rvf/remix";

import { OpplysningBoolean } from "~/components/opplysning/OpplysningBoolean";
import { OpplysningDato } from "~/components/opplysning/OpplysningDato";
import { OpplysningDouble } from "~/components/opplysning/OpplysningDouble";
import { OpplysningInt } from "~/components/opplysning/OpplysningInt";
import { OpplysningPenger } from "~/components/opplysning/OpplysningPenger";

import { components } from "../../../openapi/behandling-typer";
import styles from "./Opplysning.module.css";

export interface IOpplysningProps {
  opplysning: components["schemas"]["Opplysning"];
  formScope: FormScope<string>;
  readonly?: boolean;
}

export function Opplysning({ opplysning, formScope, readonly }: IOpplysningProps) {
  switch (opplysning.datatype) {
    case "heltall":
      return <OpplysningInt readonly={readonly} opplysning={opplysning} formScope={formScope} />;

    case "penger":
      return <OpplysningPenger readonly={readonly} opplysning={opplysning} formScope={formScope} />;

    case "desimaltall":
      return <OpplysningDouble readonly={readonly} opplysning={opplysning} formScope={formScope} />;

    case "boolsk":
      return (
        <OpplysningBoolean readonly={readonly} opplysning={opplysning} formScope={formScope} />
      );

    case "dato":
      return <OpplysningDato readonly={readonly} opplysning={opplysning} formScope={formScope} />;

    default:
      return <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>;
  }
}
