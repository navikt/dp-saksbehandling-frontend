import { Radio, RadioGroup, Select } from "@navikt/ds-react";
import { useField } from "@rvf/react-router";

import { IKlageOpplysningProps } from "~/components/klage/klage-opplysning/KlageOpplysning";

import { components } from "../../../../openapi/saksbehandling-typer";
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

      {opplysning.redigerbar && opplysning.valgmuligheter.length > 8 && (
        <Select
          size="small"
          {...field.getInputProps()}
          label={opplysning.navn}
          error={field.error()}
          readOnly={readonly}
        >
          {opplysning.valgmuligheter.map((valg) => (
            <option key={valg} value={valg}>
              {konverterValgmulighetEnumTilVisningVerdi(valg)}
            </option>
          ))}
        </Select>
      )}

      {opplysning.redigerbar && opplysning.valgmuligheter.length <= 8 && (
        <RadioGroup
          size="small"
          {...field.getInputProps()}
          legend={opplysning.navn}
          error={field.error()}
          readOnly={readonly}
        >
          {opplysning.valgmuligheter.map((valg) => (
            <Radio key={valg} value={valg}>
              {konverterValgmulighetEnumTilVisningVerdi(valg)}
            </Radio>
          ))}
        </RadioGroup>
      )}
    </>
  );
}

function konverterValgmulighetEnumTilVisningVerdi(valg: string): string {
  switch (valg) {
    case "OPPRETTHOLDELSE":
      return "Opprettholdelse";
    case "DELVIS_MEDHOLD":
      return "Delvis medhold";
    case "MEDHOLD":
      return "Medhold";
    case "AVVIST":
      return "Avvist";
    case "BRUKER":
      return "Bruker";
    case "FULLMEKTIG":
      return "Fullmektig";
    default:
      return valg;
  }
}
