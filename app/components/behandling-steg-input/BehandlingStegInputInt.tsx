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
        defaultValue={props.verdi}
        {...getInputProps({
          id: props.name,
          label: props.label || props.svartype,
        })}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
