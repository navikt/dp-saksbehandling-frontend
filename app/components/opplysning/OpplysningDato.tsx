import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { addYears, subYears } from "date-fns";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterNorskDato } from "~/utils/dato.utils";
import styles from "./Opplysning.module.css";

export function OpplysningDato({ opplysning, readonly, label, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.opplysningNavn);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: opplysning.svar?.verdi ? new Date(opplysning.svar.verdi) : undefined,
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
  });

  return (
    <div className={className}>
      {readonly && opplysning.svar?.verdi && (
        <div className={styles.opplysningVerdi}>{formaterNorskDato(opplysning.svar.verdi)}</div>
      )}

      {!readonly && (
        <DatePicker {...datepickerProps}>
          <DatePicker.Input
            size="small"
            error={error}
            readOnly={readonly}
            {...inputProps}
            {...getInputProps({ label: label })}
          />
        </DatePicker>
      )}
    </div>
  );
}
