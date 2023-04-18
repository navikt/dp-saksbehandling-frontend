import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import type { IBehandlingSteg } from "~/models/behandling.server";

interface IProps {
  onChange: (value: string) => void;
  steg: IBehandlingSteg;
}

export function BehandlingStegInputDato({ steg, onChange }: IProps) {
  const defaultSelected = steg?.svar?.svar ? new Date(steg.svar.svar) : undefined;
  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    defaultSelected,
    inputFormat: "yyyy-MM-dd",
    toDate: new Date("1 Oct 2024"),
    fromDate: new Date("Aug 23 2019"),
    onDateChange: (date) => date && onChange(date?.toISOString()),
  });

  return (
    <UNSAFE_DatePicker {...datepickerProps}>
      <UNSAFE_DatePicker.Input {...inputProps} label="Velg dato" name={steg.uuid} />
    </UNSAFE_DatePicker>
  );
}
