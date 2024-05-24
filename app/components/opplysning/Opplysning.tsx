import { OpplysningBoolean } from "~/components/opplysning/OpplysningBoolean";
import { OpplysningDato } from "~/components/opplysning/OpplysningDato";
import { OpplysningDouble } from "~/components/opplysning/OpplysningDouble";
import { OpplysningInt } from "~/components/opplysning/OpplysningInt";
import { OpplysningString } from "~/components/opplysning/OpplysningString";
import type { IOpplysning } from "~/models/behandling.server";
import styles from "./Opplysning.module.css";

export interface IOpplysningProps {
  opplysning: IOpplysning;
  label?: string;
  readonly?: boolean;
  className?: string;
}

export function Opplysning({ opplysning, readonly, label, className }: IOpplysningProps) {
  switch (opplysning.datatype) {
    case "heltall":
      return (
        <OpplysningInt
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "desimaltall":
      return (
        <OpplysningDouble
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "boolsk":
      return (
        <OpplysningBoolean
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "dato":
      return (
        <OpplysningDato
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "STRING":
      return (
        <OpplysningString
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    default:
      return <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>;
  }
}
