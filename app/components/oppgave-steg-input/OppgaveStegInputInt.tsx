import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/oppgave-steg-input/OppgaveStegInput";

export function OppgaveStegInputInt(props: IInputProps) {
  const { name, readonly, verdi, className } = props;
  const { error, getInputProps } = useField(name);

  return (
    <TextField
      type="text"
      inputMode="numeric"
      defaultValue={verdi}
      error={error}
      readOnly={readonly}
      size="small"
      className={className}
      {...getInputProps()}
    />
  );
}
