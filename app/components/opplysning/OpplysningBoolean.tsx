import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "remix-validated-form";
import type { IOpplysningProps } from "~/components/opplysning/Opplysning";
import styles from "./Opplysning.module.css";

export function OpplysningBoolean({ opplysning, readonly, className }: IOpplysningProps) {
  const { error, getInputProps } = useField(opplysning.opplysningNavn);

  return (
    <div className={className}>
      {!opplysning.redigerbar && opplysning.svar?.verdi && (
        <div className={styles.opplysningVerdi}>
          {opplysning.svar.verdi === "true" ? "Ja" : "Nei"}
        </div>
      )}

      {opplysning.redigerbar && (
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
