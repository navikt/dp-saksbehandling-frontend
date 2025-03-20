import { TextField } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";

import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: IOrkestratorBarnOpplysning;
  formScope: FormScope<string>;
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
