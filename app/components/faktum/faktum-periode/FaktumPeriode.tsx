import { Fieldset, UNSAFE_DatePicker, UNSAFE_useRangeDatepicker } from "@navikt/ds-react";
import type { IFaktum } from "../Faktum";
import periodeStyles from "./FaktumPeriode.module.css";
import type { IPeriodeFaktum } from "~/models/faktum.server";

export function FaktumPeriode({ faktum }: IFaktum<IPeriodeFaktum>) {
  const { datepickerProps, toInputProps, fromInputProps } = UNSAFE_useRangeDatepicker({
    defaultSelected: {
      from: faktum.svar?.fom ? new Date(faktum.svar?.fom) : undefined,
      to: faktum.svar?.tom ? new Date(faktum.svar?.tom) : undefined,
    },
  });

  return (
    <div>
      <Fieldset legend={faktum.beskrivendeId}>
        <UNSAFE_DatePicker {...datepickerProps} dropdownCaption strategy="fixed">
          <div className={periodeStyles.datePickerSpacing}>
            <UNSAFE_DatePicker.Input {...fromInputProps} label={`${faktum.beskrivendeId}.fra`} />
            <UNSAFE_DatePicker.Input {...toInputProps} label={`${faktum.beskrivendeId}.til`} />
          </div>
        </UNSAFE_DatePicker>
      </Fieldset>
    </div>
  );
}
