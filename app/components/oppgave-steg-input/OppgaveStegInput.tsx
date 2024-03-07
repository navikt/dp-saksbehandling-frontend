import classNames from "classnames";
import { OppgaveStegInputBoolean } from "~/components/oppgave-steg-input/OppgaveStegInputBoolean";
import { OppgaveStegInputDato } from "~/components/oppgave-steg-input/OppgaveStegInputDato";
import { OppgaveStegInputDouble } from "~/components/oppgave-steg-input/OppgaveStegInputDouble";
import { OppgaveStegInputInt } from "~/components/oppgave-steg-input/OppgaveStegInputInt";
import { OppgaveStegInputString } from "~/components/oppgave-steg-input/OppgaveStegInputString";
import { type IDataType } from "~/models/oppgave.server";
import styles from "./OppgaveStegInput.module.css";

export interface IInputProps {
  name: string;
  svartype: IDataType;
  verdi?: string;
  className?: string;
  readonly?: boolean;
}

export function OppgaveStegInput(props: IInputProps) {
  const { className, svartype, name, verdi, readonly } = props;
  const cssClassNames = classNames(styles.input, className);

  switch (svartype) {
    case "Int":
      return (
        <OppgaveStegInputInt
          name={name}
          svartype={svartype}
          verdi={verdi}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "Double":
      return (
        <OppgaveStegInputDouble
          name={name}
          svartype={svartype}
          verdi={verdi}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "Boolean":
      return (
        <div className={cssClassNames}>
          <OppgaveStegInputBoolean
            name={name}
            svartype={svartype}
            verdi={verdi}
            readonly={readonly}
          />
        </div>
      );

    case "LocalDate":
      return (
        <OppgaveStegInputDato
          name={name}
          svartype={svartype}
          verdi={verdi}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "String":
      return (
        <OppgaveStegInputString
          name={name}
          svartype={svartype}
          verdi={verdi}
          readonly={readonly}
          className={cssClassNames}
        />
      );
  }
}
