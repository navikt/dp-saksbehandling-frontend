import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningInt({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.navn);

  return (
    <div className={className}>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi} år</div>
      )}

      {opplysning.redigerbar && (
        <TextField
          type="text"
          size="small"
          error={error}
          inputMode="numeric"
          readOnly={readonly}
          defaultValue={opplysning.verdi}
          {...getInputProps()}
        />
      )}
    </div>
  );
}
