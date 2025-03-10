import { DatePicker, useDatepicker } from "@navikt/ds-react";
import { addYears, subYears } from "date-fns";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { hentOrkestratorOpplysningVisningTekst } from "~/utils/orkestrator-opplysninger.utils";
import styles from "../orkestrator-barn/OrkestratorBarn.module.css";
import { OrkestratorTag } from "../orkestrator-barn/OrkestratorTag";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
}

export function OrkestratorOpplysningDato({ opplysning }: IProps) {
  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: new Date(opplysning.verdi),
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
    locale: "nb",
    inputFormat: "dd.MM.yyyy",
    onDateChange: (date) => {},
  });

  return (
    <DatePicker {...datepickerProps}>
      <DatePicker.Input
        size="small"
        label={hentOrkestratorOpplysningVisningTekst(opplysning.id)}
        {...inputProps}
        name={opplysning.id}
        readOnly={opplysning.kilde === "register"}
      />
    </DatePicker>
  );
}
