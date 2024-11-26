import { TextField } from "@navikt/ds-react";
import { useField } from "@rvf/remix";

import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";

import styles from "./Opplysning.module.css";

export function OpplysningPenger({ opplysning, formScope, readonly }: IOpplysningProps) {
  const field = useField(formScope);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>
          {formaterTallMedTusenSeperator(opplysning.verdi)} kr
        </div>
      )}

      {opplysning.redigerbar && (
        <TextField
          size="small"
          type="text"
          inputMode="decimal"
          {...field.getInputProps()}
          error={field.error()}
          readOnly={readonly}
        />
      )}
    </>
  );
}
