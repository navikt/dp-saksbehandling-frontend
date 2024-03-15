import { TextField } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";
import styles from "./Opplysning.module.css";

export function OpplysningDouble({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.opplysningNavn);
  const enhet = opplysning.opplysningNavn.match("\\sG\\s") ? "G" : "kr";

  return (
    <div className={className}>
      {!opplysning.redigerbar && opplysning.svar?.verdi && (
        <div className={styles.opplysningVerdi}>
          {formaterTallMedTusenSeperator(opplysning.svar.verdi)} {enhet}
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
            opplysning.svar?.verdi
              ? formaterTallMedTusenSeperator(opplysning.svar.verdi)
              : undefined
          }
          {...getInputProps()}
        />
      )}
    </div>
  );
}
