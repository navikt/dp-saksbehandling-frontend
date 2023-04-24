import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import { addYears, subYears } from "date-fns";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import React from "react";

export function BehandlingStegInputDato(props: IInputProps) {
  const { error, getInputProps } = useField(props.name);

  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    defaultSelected: props.verdi ? new Date(props.verdi) : undefined,
    inputFormat: "yyyy-MM-dd",
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
    // onDateChange: (date) => date && props.setVerdi(date?.toISOString()), // Beholde denne for å bruke case "LocalDate": med date value casting senere
  });

  return (
    <UNSAFE_DatePicker {...datepickerProps}>
      <UNSAFE_DatePicker.Input
        error={error}
        {...getInputProps({
          id: props.name,
          label: <>{props.label}</>,
        })}
        {...inputProps}
      />
    </UNSAFE_DatePicker>
  );
}
