import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";

export function OpplysningPeriodeInt({
  periodeVerdi,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  const field = useField(formScope);

  return (
    <>
      <TextField
        type="text"
        size="small"
        {...field.getInputProps()}
        error={field.error()}
        readOnly={readonly}
      />
    </>
  );
}
