import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { addYears, subYears } from "date-fns";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterNorskDato } from "~/utils/dato.utils";
import styles from "./Opplysning.module.css";

export function OpplysningDato({ opplysning, readonly, label, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.navn);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: opplysning.verdi ? new Date(opplysning.verdi) : undefined,
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
  });

  return (
    <div className={className}>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{formaterNorskDato(opplysning.verdi)}</div>
      )}

      {opplysning.redigerbar && (
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
