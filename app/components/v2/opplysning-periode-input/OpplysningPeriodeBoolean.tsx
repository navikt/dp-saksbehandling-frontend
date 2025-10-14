import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";

export function OpplysningPeriodeBoolean({
  opplysning,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  const field = useField(formScope);

  return (
    <>
      <RadioGroup size="small" {...field.getInputProps()} error={field.error()} readOnly={readonly}>
        <Radio value="Ja">Ja</Radio>
        <Radio value="Nei">Nei</Radio>
      </RadioGroup>
    </>
  );
}
