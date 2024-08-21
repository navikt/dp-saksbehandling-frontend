import { OpplysningBoolean } from "~/components/opplysning/OpplysningBoolean";
import { OpplysningDato } from "~/components/opplysning/OpplysningDato";
import { OpplysningDouble } from "~/components/opplysning/OpplysningDouble";
import { OpplysningInt } from "~/components/opplysning/OpplysningInt";
import { OpplysningString } from "~/components/opplysning/OpplysningString";
import type { IOpplysning } from "~/models/behandling.server";
import styles from "./Opplysning.module.css";

export interface IOpplysningProps {
  opplysning: IOpplysning;
  verdi: string;
  onChange: (verdi: string) => void;
  label?: string;
  readonly?: boolean;
  className?: string;
}

export function Opplysning({
  opplysning,
  verdi,
  onChange,
  readonly,
  label,
  className,
}: IOpplysningProps) {
  switch (opplysning.datatype) {
    case "heltall":
      return (
        <OpplysningInt
          verdi={verdi}
          onChange={onChange}
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "penger":
      return (
        <OpplysningDouble
          verdi={verdi}
          onChange={onChange}
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "desimaltall":
      return (
        <OpplysningDouble
          verdi={verdi}
          onChange={onChange}
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "boolsk":
      return (
        <OpplysningBoolean
          verdi={verdi}
          onChange={onChange}
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "dato":
      return (
        <OpplysningDato
          verdi={verdi}
          onChange={onChange}
          label={label}
          readonly={readonly}
          opplysning={opplysning}
          className={className}
        />
      );

    case "STRING":
      return (
        <OpplysningString
          verdi={verdi}
          onChange={onChange}
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
