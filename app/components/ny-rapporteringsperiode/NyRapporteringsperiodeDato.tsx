import { UNSAFE_DatePicker, UNSAFE_useDatepicker } from "@navikt/ds-react";
import { addYears, subYears } from "date-fns";
import { useField } from "remix-validated-form";

interface IProps {
  name: string;
  formName: string;
  label?: string;
  verdi?: string;
}

export function NyRapporteringsperiodeDato(props: IProps) {
  const { error, getInputProps } = useField(props.formName);

  // TODO: Denne er nesten helt lik BehandlingStegInputDato, gjøre alle inputs om til generelle komponenter?

  const { datepickerProps, inputProps } = UNSAFE_useDatepicker({
    defaultSelected: props.verdi ? new Date(props.verdi) : undefined,
    toDate: addYears(new Date(), 100),
    fromDate: subYears(new Date(), 100),
  });

  return (
    <UNSAFE_DatePicker {...datepickerProps}>
      <UNSAFE_DatePicker.Input
        error={error}
        {...getInputProps({
          id: props.name,
          label: <>{props.label}</>,
        })}
        {...inputProps}
        name={props.name}
        id={props.name}
        className="my-4"
      />
    </UNSAFE_DatePicker>
  );
}
