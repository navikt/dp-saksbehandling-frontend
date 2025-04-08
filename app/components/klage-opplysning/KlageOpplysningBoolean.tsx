import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IKlageOpplysningProps } from "~/components/klage-opplysning/KlageOpplysning";

import styles from "./KlageOpplysning.module.css";

export function KlageOpplysningBoolean({ opplysning, formScope, readonly }: IKlageOpplysningProps) {
  const field = useField(formScope);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>
      )}

      {opplysning.redigerbar && (
        <RadioGroup
          size="small"
          {...field.getInputProps()}
          error={field.error()}
          readOnly={readonly}
        >
          <Radio value="Ja">Ja</Radio>
          <Radio value="Nei">Nei</Radio>
        </RadioGroup>
      )}
    </>
  );
}
