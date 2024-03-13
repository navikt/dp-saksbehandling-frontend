import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/opplysning-input/OpplysningInput";

export function OpplysningInputInt(props: IInputProps) {
  const { name, readonly, verdi, className } = props;
  const { error, getInputProps } = useField(name);

  return (
    <TextField
      type="text"
      size="small"
      error={error}
      inputMode="numeric"
      readOnly={readonly}
      defaultValue={verdi}
      className={className}
      {...getInputProps()}
    />
  );
}
