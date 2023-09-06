import React from "react";
import { Textarea, TextField } from "@navikt/ds-react";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";
import { useField } from "remix-validated-form";

export function BehandlingStegInputString(props: IInputProps) {
  const { readonly } = props;
  const { error, getInputProps } = useField(props.name);

  return (
    <>
      {textareaVilkaar.includes(props.name) ? (
        <Textarea
          defaultValue={props.verdi}
          error={error}
          resize={true}
          readOnly={readonly}
          className={props.className}
          {...getInputProps({
            id: props.name,
            label: <>{props.label}</>,
          })}
        />
      ) : (
        <TextField
          type="text"
          defaultValue={props.verdi}
          error={error}
          readOnly={readonly}
          className={props.className}
          {...getInputProps({
            id: props.name,
            label: <>{props.label}</>,
          })}
        />
      )}
    </>
  );
}

const textareaVilkaar = ["begrunnelse"];
