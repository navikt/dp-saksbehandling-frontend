import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningBoolean({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.opplysningNavn);

  return (
    <div className={className}>
      {readonly && opplysning.svar?.verdi && (
        <div className={styles.opplysningVerdi}>
          {opplysning.svar.verdi === "true" ? "Ja" : "Nei"}
        </div>
      )}

      {!readonly && (
        <RadioGroup
          size="small"
          error={error}
          readOnly={readonly}
          defaultValue={opplysning.svar?.verdi}
          {...getInputProps()}
        >
          <Radio value={"true"}>{"Ja"}</Radio>
          <Radio value={"false"}>{"Nei"}</Radio>
        </RadioGroup>
      )}
    </div>
  );
}
