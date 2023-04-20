import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import { addYears, subYears } from "date-fns";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

export function BehandlingStegInputDato(props: IInputProps) {
  const { error, getInputProps } = useField(props.name);

  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    defaultSelected: props.verdi ? new Date(props.verdi) : undefined,
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
    onDateChange: (date) => date && props.setVerdi(date?.toISOString()),
  });

  return (
    <>
      <UNSAFE_DatePicker {...datepickerProps}>
        <UNSAFE_DatePicker.Input
          {...getInputProps({
            id: props.name,
            value: props.verdi,
            label: props.label || props.svartype,
          })}
          {...inputProps}
        />
      </UNSAFE_DatePicker>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
