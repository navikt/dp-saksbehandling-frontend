import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import styles from "./Opplysning.module.css";

export function OpplysningInt({ opplysning, formScope, readonly }: IOpplysningProps) {
  const field = useField(formScope);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{formaterOpplysningVerdi(opplysning)}</div>
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
