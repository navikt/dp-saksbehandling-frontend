import { Radio, RadioGroup, Stack } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";

import { hentOrkestratorBarnOpplysningLabel } from "~/utils/orkestrator-opplysninger.utils";

import { components } from "../../../../openapi/soknad-orkestrator-typer";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | undefined>;
}

export function OrkestratorOpplysningBoolsk({ opplysning, formScope }: IProps) {
  const field = useField(formScope);

  return (
    <RadioGroup
      {...field.getInputProps()}
      legend={hentOrkestratorBarnOpplysningLabel(opplysning.id)}
      size="small"
      error={field.error()}
      readOnly={opplysning.kilde === "register"}
    >
      <Stack direction={{ xs: "column", sm: "row" }} wrap={false}>
        <Radio value="true">Ja</Radio>
        <Radio value="false">Nei</Radio>
      </Stack>
    </RadioGroup>
  );
}
