import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";
import { addYears, formatISO, subYears } from "date-fns";

import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterNorskDato } from "~/utils/dato.utils";

import styles from "./Opplysning.module.css";

export function OpplysningDato({ opplysning, formScope, readonly }: IOpplysningProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: new Date(opplysning.verdi),
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
    locale: "nb",
    inputFormat: "dd.MM.yyyy",
    onDateChange: (date) => {
      if (date) {
        const datoBackendFormat = formatISO(date, { representation: "date" });
        field.setValue(formaterNorskDato(datoBackendFormat));
        if (datoBackendFormat !== opplysning.verdi) {
          field.setDirty(true);
        } else {
          field.setDirty(false);
        }
      }
    },
  });

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{formaterNorskDato(opplysning.verdi)}</div>
      )}

      {opplysning.redigerbar && (
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
      )}
    </>
  );
}
