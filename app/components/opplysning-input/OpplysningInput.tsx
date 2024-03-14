import classNames from "classnames";
import { OpplysningInputBoolean } from "~/components/opplysning-input/OpplysningInputBoolean";
import { OpplysningInputDato } from "~/components/opplysning-input/OpplysningInputDato";
import { OpplysningInputDouble } from "~/components/opplysning-input/OpplysningInputDouble";
import { OpplysningInputInt } from "~/components/opplysning-input/OpplysningInputInt";
import { OpplysningInputString } from "~/components/opplysning-input/OpplysningInputString";
import { type IDataType } from "~/models/oppgave.server";
import styles from "./OpplysningInput.module.css";

export interface IInputProps {
  name: string;
  svartype: IDataType;
  label?: string;
  verdi?: string;
  skjult?: boolean;
  readonly?: boolean;
  className?: string;
}

export function OpplysningInput(props: IInputProps) {
  const { className, svartype, name, verdi, readonly, skjult, label } = props;
  const cssClassNames = classNames(styles.input, className, { [styles.skjult]: skjult });

  switch (svartype) {
    case "INT":
      return (
        <OpplysningInputInt
          name={name}
          verdi={verdi}
          label={label}
          skjult={skjult}
          svartype={svartype}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "DOUBLE":
      return (
        <OpplysningInputDouble
          name={name}
          verdi={verdi}
          label={label}
          skjult={skjult}
          svartype={svartype}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "BOOLEAN":
      return (
        <OpplysningInputBoolean
          name={name}
          verdi={verdi}
          label={label}
          skjult={skjult}
          svartype={svartype}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "LOCALDATE":
      return (
        <OpplysningInputDato
          name={name}
          verdi={verdi}
          label={label}
          skjult={skjult}
          svartype={svartype}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "STRING":
      return (
        <OpplysningInputString
          name={name}
          verdi={verdi}
          label={label}
          skjult={skjult}
          svartype={svartype}
          readonly={readonly}
          className={cssClassNames}
        />
      );
  }
}
