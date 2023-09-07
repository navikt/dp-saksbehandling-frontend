import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { addYears, subYears } from "date-fns";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

export function BehandlingStegInputDato(props: IInputProps) {
  const { readonly } = props;
  const { error, getInputProps } = useField(props.name);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: props.verdi ? new Date(props.verdi) : undefined,
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
  });

  return (
    <DatePicker {...datepickerProps}>
      <DatePicker.Input
        error={error}
        readOnly={readonly}
        className={props.className}
        {...getInputProps({
          id: props.name,
          label: <>{props.label}</>,
        })}
        {...inputProps}
      />
    </DatePicker>
  );
}
