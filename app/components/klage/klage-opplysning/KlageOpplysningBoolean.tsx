import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IKlageOpplysningProps } from "~/components/klage/klage-opplysning/KlageOpplysning";

import { components } from "../../../../openapi/saksbehandling-typer";
import styles from "./KlageOpplysning.module.css";

interface IProps extends IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysningBoolsk"];
}

export function KlageOpplysningBoolean({ opplysning, formScope, readonly }: IProps) {
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
          legend={opplysning.navn}
          readOnly={readonly}
          error={field.error()}
        >
          <Radio value="Ja">Ja</Radio>
          <Radio value="Nei">Nei</Radio>
        </RadioGroup>
      )}
    </>
  );
}
