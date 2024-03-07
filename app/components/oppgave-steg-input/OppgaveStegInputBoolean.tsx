import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/oppgave-steg-input/OppgaveStegInput";

export function OppgaveStegInputBoolean(props: IInputProps) {
  const { name, verdi, readonly } = props;
  const { error, getInputProps } = useField(name);

  return (
    <RadioGroup
      error={error}
      defaultValue={verdi}
      readOnly={readonly}
      size="small"
      {...getInputProps()}
    >
      <Radio value={"true"}>{"Ja"}</Radio>
      <Radio value={"false"}>{"Nei"}</Radio>
    </RadioGroup>
  );
}
