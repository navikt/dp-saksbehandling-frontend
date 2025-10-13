import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/v2/opplysning-periode/OpplysningPeriode";

export function OpplysningPeriodeDouble({
  opplysning,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  const field = useField(formScope);

  return (
    <>
      <TextField
        size="small"
        type="text"
        inputMode="decimal"
        {...field.getInputProps()}
        error={field.error()}
        readOnly={readonly}
      />
    </>
  );
}
