import { TextField } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";

import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

import { components } from "../../../../openapi/soknad-orkestrator-typer";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | boolean | undefined>;
}

export function OrkestratorOpplysningTekst({ opplysning, formScope }: IProps) {
  const field = useField(formScope);

  return (
    <TextField
      {...field.getInputProps()}
      size="small"
      type="text"
      label={hentOrkestratorBarnOpplysningLabel(opplysning.id)}
      error={field.error()}
      readOnly={opplysning.kilde === "register"}
    />
  );
}
