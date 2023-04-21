import React from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import { useField } from "remix-validated-form";

export function BehandlingStegInputBoolean(props: IInputProps) {
  const { error, getInputProps } = useField(props.name);

  return (
    <RadioGroup
      size="small"
      error={error}
      defaultValue={props.verdi}
      {...getInputProps({
        id: props.name,
        legend: props.svartype,
        children: undefined, // Needed to keep typescript happy
      })}
    >
      <Radio value={"true"}>Ja</Radio>
      <Radio value={"false"}>Nei</Radio>
    </RadioGroup>
  );
}
