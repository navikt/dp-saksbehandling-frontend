import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";

export function OpplysningPeriodeInt({
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
        type="text"
        inputMode="numeric"
        size="small"
        readOnly={readonly}
      />
    </>
  );
}
