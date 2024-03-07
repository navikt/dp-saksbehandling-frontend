import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/opplysning-input/OpplysningInput";

export function OpplysningInputDouble(props: IInputProps) {
  const { name, verdi, readonly, className } = props;
  const { error, getInputProps } = useField(name);
  return (
    <TextField
      type="text"
      inputMode="decimal"
      defaultValue={verdi?.replace(/\./g, ",")}
      error={error}
      readOnly={readonly}
      className={className}
      size="small"
      {...getInputProps()}
    />
  );
}
