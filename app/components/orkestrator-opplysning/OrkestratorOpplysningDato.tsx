import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";
import { addYears, formatISO, subYears } from "date-fns";
import { components } from "openapi/soknad-orkestrator-typer";

import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | undefined>;
}

export function OrkestratorOpplysningDato({ opplysning, formScope }: IProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: opplysning.verdi === "null" ? undefined : new Date(opplysning.verdi),
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
    locale: "nb",
    inputFormat: "dd.MM.yyyy",
    onDateChange: (date) => {
      if (date) {
        field.clearError();

        const datoBackendFormat = formatISO(date, { representation: "date" });
        field.setValue(formaterTilNorskDato(datoBackendFormat));
        if (datoBackendFormat !== opplysning.verdi) {
          field.setDirty(true);
        } else {
          field.setDirty(false);
        }
      }
    },
  });

  return (
    <DatePicker {...datepickerProps}>
      <DatePicker.Input
        size="small"
        {...inputProps}
        label={hentOrkestratorBarnOpplysningLabel(opplysning.id)}
        form={field.getInputProps().form}
        name={field.getInputProps().name}
        error={field.error()}
        readOnly={opplysning.kilde === "register"}
      />
    </DatePicker>
  );
}
