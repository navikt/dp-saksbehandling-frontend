import classNames from "classnames";
import { OppgaveStegInputBoolean } from "~/components/oppgave-steg-input/OppgaveStegInputBoolean";
import { OppgaveStegInputDato } from "~/components/oppgave-steg-input/OppgaveStegInputDato";
import { OppgaveStegInputDouble } from "~/components/oppgave-steg-input/OppgaveStegInputDouble";
import { OppgaveStegInputInt } from "~/components/oppgave-steg-input/OppgaveStegInputInt";
import { OppgaveStegInputString } from "~/components/oppgave-steg-input/OppgaveStegInputString";
import { OppgaveStegInputTextarea } from "~/components/oppgave-steg-input/OppgaveStegInputTextarea";
import { type IOpplysningType } from "~/models/oppgave.server";
import styles from "./OppgaveStegInput.module.css";

export interface IInputProps {
  name: string;
  svartype: IOpplysningType;
  label?: string;
  description?: string;
  verdi?: string;
  textarea?: boolean;
  className?: string;
  readonly?: boolean;
}

export function OppgaveStegInput(props: IInputProps) {
  const { className, svartype, name, label, description, verdi, readonly, textarea } = props;
  const cssClassNames = classNames(styles.input, className);

  switch (svartype) {
    case "Int":
      return (
        <OppgaveStegInputInt
          name={name}
          svartype={svartype}
          label={label || svartype}
          description={description}
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
          label={label || svartype}
          description={description}
          verdi={verdi}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "Boolean":
      return (
        <OppgaveStegInputBoolean
          name={name}
          svartype={svartype}
          label={label || svartype}
          description={description}
          verdi={verdi}
          readonly={readonly}
        />
      );

    case "LocalDate":
      return (
        <OppgaveStegInputDato
          name={name}
          svartype={svartype}
          label={label || svartype}
          description={description}
          verdi={verdi}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "String":
      if (textarea) {
        return (
          <OppgaveStegInputTextarea
            name={name}
            svartype={svartype}
            label={label || svartype}
            description={description}
            verdi={verdi}
            readonly={readonly}
            className={cssClassNames}
          />
        );
      } else {
        return (
          <OppgaveStegInputString
            name={name}
            svartype={svartype}
            label={label || svartype}
            description={description}
            verdi={verdi}
            readonly={readonly}
            className={cssClassNames}
          />
        );
      }
  }
}
