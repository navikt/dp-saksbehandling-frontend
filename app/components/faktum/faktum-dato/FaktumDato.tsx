import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import { useSanityTekst } from "~/hooks/useSanityTekst";
import type { IDatoFaktum } from "~/models/faktum.server";
import type { IFaktum } from "../Faktum";

export function FaktumDato({ faktum }: IFaktum<IDatoFaktum>) {
  const { hentFaktumTekstMedId } = useSanityTekst();

  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    defaultSelected: faktum.svar ? new Date(faktum.svar) : undefined,
  });

  return (
    <div>
      <UNSAFE_DatePicker {...datepickerProps} dropdownCaption strategy="fixed">
        <UNSAFE_DatePicker.Input
          {...inputProps}
          label={hentFaktumTekstMedId(faktum.beskrivendeId)?.text}
        />
      </UNSAFE_DatePicker>
    </div>
  );
}
