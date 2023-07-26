import { Select } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IInputProps } from "~/components/behandling-steg-input/BehandlingStegInput";

const rettighetstyper = [
  { value: "Ordinær", text: "Ordinær" },
  { value: "Permittering", text: "Permittering" },
  { value: "PermitteringFraFiskeindustrien", text: "Permittering fra fiskeindustrien" },
  { value: "ForskutterteLønnsgarantimidler", text: "Forskutterte lønnsgarantimidler" },
];

export function BehandlingStegInputRettighetstype(props: IInputProps) {
  const { error, getInputProps } = useField(props.name);

  return (
    <Select
      error={error}
      defaultValue={props.verdi}
      name={props.name}
      {...getInputProps({
        id: props.name,
        label: <>{props.label}</>,
        children: undefined, // Needed to keep typescript happy
      })}
    >
      <option value="">Velg rettighetstype</option>
      {rettighetstyper.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </Select>
  );
}
