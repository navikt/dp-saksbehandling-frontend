import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/opplysning-periode-input/OpplysningPeriodeInput";

export function OpplysningPeriodeBoolean({
  opplysning,
  formScope,
  readonly,
  hideLabel,
}: IOpplysningPeriodeProps) {
  const field = useField(formScope);

  return (
    <RadioGroup
      {...field.getInputProps()}
      error={field.error()}
      className={"aksel--horisontal"}
      size="small"
      readOnly={readonly}
      legend={opplysning.navn}
      hideLegend={hideLabel}
    >
      <Radio value="Ja">Ja</Radio>
      <Radio value="Nei">Nei</Radio>
    </RadioGroup>
  );
}
