import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "@rvf/remix";

import type { IOpplysningProps } from "~/components/opplysning/Opplysning";

import styles from "./Opplysning.module.css";

export function OpplysningBoolean({ opplysning, formScope, readonly }: IOpplysningProps) {
  const field = useField(formScope);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi === "true" ? "Ja" : "Nei"}</div>
      )}

      {opplysning.redigerbar && (
        <RadioGroup
          size="small"
          {...field.getInputProps()}
          error={field.error()}
          readOnly={readonly}
        >
          <Radio value={true}>Ja</Radio>
          <Radio value={false}>Nei</Radio>
        </RadioGroup>
      )}
    </>
  );
}
