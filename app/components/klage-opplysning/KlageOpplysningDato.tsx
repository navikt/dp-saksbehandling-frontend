import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IKlageOpplysningProps } from "~/components/klage-opplysning/KlageOpplysning";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./KlageOpplysning.module.css";

interface IProps extends IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysningDato"];
}

export function KlageOpplysningDato({ opplysning, formScope, readonly }: IProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: opplysning.verdi ? new Date(opplysning.verdi) : undefined,
    locale: "nb",
    inputFormat: "dd.MM.yyyy",
    onDateChange: (date) => {
      if (date) {
        const datoNorskFormat = formaterTilNorskDato(date.toISOString());
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
        <DatePicker {...datepickerProps}>
          <DatePicker.Input
            size="small"
            label={opplysning.navn}
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
