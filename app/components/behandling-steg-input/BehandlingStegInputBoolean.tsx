import React from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";

interface IProps {
  uuid: string;
  legend: string;
  setSvarVerdi: (verdi: string) => void;
  verdi?: string;
}

export function BehandlingStegInputBoolean(props: IProps) {
  return (
    <RadioGroup
      size="small"
      name={props.uuid}
      value={props.verdi}
      legend={props.legend}
      onChange={(value) => props.setSvarVerdi(value)}
    >
      <Radio value={"true"}>Ja</Radio>
      <Radio value={"false"}>Nei</Radio>
    </RadioGroup>
  );
}
