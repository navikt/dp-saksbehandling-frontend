import { Textarea } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/opplysning-input/OpplysningInput";

export function OpplysningInputTextarea(props: IInputProps) {
  const { name, verdi, readonly, className } = props;
  const { error, getInputProps } = useField(name);

  return (
    <Textarea
      size="small"
      error={error}
      resize={true}
      readOnly={readonly}
      defaultValue={verdi}
      className={className}
      {...getInputProps()}
    />
  );
}
