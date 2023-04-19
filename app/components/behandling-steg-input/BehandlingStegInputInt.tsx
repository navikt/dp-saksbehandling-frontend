import React from "react";
import { TextField } from "@navikt/ds-react";

interface IProps {
  uuid: string;
  legend: string;
  setSvarVerdi: (verdi: string) => void;
  verdi?: string;
}

export function BehandlingStegInputInt(props: IProps) {
  return (
    <TextField
      type="text"
      label="Tall:"
      inputMode="decimal"
      name={props.uuid}
      value={props.verdi}
      onChange={(event) => props.setSvarVerdi(event.currentTarget.value)}
    />
  );
}
