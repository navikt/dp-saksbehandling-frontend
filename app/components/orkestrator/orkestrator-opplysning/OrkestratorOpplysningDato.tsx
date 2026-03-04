import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";
import { addYears, formatISO, subYears } from "date-fns";

import { OrkestratorOpplysningLabel } from "~/components/orkestrator/orkestrator-barn/OrkestratorOpplysningLabel";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../../../openapi/soknad-orkestrator-typer";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | boolean | undefined>;
  readOnly?: boolean;
}

export function OrkestratorOpplysningDato({ opplysning, formScope, readOnly }: IProps) {
  const field = useField(formScope);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: opplysning.verdi ? new Date(opplysning.verdi) : undefined,
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
        label={<OrkestratorOpplysningLabel opplysning={opplysning} />}
        form={field.getInputProps().form}
        name={field.getInputProps().name}
        error={field.error()}
        readOnly={readOnly || opplysning.kilde === "register"}
      />
    </DatePicker>
  );
}
