import { UNSAFE_Combobox } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";
import { useEffect, useState } from "react";

import { IKlageOpplysningProps } from "~/components/klage/klage-opplysning/KlageOpplysning";

import { components } from "../../../../openapi/saksbehandling-typer";
import styles from "./KlageOpplysning.module.css";

interface IProps extends IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysningUUID"];
}

export function KlageOpplysningUuid({ opplysning, formScope, readonly }: IProps) {
  const field = useField(formScope);
  const [verdi, setVerdi] = useState<string>(opplysning.verdi || "");

  useEffect(() => {
    if (verdi !== opplysning.verdi) {
      field.setValue(verdi);
    }
  }, [verdi]);

  function onToggleSelected(option: string, isSelected: boolean) {
    if (isSelected) {
      setVerdi(option);
    } else {
      setVerdi("");
    }
  }

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>
      )}

      {opplysning.redigerbar && (
        <>
          <input {...field.getInputProps()} hidden={true} readOnly={true} />
          <UNSAFE_Combobox
            // Denne må settes for å ikke kobles mot RVF skjema sin ID.
            form={"ikke-rvf-form"}
            label={opplysning.navn}
            size={"small"}
            isMultiSelect={false}
            onToggleSelected={onToggleSelected}
            selectedOptions={[verdi]}
            options={opplysning.valgmuligheter}
            error={field.error()}
            readOnly={readonly}
          />
        </>
      )}
    </>
  );
}
