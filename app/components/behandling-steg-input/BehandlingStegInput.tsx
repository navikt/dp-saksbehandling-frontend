import classNames from "classnames";
import { BehandlingStegInputBoolean } from "~/components/behandling-steg-input/BehandlingStegInputBoolean";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import { BehandlingStegInputInt } from "~/components/behandling-steg-input/BehandlingStegInputInt";
import { BehandlingStegInputDouble } from "~/components/behandling-steg-input/BehandlingsStegInputDouble";
import { BehandlingStegInputString } from "~/components/behandling-steg-input/BehandlingsStegInputString";
import { type TBehandlingStegSvartype } from "~/models/oppgave.server";
import { BehandlingStegInputTextarea } from "./BehandlingsStegInputTextarea";
import styles from "./BehandlingsStegInput.module.css";

export interface IInputProps {
  name: string;
  svartype: TBehandlingStegSvartype;
  label?: string;
  verdi?: string;
  textarea?: boolean;
  className?: string;
  readonly?: boolean;
}

export function Input(props: IInputProps) {
  const { readonly } = props;
  const cssClassNames = classNames(styles.input, props.className);

  switch (props.svartype) {
    case "Int":
      return (
        <BehandlingStegInputInt
          name={props.name}
          svartype={props.svartype}
          label={props.label || props.svartype}
          verdi={props.verdi}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "Double":
      return (
        <BehandlingStegInputDouble
          name={props.name}
          svartype={props.svartype}
          label={props.label || props.svartype}
          verdi={props.verdi}
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
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={props.verdi}
            readonly={readonly}
          />
        </div>
      );

    case "LocalDate":
      return (
        <BehandlingStegInputDato
          name={props.name}
          svartype={props.svartype}
          label={props.label || props.svartype}
          verdi={props.verdi}
          readonly={readonly}
          className={cssClassNames}
        />
      );

    case "String":
      if (props.textarea) {
        return (
          <BehandlingStegInputTextarea
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={props.verdi}
            readonly={readonly}
            className={cssClassNames}
          />
        );
      } else {
        return (
          <BehandlingStegInputString
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={props.verdi}
            readonly={readonly}
            className={cssClassNames}
          />
        );
      }
  }
}
