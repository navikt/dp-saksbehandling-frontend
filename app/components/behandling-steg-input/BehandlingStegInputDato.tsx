import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import type { IBehandlingSteg } from "~/models/behandling.server";

interface IProps {
  onChange: (value: Date | undefined) => void;
  steg: IBehandlingSteg;
}

export function BehandlingStegInputDato({ steg, onChange }: IProps) {
  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    inputFormat: "yyyy-MM-dd",
    fromDate: new Date("Aug 23 2019"),
    toDate: new Date("1 Oct 2024"),
    defaultSelected: steg?.svar?.svar ? new Date(steg.svar.svar as unknown as Date) : undefined,
    onDateChange: (val) => {
      onChange(val);
    },
  });

  return (
    <UNSAFE_DatePicker {...datepickerProps}>
      <UNSAFE_DatePicker.Input {...inputProps} label="Velg dato" name={steg.uuid} />
    </UNSAFE_DatePicker>
  );
}
