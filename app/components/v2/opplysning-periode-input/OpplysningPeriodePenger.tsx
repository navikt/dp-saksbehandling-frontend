import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";
import { formaterOpplysningVerdiV2 } from "~/utils/opplysning.utils";

export function OpplysningPeriodePenger({
  periodeVerdi,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  const field = useField(formScope);
  console.log("hei");
  console.log(periodeVerdi);
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
