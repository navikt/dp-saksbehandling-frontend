import React from "react";
import { DatePicker, useDatepicker } from "@navikt/ds-react";

export function OppgaveOpplysninger() {
  const soknadsDato = useDatepicker({
    fromDate: new Date("2023"),
    onDateChange: console.log,
  });
  const beregningsdato = useDatepicker({
    fromDate: new Date("2023"),
    onDateChange: console.log,
  });
  const virkningsdato = useDatepicker({
    fromDate: new Date("2023"),
    onDateChange: console.log,
  });

  return (
    <div>
      <DatePicker wrapperClassName="my-4" {...soknadsDato.datepickerProps}>
        <DatePicker.Input {...soknadsDato.inputProps} label="Søkandsdato" />
      </DatePicker>

      <DatePicker wrapperClassName="my-4" {...beregningsdato.datepickerProps}>
        <DatePicker.Input {...beregningsdato.inputProps} label="Beregningsdato" />
      </DatePicker>

      <DatePicker wrapperClassName="my-4" {...virkningsdato.datepickerProps}>
        <DatePicker.Input {...virkningsdato.inputProps} label="Virkningsdato" />
      </DatePicker>
    </div>
  );
}
