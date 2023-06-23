import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";

export interface IProps {
  name: string;
  label?: string;
  verdi?: string;
}

export function AktivitetTekstfelt(props: IProps) {
  const { error, getInputProps } = useField(props.name);
  return (
    <TextField
      type="text"
      inputMode="numeric"
      defaultValue={props.verdi}
      error={error}
      {...getInputProps({
        id: props.name,
        label: <>{props.label}</>,
      })}
    />
  );
}
