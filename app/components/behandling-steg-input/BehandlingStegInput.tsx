import { useState } from "react";
import { BehandlingStegInputString } from "~/components/behandling-steg-input/BehandlingsStegInputString";
import { BehandlingStegInputBoolean } from "~/components/behandling-steg-input/BehandlingStegInputBoolean";
import { BehandlingStegInputDato } from "~/components/behandling-steg-input/BehandlingStegInputDato";
import { BehandlingStegInputInt } from "~/components/behandling-steg-input/BehandlingStegInputInt";
import type { BehandlingStegSvartype } from "~/models/behandling.server";

export interface IInputInitialProps {
  uuid: string;
  name: string;
  svartype: BehandlingStegSvartype;
  verdi?: string;
  label?: string;
}

export interface IInputProps {
  name: string;
  label: string;
  verdi: string;
  svartype: BehandlingStegSvartype;
  setVerdi: (verdi: string) => void;
}

export function Input(props: IInputInitialProps) {
  const [verdi, setVerdi] = useState<string>(props.verdi || "");

  return renderInputType();

  function renderInputType() {
    switch (props.svartype) {
      case "Int":
        return (
          <BehandlingStegInputInt
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={verdi}
            setVerdi={setVerdi}
          />
        );

      case "Boolean":
        return (
          <BehandlingStegInputBoolean
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={verdi}
            setVerdi={setVerdi}
          />
        );

      case "LocalDate":
        return (
          <BehandlingStegInputDato
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={verdi}
            setVerdi={setVerdi}
          />
        );

      case "String":
        return (
          <BehandlingStegInputString
            name={props.name}
            svartype={props.svartype}
            label={props.label || props.svartype}
            verdi={verdi}
            setVerdi={setVerdi}
          />
        );
    }
  }
}
