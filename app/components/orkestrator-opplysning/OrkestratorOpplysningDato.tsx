import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/remix";
import { addYears, formatISO, subYears } from "date-fns";

import { formaterNorskDato } from "~/utils/dato.utils";

import styles from "./OrkestratorOpplysning.module.css";

interface IProps {
  verdi?: string;
  readonly?: boolean;
  formScope: FormScope<string>;
}

export function OrkestratorOpplysningDato({ verdi, formScope, readonly }: IProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: new Date(verdi || ""),
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
    locale: "nb",
    inputFormat: "dd.MM.yyyy",
    onDateChange: (date) => {
      if (date) {
        const datoBackendFormat = formatISO(date, { representation: "date" });
        field.setValue(formaterNorskDato(datoBackendFormat));
        if (datoBackendFormat !== verdi) {
          field.setDirty(true);
        } else {
          field.setDirty(false);
        }
      }
    },
  });

  return (
    <>
      {!readonly && verdi && (
        <div className={styles.opplysningVerdi}>{formaterNorskDato(verdi)}</div>
      )}

      {!readonly && (
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
