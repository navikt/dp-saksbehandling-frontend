import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";
import { formaterTilNorskDato } from "~/utils/dato.utils";

export function OpplysningPeriodeDato({
  opplysning,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: field.value() ? new Date(field.value()) : undefined,
    onDateChange: (date) => {
      if (date) {
        field.setValue(formaterTilNorskDato(date));
      }
    },
  });

  return (
    <>
      <DatePicker {...datepickerProps}>
        <DatePicker.Input
          {...inputProps}
          form={field.getInputProps().form}
          name={field.getInputProps().name}
          error={field.error()}
          label={opplysning.navn}
          hideLabel={true}
          size="small"
          readOnly={readonly}
        />
      </DatePicker>
    </>
  );
}
