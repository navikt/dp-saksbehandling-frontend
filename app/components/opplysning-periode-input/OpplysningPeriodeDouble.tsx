import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/opplysning-periode-input/OpplysningPeriodeInput";

export function OpplysningPeriodeDouble({
  opplysning,
  formScope,
  readonly,
}: Omit<IOpplysningPeriodeProps, "datatype">) {
  const field = useField(formScope);

  return (
    <>
      <TextField
        {...field.getInputProps()}
        error={field.error()}
        label={opplysning.navn}
        hideLabel={true}
        size="small"
        type="text"
        inputMode="decimal"
        readOnly={readonly}
      />
    </>
  );
}
