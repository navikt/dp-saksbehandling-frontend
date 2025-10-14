import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IOpplysningPeriodeProps } from "~/components/v2/opplysning-periode/OpplysningPeriode";
import { formaterTilBackendDato, formaterTilNorskDato } from "~/utils/dato.utils";

export function OpplysningPeriodeDato({
  opplysning,
  formScope,
  readonly,
}: IOpplysningPeriodeProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    // @ts-expect-error TODO rydd opp i typene
    defaultSelected: new Date(opplysning.verdi.verdi),
    onDateChange: (date) => {
      if (date) {
        const datoBackendFormat = formaterTilBackendDato(date);
        field.setValue(formaterTilNorskDato(date));
        // @ts-expect-error TODO rydd opp i typene
        if (datoBackendFormat !== opplysning.verdi.verdi) {
          field.setDirty(true);
        } else {
          field.setDirty(false);
        }
      }
    },
  });

  return (
    <>
      <DatePicker {...datepickerProps}>
        <DatePicker.Input
          size="small"
          label={""}
          {...inputProps}
          form={field.getInputProps().form}
          name={field.getInputProps().name}
          error={field.error()}
          readOnly={readonly}
        />
      </DatePicker>
    </>
  );
}
