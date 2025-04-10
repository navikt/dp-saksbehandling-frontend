import { UNSAFE_Combobox } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IKlageOpplysningProps } from "~/components/klage-opplysning/KlageOpplysning";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./KlageOpplysning.module.css";

interface IProps extends IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysningFlerListeValg"];
}

export function KlageOpplysningFlervalg({ opplysning, formScope, readonly }: IProps) {
  const field = useField(formScope);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>
      )}

      {opplysning.redigerbar && (
        <UNSAFE_Combobox
          isMultiSelect
          // @ts-expect-error TODO Fix type i backend
          options={opplysning.valgmuligheter}
          {...field.getInputProps()}
          error={field.error()}
          readOnly={readonly}
        />
      )}
    </>
  );
}
