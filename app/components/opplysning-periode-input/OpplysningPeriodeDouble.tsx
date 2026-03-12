import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/opplysning-periode-input/OpplysningPeriodeInput";

export function OpplysningPeriodeDouble({
  opplysning,
  formScope,
  readonly,
  hideLabel,
}: IOpplysningPeriodeProps) {
  const field = useField(formScope);

  return (
    <TextField
      {...field.getInputProps()}
      error={field.error()}
      label={opplysning.navn}
      hideLabel={hideLabel}
      size="small"
      type="text"
      inputMode="decimal"
      readOnly={readonly}
    />
  );
}
