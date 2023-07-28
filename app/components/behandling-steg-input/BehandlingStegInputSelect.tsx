import { Select } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

interface IProps extends IInputProps {
  placeholder: string;
  options: IOptions[];
}

interface IOptions {
  value: string;
  text: string;
}

export function BehandlingStegInputSelect(props: IProps) {
  const { readonly, verdi, name, label, placeholder, options } = props;
  const { error, getInputProps } = useField(name);

  return (
    <Select
      error={error}
      defaultValue={verdi}
      name={name}
      readOnly={readonly}
      {...getInputProps({
        id: name,
        label: <>{label}</>,
        children: undefined, // Needed to keep typescript happy
      })}
    >
      <option value="">{placeholder}</option>
      {options?.length > 0 && (
        <>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </>
      )}
    </Select>
  );
}
