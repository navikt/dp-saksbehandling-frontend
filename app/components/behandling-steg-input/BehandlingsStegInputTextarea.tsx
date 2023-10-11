import { Textarea } from "@navikt/ds-react";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import { useField } from "remix-validated-form";

export function BehandlingStegInputTextarea(props: IInputProps) {
  const { name, verdi, readonly, className, label, description } = props;
  const { error, getInputProps } = useField(name);

  return (
    <Textarea
      defaultValue={verdi}
      error={error}
      resize={true}
      readOnly={readonly}
      className={className}
      {...getInputProps({
        id: name,
        label: <>{label}</>,
        ...(description && { description: <>{description}</> }),
        description: <>{description}</>,
      })}
    />
  );
}
