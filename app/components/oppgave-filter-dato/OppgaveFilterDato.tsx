import { DatePicker, Detail, useDatepicker } from "@navikt/ds-react";
import { useSearchParams, useSubmit } from "@remix-run/react";
import { nb } from "date-fns/locale";
import { format } from "date-fns";

interface IProps {}

export function OppgaveFilterDato(props: IProps) {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const tom = searchParams.get("tom");
  const fom = searchParams.get("fom");
  const tomDato = tom ? new Date(tom) : undefined;
  const fomDato = fom ? new Date(fom) : undefined;

  const fraDato = useDatepicker({
    defaultSelected: fomDato,
    toDate: fomDato,
    onDateChange: (date) => {
      submitDates(date, "fom");
    },
  });

  const tilDato = useDatepicker({
    defaultSelected: tomDato,
    fromDate: fomDato,
    onDateChange: (date) => {
      submitDates(date, "tom");
    },
  });

  function submitDates(date: Date | undefined, key: "fom" | "tom") {
    const formData = new FormData();

    if (date) {
      formData.append(key, format(date, "yyyy-MM-dd", { locale: nb }));
    }

    if (key === "tom" && fom) {
      formData.append("fom", fom);
    }

    if (key === "fom" && tom) {
      formData.append("tom", tom);
    }

    submit(formData);
  }

  return (
    <div>
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
