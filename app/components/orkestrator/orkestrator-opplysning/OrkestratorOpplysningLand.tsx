import { Select } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";

import { OrkestratorOpplysningLabel } from "~/components/orkestrator/orkestrator-barn/OrkestratorOpplysningLabel";

import { components } from "../../../../openapi/soknad-orkestrator-typer";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | boolean | undefined>;
  orkestratorLandliste: components["schemas"]["Land"][];
  readOnly?: boolean;
}

export function OrkestratorOpplysningLand({
  opplysning,
  formScope,
  orkestratorLandliste,
  readOnly,
}: IProps) {
  const field = useField(formScope);

  if (!orkestratorLandliste) {
    return null;
  }
  return (
    <Select
      {...field.getInputProps()}
      error={field.error()}
      label={<OrkestratorOpplysningLabel opplysning={opplysning} />}
      size="small"
      readOnly={readOnly || opplysning.kilde === "register"}
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
