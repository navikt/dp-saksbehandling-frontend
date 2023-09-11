import React from "react";
import { TextField } from "@navikt/ds-react";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import { useField } from "remix-validated-form";

export function BehandlingStegInputString(props: IInputProps) {
  const { readonly, label, description } = props;
  const { error, getInputProps } = useField(props.name);

  return (
    <TextField
      type="text"
      defaultValue={props.verdi}
      error={error}
      readOnly={readonly}
      className={props.className}
      {...getInputProps({
        id: props.name,
        label: <>{label}</>,
        ...(description && { description: <>{description}</> }),
      })}
    />
  );
}
