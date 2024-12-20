import { DatePicker, Detail, useDatepicker } from "@navikt/ds-react";
import { useSearchParams } from "@remix-run/react";
import { format } from "date-fns";
import { nb } from "date-fns/locale";

import styles from "./OppgaveFilterDato.module.css";

export function OppgaveFilterDato() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tom = searchParams.get("tom");
  const fom = searchParams.get("fom");
  const tomDato = tom ? new Date(tom) : undefined;
  const fomDato = fom ? new Date(fom) : undefined;

  const fraDato = useDatepicker({
    defaultSelected: fomDato,
    toDate: tomDato,
    onDateChange: (date) => {
      updateSearchParams("fom", date ? format(date, "yyyy-MM-dd", { locale: nb }) : "");
    },
  });

  const tilDato = useDatepicker({
    defaultSelected: tomDato,
    fromDate: fomDato,
    onDateChange: (date) => {
      updateSearchParams("tom", date ? format(date, "yyyy-MM-dd", { locale: nb }) : "");
    },
  });

  function updateSearchParams(key: string, value: string) {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.container}>
      <Detail textColor="subtle">Fra</Detail>
      <DatePicker {...fraDato.datepickerProps}>
        <DatePicker.Input label="" size="small" name="fom" {...fraDato.inputProps} />
      </DatePicker>

      <Detail textColor="subtle">Til</Detail>
      <DatePicker {...tilDato.datepickerProps}>
        <DatePicker.Input label="" size="small" name="tom" {...tilDato.inputProps} />
      </DatePicker>
    </div>
  );
}
