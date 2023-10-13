import classNames from "classnames";
import { BehandlingStegInputBoolean } from "~/components/behandling-steg-input/BehandlingStegInputBoolean";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import { BehandlingStegInputInt } from "~/components/behandling-steg-input/BehandlingStegInputInt";
import { BehandlingStegInputDouble } from "~/components/behandling-steg-input/BehandlingsStegInputDouble";
import { BehandlingStegInputString } from "~/components/behandling-steg-input/BehandlingsStegInputString";
import { type TBehandlingStegSvartype } from "~/models/oppgave.server";
import styles from "./BehandlingsStegInput.module.css";
import { BehandlingStegInputTextarea } from "./BehandlingsStegInputTextarea";

export interface IInputProps {
  name: string;
  svartype: TBehandlingStegSvartype;
  label?: string;
  description?: string;
  verdi?: string;
  textarea?: boolean;
  className?: string;
  readonly?: boolean;
}

export function Input(props: IInputProps) {
  const { className, svartype, name, label, description, verdi, readonly, textarea } = props;
  const cssClassNames = classNames(styles.input, className);

  switch (svartype) {
    case "Int":
      return (
        <BehandlingStegInputInt
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
        <BehandlingStegInputDouble
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
        /* 
          Standard-stilene på aksel-komponenten for radioknapper
          overskriver margin-stylingen vår, dermed en ekstra div 
        */
        <div className={cssClassNames}>
          <BehandlingStegInputBoolean
            name={name}
            svartype={svartype}
            label={label || svartype}
            description={description}
            verdi={verdi}
            readonly={readonly}
          />
        </div>
      );

    case "LocalDate":
      return (
        <BehandlingStegInputDato
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
          <BehandlingStegInputTextarea
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
          <BehandlingStegInputString
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
