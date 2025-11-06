import { Select } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";
import { components } from "openapi/soknad-orkestrator-typer";

import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | undefined>;
  orkestratorLandliste: components["schemas"]["Land"][];
}

export function OrkestratorOpplysningLand({ opplysning, formScope, orkestratorLandliste }: IProps) {
  const field = useField(formScope);

  if (!orkestratorLandliste) {
    return null;
  }
  return (
    <Select
      {...field.getInputProps()}
      error={field.error()}
      label={hentOrkestratorBarnOpplysningLabel(opplysning.id)}
      size="small"
    >
      <option value="">Velg land</option>
      {orkestratorLandliste.map((land: components["schemas"]["Land"]) => (
        <option key={land.alpha3kode} value={land.alpha3kode}>
          {land.navn}
        </option>
      ))}
    </Select>
  );
}
