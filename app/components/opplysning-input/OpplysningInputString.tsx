import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/opplysning-input/OpplysningInput";

export function OpplysningInputString(props: IInputProps) {
  const { name, verdi, readonly, className } = props;
  const { error, getInputProps } = useField(name);

  return (
    <TextField
      size="small"
      type="text"
      error={error}
      readOnly={readonly}
      defaultValue={verdi}
      className={className}
      {...getInputProps()}
    />
  );
}
