import { Textarea } from "@navikt/ds-react";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import { useField } from "remix-validated-form";

export function BehandlingStegInputTextarea(props: IInputProps) {
  const { readonly, label, description } = props;
  const { error, getInputProps } = useField(props.name);

  return (
    <Textarea
      defaultValue={props.verdi}
      error={error}
      resize={true}
      readOnly={readonly}
      className={props.className}
      {...getInputProps({
        id: props.name,
        label: <>{label}</>,
        ...(description && { description: <>{description}</> }),
        description: <>{description}</>,
      })}
    />
  );
}
