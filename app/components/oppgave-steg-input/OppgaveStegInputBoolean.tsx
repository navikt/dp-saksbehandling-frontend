import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/oppgave-steg-input/OppgaveStegInput";

export function OppgaveStegInputBoolean(props: IInputProps) {
  const { name, verdi, readonly, label } = props;
  const { error, getInputProps } = useField(name);

  return (
    <RadioGroup
      error={error}
      defaultValue={verdi}
      readOnly={readonly}
      {...getInputProps({
        id: name,
        legend: <>{label}</>,
        children: undefined, // Needed to keep typescript happy
      })}
    >
      <Radio value={"true"}>Ja</Radio>
      <Radio value={"false"}>Nei</Radio>
    </RadioGroup>
  );
}
