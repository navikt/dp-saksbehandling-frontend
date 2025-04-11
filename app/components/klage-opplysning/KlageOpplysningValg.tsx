import { Radio, RadioGroup } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IKlageOpplysningProps } from "~/components/klage-opplysning/KlageOpplysning";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./KlageOpplysning.module.css";

interface IProps extends IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysningListeValg"];
}

export function KlageOpplysningValg({ opplysning, formScope, readonly }: IProps) {
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
          {/*// @ts-expect-error TODO Fix type i backend */}
          {opplysning.valgmuligheter.map((valg) => (
            <Radio key={valg} value={valg}>
              {valg}
            </Radio>
          ))}
        </RadioGroup>
      )}
    </>
  );
}
