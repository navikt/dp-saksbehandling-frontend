import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";
import { formaterTilBackendDato, formaterTilNorskDato } from "~/utils/dato.utils";

import styles from "./Opplysning.module.css";

export function OpplysningDato({ opplysning, formScope, readonly }: IOpplysningProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: new Date(opplysning.verdi),
    onDateChange: (date) => {
      if (date) {
        const datoBackendFormat = formaterTilBackendDato(date);
        field.setValue(formaterTilNorskDato(date));
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
        <div className={styles.opplysningVerdi}>{formaterOpplysningVerdi(opplysning)}</div>
      )}

      {opplysning.redigerbar && (
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
      )}
    </>
  );
}
