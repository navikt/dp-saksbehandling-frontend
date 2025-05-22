import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";

import styles from "./Opplysning.module.css";

export function OpplysningBoolean({ opplysning, formScope, readonly }: IOpplysningProps) {
  const field = useField(formScope);

  console.log(opplysning);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{formaterOpplysningVerdi(opplysning)}</div>
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
