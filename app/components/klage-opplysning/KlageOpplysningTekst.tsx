import { Textarea } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

import { IKlageOpplysningProps } from "~/components/klage-opplysning/KlageOpplysning";

import { components } from "../../../openapi/saksbehandling-typer";
import styles from "./KlageOpplysning.module.css";

interface IProps extends IKlageOpplysningProps {
  opplysning: components["schemas"]["KlageOpplysningTekst"];
}

export function KlageOpplysningTekst({ opplysning, formScope, readonly }: IProps) {
  const field = useField(formScope);
  const [verdi, setVerdi] = useState<string>(opplysning.verdi || "");
  const debouncedSetVerdi = useDebounceCallback(setVerdi, 2000);

  useEffect(() => {
    if (verdi !== opplysning.verdi) {
      field.setValue(verdi);
    }
  }, [verdi]);

  return (
    <>
      {!opplysning.redigerbar && opplysning.verdi && (
        <div className={styles.opplysningVerdi}>{opplysning.verdi}</div>
      )}

      {opplysning.redigerbar && (
        <>
          <input {...field.getInputProps()} value={verdi} hidden={true} readOnly={true} />
          <Textarea
            // Denne må settes for å ikke kobles mot RVF skjema sin ID. Trengs for å få til debounced submit for input
            form={"ikke-rvf-form"}
            size={"small"}
            label={opplysning.navn}
            readOnly={readonly}
            defaultValue={verdi}
            onChange={(event) => debouncedSetVerdi(event.currentTarget.value)}
            onBlur={() => debouncedSetVerdi.flush()}
            error={field.error()}
          />
        </>
      )}
    </>
  );
}
