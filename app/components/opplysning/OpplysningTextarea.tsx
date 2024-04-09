import { Textarea } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningTextarea({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.navn);

  return (
    <div className={className}>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi} </div>
      )}

      {opplysning.redigerbar && (
        <Textarea
          size="small"
          error={error}
          resize={true}
          readOnly={readonly}
          defaultValue={opplysning.verdi}
          {...getInputProps()}
        />
      )}
    </div>
  );
}
