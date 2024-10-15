import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import styles from "./Opplysning.module.css";

export function OpplysningPenger({ opplysning, readonly, className, onChange }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.navn);

  return (
    <span className={className}>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>
          {formaterTallMedTusenSeperator(opplysning.verdi)} kr
        </div>
      )}

      {opplysning.redigerbar && (
        <TextField
          size="small"
          type="text"
          error={error}
          inputMode="decimal"
          readOnly={readonly}
          defaultValue={
            opplysning.verdi ? formaterTallMedTusenSeperator(opplysning.verdi) : undefined
          }
          {...getInputProps()}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </span>
  );
}
