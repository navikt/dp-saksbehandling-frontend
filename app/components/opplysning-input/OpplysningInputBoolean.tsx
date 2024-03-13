import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/opplysning-input/OpplysningInput";

export function OpplysningInputBoolean(props: IInputProps) {
  const { name, verdi, readonly, className } = props;
  const { error, getInputProps } = useField(name);

  return (
    <RadioGroup
      size="small"
      error={error}
      readOnly={readonly}
      defaultValue={verdi}
      className={className}
      {...getInputProps()}
    >
      <Radio value={"true"}>{"Ja"}</Radio>
      <Radio value={"false"}>{"Nei"}</Radio>
    </RadioGroup>
  );
}
