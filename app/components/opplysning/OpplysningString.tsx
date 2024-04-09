import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningString({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.navn);

  return (
    <div className={className}>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi} år</div>
      )}

      {opplysning.redigerbar && (
        <TextField
          size="small"
          type="text"
          error={error}
          readOnly={readonly}
          defaultValue={opplysning.verdi}
          {...getInputProps()}
        />
      )}
    </div>
  );
}
