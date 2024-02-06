import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/oppgave-steg-input/OppgaveStegInput";

export function OppgaveStegInputBoolean(props: IInputProps) {
  const { name, verdi, readonly, label, description, options } = props;
  const { error, getInputProps } = useField(name);

  return (
    <RadioGroup
      error={error}
      defaultValue={verdi}
      readOnly={readonly}
      description={description}
      {...getInputProps({
        id: name,
        legend: <>{label}</>,
        children: undefined, // Needed to keep typescript happy
      })}
    >
      <Radio value={"true"}>{options?.trueText || "Ja"}</Radio>
      <Radio value={"false"}>{options?.falseText || "Nei"}</Radio>
    </RadioGroup>
  );
}
