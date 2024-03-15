import { Textarea } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningTextarea({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.opplysningNavn);

  return (
    <div className={className}>
      {readonly && opplysning.svar?.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.svar?.verdi} </div>
      )}

      {!readonly && (
        <Textarea
          size="small"
          error={error}
          resize={true}
          readOnly={readonly}
          defaultValue={opplysning.svar?.verdi}
          {...getInputProps()}
        />
      )}
    </div>
  );
}
