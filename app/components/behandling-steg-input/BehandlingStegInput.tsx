import { BehandlingStegInputString } from "~/components/behandling-steg-input/BehandlingsStegInputString";
import { BehandlingStegInputBoolean } from "~/components/behandling-steg-input/BehandlingStegInputBoolean";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import { BehandlingStegInputInt } from "~/components/behandling-steg-input/BehandlingStegInputInt";
import type { BehandlingStegSvartype } from "~/models/oppgave.server";

export interface IInputProps {
  name: string;
  svartype: BehandlingStegSvartype;
  label?: string;
  verdi?: string;
}

export function Input(props: IInputProps) {
  return renderInputType();

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
