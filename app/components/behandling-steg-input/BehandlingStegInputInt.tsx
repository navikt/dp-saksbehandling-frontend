import React from "react";
import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

export function BehandlingStegInputInt(props: IInputProps) {
  const { error, getInputProps } = useField(props.name);
  return (
    <>
      <TextField
        type="text"
        inputMode="decimal"
        {...getInputProps({
          id: props.name,
          label: props.label || props.svartype,
          value: props.verdi,
          onChange: (event) => props.setVerdi(event.currentTarget.value),
        })}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
