import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IKlageOpplysningProps } from "~/components/klage-opplysning/KlageOpplysning";
import { formaterNorskDato } from "~/utils/dato.utils";

import styles from "./KlageOpplysning.module.css";

export function KlageOpplysningDato({ opplysning, formScope, readonly }: IKlageOpplysningProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    // @ts-expect-error TODO Fix typing backend
    defaultSelected: opplysning.verdi ? new Date(opplysning.verdi) : undefined,
    locale: "nb",
    inputFormat: "dd.MM.yyyy",
    onDateChange: (date) => {
      if (date) {
        const datoNorskFormat = formaterNorskDato(date.toISOString());
        field.setValue(datoNorskFormat);
      }
    },
  });

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>
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
