import { DatePicker, Detail, useRangeDatepicker } from "@navikt/ds-react";
import styles from "./OppgaveFilterDato.module.css";

interface IProps {}

export function OppgaveFilterDato(props: IProps) {
  const { datepickerProps, toInputProps, fromInputProps } = useRangeDatepicker({
    fromDate: new Date("Aug 23 2019"),
    onRangeChange: console.log,
  });

  return (
    <DatePicker {...datepickerProps}>
      <DatePicker.Input
        {...fromInputProps}
        size="small"
        className={styles.datepicker}
        label={<Detail textColor="subtle">Fra</Detail>}
      />
      <DatePicker.Input
        {...toInputProps}
        size="small"
        className={styles.datepicker}
        label={<Detail textColor="subtle">Til</Detail>}
      />
    </DatePicker>
  );
}
