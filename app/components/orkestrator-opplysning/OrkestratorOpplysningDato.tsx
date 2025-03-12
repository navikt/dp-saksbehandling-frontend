import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/remix";
import { addYears, formatISO, subYears } from "date-fns";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { formaterNorskDato } from "~/utils/dato.utils";
import { hentOrkestratorOpplysningVisningTekst } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
  formScope: FormScope<string>;
}

export function OrkestratorOpplysningDato({ opplysning, formScope }: IProps) {
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
    <DatePicker {...datepickerProps}>
      <DatePicker.Input
        size="small"
        {...inputProps}
        label={hentOrkestratorOpplysningVisningTekst(opplysning.id)}
        form={field.getInputProps().form}
        name={field.getInputProps().name}
        error={field.error()}
        readOnly={opplysning.kilde === "register"}
      />
    </DatePicker>
  );
}
