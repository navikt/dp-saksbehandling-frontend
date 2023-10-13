import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

export function BehandlingStegInputString(props: IInputProps) {
  const { name, verdi, readonly, className, label, description } = props;
  const { error, getInputProps } = useField(name);

  return (
    <TextField
      type="text"
      defaultValue={verdi}
      error={error}
      readOnly={readonly}
      className={className}
      {...getInputProps({
        id: name,
        label: <>{label}</>,
        ...(description && { description: <>{description}</> }),
      })}
    />
  );
}
