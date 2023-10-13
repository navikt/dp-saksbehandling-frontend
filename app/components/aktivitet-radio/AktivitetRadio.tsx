import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import { type TAktivitetType } from "~/models/aktivitet.server";

export interface IProps {
  name: string;
  label?: string;
  verdi?: string;
  muligeAktiviteter: TAktivitetType[];
  onChange: (aktivitet: string) => void;
}

export function AktivitetRadio(props: IProps) {
  const { name, verdi, label, onChange, muligeAktiviteter } = props;
  const { error, getInputProps } = useField(name);

  const inputProps: { type: string; value: string } = getInputProps({
    type: "radio",
    value: verdi || "",
  });

  return (
    <RadioGroup
      legend={label}
      error={!inputProps.value ? error : undefined}
      {...inputProps}
      onChange={onChange}
    >
      {muligeAktiviteter.map((aktivitet) => (
        <Radio key={aktivitet} value={aktivitet}>
          {aktivitet}
        </Radio>
      ))}
    </RadioGroup>
  );
}
