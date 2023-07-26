import classNames from "classnames";
import { BehandlingStegInputBoolean } from "~/components/behandling-steg-input/BehandlingStegInputBoolean";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import { BehandlingStegInputInt } from "~/components/behandling-steg-input/BehandlingStegInputInt";
import { BehandlingStegInputDouble } from "~/components/behandling-steg-input/BehandlingsStegInputDouble";
import { BehandlingStegInputString } from "~/components/behandling-steg-input/BehandlingsStegInputString";
import { type TBehandlingStegSvartype } from "~/models/oppgave.server";
import { BehandlingStegInputRettighetstype } from "./BehandlingStegInputRettighetstype";
import styles from "./BehandlingsStegInput.module.css";

export interface IInputProps {
  name: string;
  svartype: TBehandlingStegSvartype;
  label?: string;
  verdi?: string;
  className?: string;
}

export function Input(props: IInputProps) {
  if (props.label === "Rettighetstype") {
    return (
      <div className={classNames(styles.container, props.className)}>
        <BehandlingStegInputRettighetstype
          name={props.name}
          svartype={props.svartype}
          label={props.label || props.svartype}
          verdi={props.verdi}
        />
      </div>
    );
  }

  return <div className={classNames(styles.container, props.className)}>{renderInputType()}</div>;

  function renderInputType() {
    switch (props.svartype) {
      case "Int":
        return (
          <BehandlingStegInputInt
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={props.verdi}
          />
        );

      case "Double":
        return (
          <BehandlingStegInputDouble
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={props.verdi}
          />
        );

      case "Boolean":
        return (
          <BehandlingStegInputBoolean
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={props.verdi}
          />
        );

      case "LocalDate":
        return (
          <BehandlingStegInputDato
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={props.verdi}
          />
        );

      case "String":
        return (
          <BehandlingStegInputString
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={props.verdi}
          />
        );
    }
  }
}
