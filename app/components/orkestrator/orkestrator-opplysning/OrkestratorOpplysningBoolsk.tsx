import { Radio, RadioGroup, Stack } from "@navikt/ds-react";
import { FormScope, useField } from "@rvf/react-router";

import { OrkestratorOpplysningLabel } from "~/components/orkestrator/orkestrator-barn/OrkestratorOpplysningLabel";

import { components } from "../../../../openapi/soknad-orkestrator-typer";

interface IProps {
  opplysning: components["schemas"]["BarnOpplysning"];
  formScope: FormScope<string | boolean | undefined>;
  readOnly?: boolean;
}

export function OrkestratorOpplysningBoolsk({ opplysning, formScope, readOnly }: IProps) {
  const field = useField(formScope);

  return (
    <RadioGroup
      {...field.getInputProps()}
      legend={<OrkestratorOpplysningLabel opplysning={opplysning} />}
      size="small"
      error={field.error()}
      readOnly={readOnly || opplysning.kilde === "register"}
    >
      <Stack direction={{ xs: "column", sm: "row" }} wrap={false} gap="space-12">
        <Radio value="true">Ja</Radio>
        <Radio value="false">Nei</Radio>
      </Stack>
    </RadioGroup>
  );
}
