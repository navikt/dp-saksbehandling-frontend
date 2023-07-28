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
  const { readonly } = props;
  const { error, getInputProps } = useField(props.name);

  return (
    <Select
      error={error}
      defaultValue={props.verdi}
      name={props.name}
      readOnly={readonly}
      {...getInputProps({
        id: props.name,
        label: <>{props.label}</>,
        children: undefined, // Needed to keep typescript happy
      })}
    >
      <option value="">{props.placeholder}</option>
      {props.options?.length > 0 && (
        <>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </>
      )}
    </Select>
  );
}
