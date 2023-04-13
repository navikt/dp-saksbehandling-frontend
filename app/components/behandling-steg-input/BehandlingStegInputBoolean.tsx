import React from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import type { IBehandlingStegSvartype } from "../../models/behandling.server";

interface IProps {
  uuid: string;
  legend: string;
  setSvarVerdi: (verdi: IBehandlingStegSvartype) => void;
  verdi: boolean | "";
}

export function BehandlingStegInputBoolean(props: IProps) {
  return (
    <div>
      <RadioGroup
        name={props.uuid}
        legend={props.legend}
        onChange={(value) => props.setSvarVerdi(value)}
        size="small"
        value={props.verdi}
      >
        <Radio value={"true"}>Ja</Radio>
        <Radio value={"false"}>Nei</Radio>
      </RadioGroup>
    </div>
  );
}
