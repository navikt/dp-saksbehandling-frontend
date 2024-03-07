import { Textarea } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/oppgave-steg-input/OppgaveStegInput";

export function OppgaveStegInputTextarea(props: IInputProps) {
  const { name, verdi, readonly, className } = props;
  const { error, getInputProps } = useField(name);

  return (
    <Textarea
      defaultValue={verdi}
      error={error}
      resize={true}
      readOnly={readonly}
      className={className}
      size="small"
      {...getInputProps()}
    />
  );
}
