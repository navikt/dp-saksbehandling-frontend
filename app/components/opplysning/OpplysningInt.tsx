import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningInt({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.opplysningNavn);

  return (
    <div className={className}>
      {readonly && opplysning.svar?.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.svar?.verdi} år</div>
      )}

      {!readonly && (
        <TextField
          type="text"
          size="small"
          error={error}
          inputMode="numeric"
          readOnly={readonly}
          defaultValue={opplysning.svar?.verdi}
          {...getInputProps()}
        />
      )}
    </div>
  );
}
