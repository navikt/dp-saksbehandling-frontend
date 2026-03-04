import { TextField } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";

import { OrkestratorOpplysningLabel } from "~/components/orkestrator/orkestrator-barn/OrkestratorOpplysningLabel";

import { components } from "../../../../openapi/soknad-orkestrator-typer";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | boolean | undefined>;
  readOnly?: boolean;
}

export function OrkestratorOpplysningTekst({ opplysning, formScope, readOnly }: IProps) {
  const field = useField(formScope);

  return (
    <TextField
      {...field.getInputProps()}
      size="small"
      type="text"
      label={<OrkestratorOpplysningLabel opplysning={opplysning} />}
      error={field.error()}
      readOnly={readOnly || opplysning.kilde === "register"}
    />
  );
}
