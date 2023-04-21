import React from "react";
import { TextField } from "@navikt/ds-react";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import { useField } from "remix-validated-form";

export function BehandlingStegInputString(props: IInputProps) {
  const { error, getInputProps } = useField(props.name);

  return (
    <TextField
      type="text"
      defaultValue={props.verdi}
      error={error}
      {...getInputProps({
        id: props.name,
        label: props.label || props.svartype,
      })}
    />
  );
}
