import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import styles from "./Opplysning.module.css";

export function OpplysningDouble({ opplysning, formScope, readonly }: IOpplysningProps) {
  const field = useField(formScope);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{formaterOpplysningVerdi(opplysning)}</div>
      )}

      {opplysning.redigerbar && (
        <TextField
          size="small"
          type="text"
          inputMode="decimal"
          {...field.getInputProps()}
          error={field.error()}
          readOnly={readonly}
        />
      )}
    </>
  );
}
