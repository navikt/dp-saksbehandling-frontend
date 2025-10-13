import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/v2/opplysning-periode/OpplysningPeriode";

export function OpplysningPeriodeInt({ opplysning, formScope, readonly }: IOpplysningPeriodeProps) {
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
