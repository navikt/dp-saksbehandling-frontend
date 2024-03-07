import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/oppgave-steg-input/OppgaveStegInput";

export function OppgaveStegInputString(props: IInputProps) {
  const { name, verdi, readonly, className } = props;
  const { error, getInputProps } = useField(name);

  return (
    <TextField
      type="text"
      defaultValue={verdi}
      error={error}
      readOnly={readonly}
      className={className}
      size="small"
      {...getInputProps()}
    />
  );
}
