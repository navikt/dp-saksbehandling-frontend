import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";

export interface IProps {
  name: string;
  label?: string;
  verdi?: string;
}

export function AktivitetTekstfelt(props: IProps) {
  const { name, verdi, label } = props;
  const { error, getInputProps } = useField(name);
  return (
    <TextField
      type="text"
      inputMode="numeric"
      defaultValue={verdi}
      error={error}
      {...getInputProps({
        id: name,
        label: <>{label}</>,
      })}
    />
  );
}
