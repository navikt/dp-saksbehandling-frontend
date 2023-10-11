import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { addYears, subYears } from "date-fns";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

export function BehandlingStegInputDato(props: IInputProps) {
  const { readonly, name, verdi, className, label } = props;
  const { error, getInputProps } = useField(name);

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: verdi ? new Date(verdi) : undefined,
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
  });

  return (
    <DatePicker {...datepickerProps}>
      <DatePicker.Input
        error={error}
        readOnly={readonly}
        className={className}
        {...getInputProps({
          id: name,
          label: <>{label}</>,
        })}
        {...inputProps}
      />
    </DatePicker>
  );
}
