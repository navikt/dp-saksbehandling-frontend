import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

export function BehandlingStegInputInt(props: IInputProps) {
  const { readonly } = props;
  const { error, getInputProps } = useField(props.name);

  return (
    <TextField
      type="text"
      inputMode="numeric"
      defaultValue={props.verdi}
      error={error}
      readOnly={readonly}
      {...getInputProps({
        id: props.name,
        label: <>{props.label}</>,
      })}
    />
  );
}
