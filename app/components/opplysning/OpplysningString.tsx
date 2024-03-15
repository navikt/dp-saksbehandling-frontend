import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningString({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.opplysningNavn);

  return (
    <div className={className}>
      {!opplysning.redigerbar && opplysning.svar?.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.svar?.verdi} år</div>
      )}

      {opplysning.redigerbar && (
        <TextField
          size="small"
          type="text"
          error={error}
          readOnly={readonly}
          defaultValue={opplysning.svar?.verdi}
          {...getInputProps()}
        />
      )}
    </div>
  );
}
