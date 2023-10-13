import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

export function BehandlingStegInputDouble(props: IInputProps) {
  const { name, verdi, readonly, className, label } = props;
  const { error, getInputProps } = useField(name);
  return (
    <TextField
      type="text"
      inputMode="decimal"
      defaultValue={verdi?.replace(/\./g, ",")}
      error={error}
      readOnly={readonly}
      className={className}
      {...getInputProps({
        id: name,
        label: <>{label}</>,
      })}
    />
  );
}
