import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import type { IDatoFaktum } from "~/models/faktum.server";

export function FaktumDato({ faktum }: IFaktum<IDatoFaktum>) {
  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    defaultSelected: faktum.svar ? new Date(faktum.svar) : undefined,
  });

  return (
    <div>
      <UNSAFE_DatePicker {...datepickerProps} dropdownCaption strategy="fixed">
        <UNSAFE_DatePicker.Input {...inputProps} label={faktum.beskrivendeId} />
      </UNSAFE_DatePicker>
    </div>
  );
}
