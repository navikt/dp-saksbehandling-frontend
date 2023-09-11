import { Select } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import styles from "./BehandlingsStegInput.module.css";
import classNames from "classnames";

interface IProps extends IInputProps {
  placeholder: string;
  options: IOptions[];
}

export interface IOptions {
  value: string;
  text: string;
}

export function BehandlingStegInputSelect(props: IProps) {
  const { readonly, verdi, name, label, description, placeholder, options } = props;
  const { error, getInputProps } = useField(name);
  const cssClassNames = classNames(styles.input, props.className);

  return (
    <Select
      error={error}
      defaultValue={verdi}
      name={name}
      readOnly={readonly}
      className={cssClassNames}
      {...getInputProps({
        id: name,
        label: <>{label}</>,
        ...(description && { description: <>{description}</> }),
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
