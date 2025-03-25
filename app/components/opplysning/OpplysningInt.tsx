import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import type { IOpplysningProps } from "~/components/opplysning/Opplysning";

import styles from "./Opplysning.module.css";

export function OpplysningInt({ opplysning, formScope, readonly }: IOpplysningProps) {
  const field = useField(formScope);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>
      )}

      {opplysning.redigerbar && (
        <TextField
          type="text"
          size="small"
          {...field.getInputProps()}
          error={field.error()}
          readOnly={readonly}
        />
      )}
    </>
  );
}
