import React from "react";
import { Radio, RadioGroup } from "@navikt/ds-react";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import { useField } from "remix-validated-form";

export function BehandlingStegInputBoolean(props: IInputProps) {
  const { error, getInputProps } = useField(props.name);

  return (
    <>
      <RadioGroup
        size="small"
        {...getInputProps({
          id: props.name,
          legend: props.svartype,
          value: props.verdi,
          onChange: props.setVerdi,
          children: undefined, // Just to keep typescript happy
        })}
      >
        <Radio value={"true"}>Ja</Radio>
        <Radio value={"false"}>Nei</Radio>
      </RadioGroup>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
