import { Radio, RadioGroup, Stack } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";
import { components } from "openapi/soknad-orkestrator-typer";

import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string>;
}

export function OrkestratorOpplysningBoolsk({ opplysning, formScope }: IProps) {
  const field = useField(formScope);

  return (
    <RadioGroup
      {...field.getInputProps()}
      legend={hentOrkestratorBarnOpplysningLabel(opplysning.id)}
      size="small"
      error={field.error()}
      readOnly={opplysning.kilde === "register" || opplysning.id === "forsorgerBarnet"}
    >
      <Stack gap="0 6" direction={{ xs: "column", sm: "row" }} wrap={false}>
        <Radio value="true">Ja</Radio>
        <Radio value="false">Nei</Radio>
      </Stack>
    </RadioGroup>
  );
}
