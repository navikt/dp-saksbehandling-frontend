import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import { useField } from "remix-validated-form";

export function BehandlingStegInputDato(props: IInputProps) {
  const { error, getInputProps } = useField(props.name);

  // Krasjer fordi props.verdi holder verdien fra forrige behandlingssteg. Funker på hard refresh
  // const defaultSelected = props.verdi ? new Date(props.verdi) : undefined;
  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    defaultSelected: new Date(),
    inputFormat: "yyyy-MM-dd",
    toDate: new Date("1 Oct 2024"),
    fromDate: new Date("Aug 23 2019"),
    onDateChange: (date) => date && props.setVerdi(date?.toISOString()),
  });

  return (
    <>
      <UNSAFE_DatePicker {...datepickerProps}>
        <UNSAFE_DatePicker.Input
          {...getInputProps({
            id: props.name,
            label: props.label || props.svartype,
          })}
          {...inputProps}
        />
      </UNSAFE_DatePicker>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
