import { UNSAFE_Combobox } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";
import { useEffect, useState } from "react";

import { IKlageOpplysningProps } from "~/components/klage-opplysning/KlageOpplysning";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./KlageOpplysning.module.css";

interface IProps extends IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysningFlerListeValg"];
}

export function KlageOpplysningFlervalg({ opplysning, formScope, readonly }: IProps) {
  const field = useField(formScope);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(opplysning.verdi || []);

  useEffect(() => {
    field.setValue(JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  function onToggleSelected(option: string, isSelected: boolean) {
    if (isSelected) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    }
  }

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>
      )}

      {opplysning.redigerbar && (
        <>
          <input
            {...field.getInputProps()}
            value={JSON.stringify(selectedOptions)}
            hidden={true}
            readOnly={true}
          />
          <UNSAFE_Combobox
            // Denne må settes for å ikke kobles mot RVF skjema sin ID.
            form={"ikke-rvf-form"}
            label={opplysning.navn}
            size={"small"}
            isMultiSelect
            onToggleSelected={onToggleSelected}
            selectedOptions={selectedOptions}
            options={opplysning.valgmuligheter}
            error={field.error()}
            readOnly={readonly}
          />
        </>
      )}
    </>
  );
}
