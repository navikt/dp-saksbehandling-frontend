import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningInt({
  opplysning,
  verdi,
  onChange,
  readonly,
  className,
}: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.navn);

  return (
    <div className={className}>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>
      )}

      {opplysning.redigerbar && (
        <TextField
          {...getInputProps()}
          type="text"
          size="small"
          error={error}
          inputMode="numeric"
          readOnly={readonly}
          value={verdi}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
