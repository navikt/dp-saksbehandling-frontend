import { TextField } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/remix";
import { IOrkestratorBarnOpplysning } from "~/models/orkestrator-opplysning.server";
import {
  hentFormatertOpplysninigsverdi,
  hentOrkestratorOpplysningVisningTekst,
} from "~/utils/orkestrator-opplysninger.utils";

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
      label={hentOrkestratorOpplysningVisningTekst(opplysning.id)}
      value={field.value()}
      error={field.error()}
      readOnly={opplysning.kilde === "register"}
    />
  );
}
